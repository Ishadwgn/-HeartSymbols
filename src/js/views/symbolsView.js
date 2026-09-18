import { HEART_SYMBOLS } from '../../data/heartSymbols.js';
import { copyEngine } from '../components/copyEngine.js';
import { openSymbolModal } from '../components/detailModal.js';

export function renderSymbolsView(container, category = null) {
  let filtered = HEART_SYMBOLS;
  let title = "Heart Symbols Directory";
  let desc = "Browse all categorized heart characters, aesthetic wing brackets, emoticons, and Unicode codes.";

  if (category === 'aesthetic') {
    filtered = HEART_SYMBOLS.filter(s => s.category === 'aesthetic');
    title = "Aesthetic & Cute Heart Symbols (ᥫ᭡ 𓆩♡𓆪 ❥)";
    desc = "Viral TikTok brackets, coquette ribbons, fairy sparkles, and aesthetic text heart bullets.";
  } else if (category === 'classic') {
    filtered = HEART_SYMBOLS.filter(s => s.category === 'classic');
    title = "Classic & Monochrome Text Hearts (♥ ♡ ❣)";
    desc = "Solid card suits, outline hearts, and typographical symbols for clean messaging.";
  } else if (category === 'emojis') {
    filtered = HEART_SYMBOLS.filter(s => s.category === 'emojis');
    title = "Full Color Heart Emojis (❤️ 🩷 🖤 🤍 💙)";
    desc = "All 12 official Unicode color hearts plus emotive and special animated hearts.";
  } else if (category === 'gestures') {
    filtered = HEART_SYMBOLS.filter(s => s.category === 'gestures');
    title = "Hand & Gesture Heart Symbols (🫰 🫶 😍)";
    desc = "Korean finger hearts, two-hand concert hearts, and loving face emoticons.";
  } else if (category === 'kaomoji') {
    filtered = HEART_SYMBOLS.filter(s => s.category === 'kaomoji');
    title = "Japanese Kaomoji & Cute Emoticons";
    desc = "Anime text faces blowing kisses, bear hugging hearts, and cute ASCII combos.";
  }

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/symbols" class="breadcrumb-link">Directory</a>
        ${category ? `<span>/</span><span class="breadcrumb-current">${title}</span>` : ''}
      </nav>

      <div class="tool-header">
        <h1>${title}</h1>
        <p>${desc}</p>
      </div>

      <!-- Quick sub-category pills -->
      <div class="category-pills-row">
        <a href="#/symbols" class="pill-btn ${!category ? 'active' : ''}">All Directory</a>
        <a href="#/symbols/aesthetic" class="pill-btn ${category === 'aesthetic' ? 'active' : ''}">Aesthetic Hearts</a>
        <a href="#/symbols/classic" class="pill-btn ${category === 'classic' ? 'active' : ''}">Classic Text</a>
        <a href="#/symbols/emojis" class="pill-btn ${category === 'emojis' ? 'active' : ''}">Color Emojis</a>
        <a href="#/symbols/gestures" class="pill-btn ${category === 'gestures' ? 'active' : ''}">Hand Gestures</a>
        <a href="#/symbols/kaomoji" class="pill-btn ${category === 'kaomoji' ? 'active' : ''}">Kaomoji</a>
      </div>

      <!-- Symbols Grid -->
      <div class="symbol-grid" id="directory-symbols-grid">
        ${filtered.map(item => `
          <div class="symbol-card card-sheen" data-char="${item.char}" role="button" tabindex="0" aria-label="Copy ${item.name} ${item.char}">
            <div class="card-header-bar">
              <span class="card-code-badge">${item.unicode || ''}</span>
              <div class="card-action-triggers">
                <button type="button" class="card-action-icon symbol-tray-trigger" data-char="${item.char}" title="Add to Batch Tray" aria-label="Add to batch tray">＋</button>
                <button type="button" class="card-action-icon symbol-info-trigger" data-info="${item.char}" title="Inspect Details & Codes" aria-label="Inspect ${item.name}">ℹ️</button>
              </div>
            </div>
            <div class="card-glyph-container">
              <div class="char">${item.char}</div>
            </div>
            <div class="name" title="${item.name}">${item.name}</div>
            <button type="button" class="card-copy-btn" data-char="${item.char}" aria-label="Copy ${item.char}">
              <span class="copy-btn-label">Copy</span>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const grid = document.getElementById('directory-symbols-grid');
  grid.querySelectorAll('.symbol-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking info icon
      if (e.target.closest('.symbol-info-trigger')) {
        e.stopPropagation();
        const char = card.getAttribute('data-char');
        const found = HEART_SYMBOLS.find(s => s.char === char);
        if (found) openSymbolModal(found);
        return;
      }

      // If clicking tray icon
      if (e.target.closest('.symbol-tray-trigger')) {
        e.stopPropagation();
        const char = card.getAttribute('data-char');
        copyEngine.addToTray(char);
        copyEngine.showToast('💖', `Added ${char} to tray`);
        return;
      }

      const char = card.getAttribute('data-char');
      const copyBtn = card.querySelector('.card-copy-btn');
      const copyLabel = card.querySelector('.copy-btn-label');

      card.classList.add('copied');
      if (copyBtn) copyBtn.classList.add('copied');
      if (copyLabel) copyLabel.textContent = 'Copied ✓';

      setTimeout(() => {
        card.classList.remove('copied');
        if (copyBtn) copyBtn.classList.remove('copied');
        if (copyLabel) copyLabel.textContent = 'Copy';
      }, 1400);

      copyEngine.copy(char, `Copied "${char}"!`, true);
    });
  });
}


