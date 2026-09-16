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
          <div class="symbol-card" data-char="${item.char}" title="Click to Copy ${item.name}">
            <button class="symbol-info-trigger" data-info="${item.char}" title="Inspect Details & Specs">ℹ️</button>
            <span class="symbol-action-badge">Copy</span>
            <div class="symbol-glyph">${item.char}</div>
            <div class="symbol-name">${item.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const grid = document.getElementById('directory-symbols-grid');
  grid.querySelectorAll('.symbol-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.symbol-info-trigger')) {
        e.stopPropagation();
        const char = card.getAttribute('data-char');
        const found = HEART_SYMBOLS.find(s => s.char === char);
        if (found) openSymbolModal(found);
        return;
      }
      const char = card.getAttribute('data-char');
      copyEngine.copy(char, `Copied "${char}"!`, true);
    });
  });
}
