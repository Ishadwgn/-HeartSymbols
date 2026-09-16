import { copyEngine } from './copyEngine.js';

export function openSymbolModal(symbol) {
  const modal = document.getElementById('symbol-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="font-size: 4rem; line-height: 1; margin-bottom: 0.5rem; color: var(--text-primary);">${symbol.char}</div>
      <h2 style="font-size: 1.4rem; margin-bottom: 0.3rem;">${symbol.name}</h2>
      <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">
        <span style="background: rgba(255, 51, 102, 0.1); color: var(--primary-pink); padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">
          ${symbol.category.toUpperCase()}
        </span>
        <span style="background: var(--border-subtle); color: var(--text-secondary); padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem;">
          ${symbol.unicode}
        </span>
      </div>
    </div>

    <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem; text-align: center;">
      ${symbol.meaning || 'No description available.'}
    </p>

    <!-- Technical Specs Grid -->
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Alt Code</div>
        <div style="font-weight: 600; font-family: monospace; color: var(--text-primary);">${symbol.altCode || 'N/A'}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">HTML Entity</div>
        <div style="font-weight: 600; font-family: monospace; color: var(--text-primary);">${escapeHtml(symbol.htmlEntity || symbol.dec || 'N/A')}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Decimal Code</div>
        <div style="font-weight: 600; font-family: monospace; color: var(--text-primary);">${symbol.dec || 'N/A'}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">CSS Escape</div>
        <div style="font-weight: 600; font-family: monospace; color: var(--text-primary);">${symbol.cssCode || 'N/A'}</div>
      </div>
    </div>

    <!-- Contextual Internal Actions & Outbound References -->
    <div style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Related Tools & Guides:</div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="#/tools/aesthetic-text" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;" onclick="closeModal()">
          <span>✨ Bio Styler</span>
        </a>
        <a href="#/how-to-type" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;" onclick="closeModal()">
          <span>⌨️ Alt Codes</span>
        </a>
        <a href="#/meanings/colors" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;" onclick="closeModal()">
          <span>💡 Meanings</span>
        </a>
        <a href="https://www.unicode.org/charts/PDF/U2600.pdf" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; color: var(--primary-pink);">
          <span>Unicode Chart ↗</span>
        </a>
      </div>
    </div>

    <!-- Actions -->
    <div style="display: flex; gap: 0.75rem; justify-content: center;">
      <button id="modal-copy-char-btn" class="btn-primary" style="flex: 1; justify-content: center;">
        <span>Copy Symbol (${symbol.char})</span>
      </button>
      <button id="modal-add-tray-btn" class="btn-secondary" style="flex: 1; justify-content: center;">
        <span>+ Add to Tray</span>
      </button>
    </div>
  `;

  window.closeModal = closeModal;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  document.getElementById('modal-copy-char-btn').addEventListener('click', () => {
    copyEngine.copy(symbol.char, `Copied ${symbol.name}!`, true);
    closeModal();
  });

  document.getElementById('modal-add-tray-btn').addEventListener('click', () => {
    copyEngine.addToTray(symbol.char);
    closeModal();
  });

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }
}

export function closeModal() {
  const modal = document.getElementById('symbol-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// Global modal backdrop close
window.addEventListener('click', (e) => {
  const modal = document.getElementById('symbol-modal');
  if (e.target === modal) {
    closeModal();
  }
});

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
