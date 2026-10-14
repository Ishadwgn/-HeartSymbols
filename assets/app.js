(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var toastEl, toastTimer, mixBar, mixText, themeBtn;

  function init() {
    toastEl = $('toast');
    mixBar = $('mix-bar');
    mixText = $('mix-input');
    themeBtn = $('theme-toggle-btn');
    initTheme();
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    document.addEventListener('click', handleGlobalClick);

    var copyAll = $('mix-copy-all'), clearBtn = $('mix-clear');
    if (copyAll) copyAll.onclick = function () {
      if (mixText && mixText.value) copy(mixText.value).then(function (ok) { showToast(ok ? 'Copied mix' : 'Press & hold'); });
    };
    if (clearBtn) clearBtn.onclick = function () {
      if (mixText && mixBar) { mixText.value = ''; mixBar.classList.remove('active'); }
    };
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mixText) mixText.blur();
    });
    initTools();
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('heart_symbols_theme', t);
    if (themeBtn) themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  function initTheme() {
    var s = localStorage.getItem('heart_symbols_theme') || 'dark';
    setTheme(s);
  }

  function toggleTheme() {
    setTheme((document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark');
  }

  function handleGlobalClick(e) {
    var btn = e.target.closest('button[data-s]');
    if (!btn) return;
    var s = btn.getAttribute('data-s');
    if (!s) return;
    copy(s).then(function (ok) {
      if (ok) {
        showToast('Copied ' + s);
        if (mixText && mixBar) {
          mixText.value = (mixText.value || '') + s;
          mixBar.classList.add('active');
        }
        btn.classList.add('copied');
        setTimeout(function () { btn.classList.remove('copied'); }, 450);
      } else {
        showToast('Press and hold to copy');
      }
    });
  }

  async function copy(text) {
    if (!text) return false;
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
    }
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 1400);
  }

  function mapChars(str, A, a) {
    return str.replace(/[a-zA-Z]/g, function (c) {
      var k = c.charCodeAt(0);
      return String.fromCodePoint(k >= 97 ? a + k - 97 : A + k - 65);
    });
  }

  function toBubble(str) {
    return str.replace(/[a-zA-Z0-9]/g, function (c) {
      var k = c.charCodeAt(0);
      return String.fromCodePoint(k >= 97 ? 0x24D0 + k - 97 : (k >= 65 ? 0x24B6 + k - 65 : (k === 48 ? 0x24EA : 0x2460 + k - 49)));
    });
  }

  function initTools() {
    var input = $('font-input'), results = $('font-results'), repeatBtn = $('generate-hearts-btn');
    if (input && results) {
      var STYLES = [
        ['Cursive', '♡ ', ' ♡', 1],
        ['Wings', '𓆩♡𓆪 ', ' 𓆩♡𓆪', 0],
        ['Coquette', '𝜗𝜚 ', ' 𝜗𝜚', 0],
        ['Sparkle', '⋆⁺₊⋆ ♡ ', ' ♡ ⋆⁺₊⋆', 0],
        ['Tai Heart', 'ᥫ᭡ ', ' ᥫ᭡', 0],
        ['Gothic', '♥ ', ' ♥', 2],
        ['Bubble', '❥ ', ' ❥', 3],
        ['Pulse', 'ﮩـﮩ٨ـ🫀ﮩـ ', ' ﮩـﮩ٨ـ🫀ﮩـ', 0],
        ['Fairy', '₊˚⊹♡ ', ' ♡⊹˚₊', 0]
      ];
      function render() {
        var t = input.value.trim() || 'love';
        results.innerHTML = STYLES.map(function (s) {
          var core = s[3] === 1 ? mapChars(t, 0x1D4D0, 0x1D4EA) : (s[3] === 2 ? mapChars(t, 0x1D56C, 0x1D586) : (s[3] === 3 ? toBubble(t) : t));
          var v = s[1] + core + s[2];
          return '<button class="sym font-card" type="button" data-s="' + v + '" aria-label="Copy ' + s[0] + '"><div class="font-meta"><span>' + s[0] + '</span><span class="font-tag">Copy</span></div><div class="g">' + v + '</div></button>';
        }).join('');
      }
      input.addEventListener('input', render);
      render();
    }

    if (repeatBtn) {
      var sym = '♥', cnt = 100;
      var picker = $('repeat-symbol-picker'), countWrap = $('repeat-count-picker');
      if (picker) {
        picker.onclick = function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          picker.querySelectorAll('button').forEach(function (x) { x.style.borderColor = 'var(--border)'; });
          b.style.borderColor = 'var(--accent)';
          sym = b.getAttribute('data-repeat-sym') || '♥';
          repeatBtn.textContent = 'Generate & Copy ' + cnt + ' ' + sym;
        };
      }
      if (countWrap) {
        countWrap.onclick = function (e) {
          var b = e.target.closest('.count-pill');
          if (!b) return;
          countWrap.querySelectorAll('.count-pill').forEach(function (x) { x.classList.remove('btn-primary'); x.classList.add('btn-secondary'); });
          b.classList.remove('btn-secondary'); b.classList.add('btn-primary');
          cnt = parseInt(b.getAttribute('data-count') || '100', 10);
          repeatBtn.textContent = 'Generate & Copy ' + cnt + ' ' + sym;
        };
      }
      repeatBtn.onclick = function () {
        var res = sym.repeat(cnt);
        copy(res).then(function (ok) {
          showToast(ok ? ('Copied ' + cnt + ' ' + sym) : 'Press & hold to copy');
        });
      };
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
