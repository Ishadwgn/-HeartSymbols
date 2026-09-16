import confetti from 'canvas-confetti';

class CopyEngine {
  constructor() {
    this.trayItems = [];
    this.toastContainer = null;
    this.trayElement = null;
    this.trayTextElement = null;
    this.audioCtx = null;
  }

  init() {
    this.toastContainer = document.getElementById('toast-container');
    this.trayElement = document.getElementById('floating-copy-tray');
    this.trayTextElement = document.getElementById('tray-preview-text');

    const copyAllBtn = document.getElementById('tray-copy-all-btn');
    const clearBtn = document.getElementById('tray-clear-btn');

    if (copyAllBtn) {
      copyAllBtn.addEventListener('click', () => this.copyTrayAll());
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearTray());
    }
  }

  playPopSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08); // A5
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio not permitted or supported; silent fail
    }
  }

  async copy(text, label = 'Copied to Clipboard!', triggerConfetti = false) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      this.playPopSound();
      this.showToast(text, label);

      if (triggerConfetti) {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#ff3366', '#ff758c', '#ff8e53', '#ffffff']
        });
      }

      return true;
    } catch (err) {
      console.error('Failed to copy: ', err);
      this.showToast(text, 'Copy failed, please select manually.');
      return false;
    }
  }

  addToTray(text) {
    this.trayItems.push(text);
    this.updateTrayUI();
    this.copy(text, `Added "${text}" to Multi-Tray!`);
  }

  copyTrayAll() {
    if (this.trayItems.length === 0) return;
    const combined = this.trayItems.join('');
    this.copy(combined, `Copied ${this.trayItems.length} symbols together!`, true);
  }

  clearTray() {
    this.trayItems = [];
    this.updateTrayUI();
    this.showToast('🧹', 'Multi-Copy Tray Cleared');
  }

  updateTrayUI() {
    if (!this.trayElement || !this.trayTextElement) return;
    if (this.trayItems.length > 0) {
      this.trayElement.classList.add('active');
      this.trayTextElement.textContent = this.trayItems.join(' ');
    } else {
      this.trayElement.classList.remove('active');
      this.trayTextElement.textContent = '';
    }
  }

  showToast(symbol, message) {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-heart-symbol">${escapeHtml(symbol)}</span>
      <span>${escapeHtml(message)}</span>
    `;

    this.toastContainer.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 2200);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const copyEngine = new CopyEngine();
