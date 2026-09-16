import { HEART_SYMBOLS, CATEGORIES } from '../../data/heartSymbols.js';
import { copyEngine } from '../components/copyEngine.js';
import { openSymbolModal } from '../components/detailModal.js';

export function renderHomeView(container) {
  let activeCategory = 'all';
  let searchQuery = '';
  let currentFontSize = 2.5; // rem

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-badge">
          <span>❤️ Official Heart Symbol Reference & Tools Hub</span>
        </div>
        <h1 class="hero-title">
          Heart Symbols (<span class="text-gradient">♥ ♡ ❥ ❦ ❤️ 🫰</span>) Copy and Paste
        </h1>
        <p class="hero-subtitle">
          Instant 1-click copy & paste 150+ heart symbols: aesthetic hearts (ᥫ᭡, 𓆩♡𓆪), color emojis (❤️, 🩷), Korean finger hearts (🫰), Alt codes, HTML entities, CSS escapes, and interactive tools.
        </p>

        <!-- Live Search Bar -->
        <div class="search-container">
          <div class="search-input-wrapper">
            <span class="search-icon-inside">🔍</span>
            <input 
              type="text" 
              id="home-search-input" 
              class="main-search-input" 
              placeholder="Search hearts (e.g. 'pink', 'alt 3', 'wings', 'korean', 'fire')..."
              autocomplete="off"
            />
            <button id="search-clear-btn" class="search-clear-btn" style="display: none;">&times;</button>
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="category-pills-row" id="category-pills-container" style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
          ${CATEGORIES.map(cat => `
            <button class="pill-btn ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
              <span>${cat.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Main Grid Section -->
    <section class="container">
      <!-- Toolbar -->
      <div class="controls-toolbar">
        <div class="toolbar-left">
          <span class="count-indicator" id="results-count-text">Showing 150 symbols</span>
          <span style="color: var(--text-muted);">|</span>
          <a href="#/tools/batch-copier" class="batch-copier-link">Batch Tray Copier ↗</a>
        </div>
        <div class="size-slider-control">
          <span>Size:</span>
          <input type="range" id="size-slider" min="1.6" max="4.0" step="0.2" value="2.5" />
        </div>
      </div>

      <!-- Symbols Grid -->
      <div class="symbol-grid" id="main-symbol-grid"></div>

      <!-- 3-Step Instruction Section (Like Arrow Site) -->
      <div class="features-highlight-grid" style="margin-top: 2rem;">
        <div class="feature-box">
          <div class="feature-icon-circle">🔍</div>
          <h3 class="feature-box-title">Browse or Search</h3>
          <p class="feature-box-desc">Filter over 150+ heart symbols by aesthetic category, color mood, Alt code, or exact Unicode codepoint in real time.</p>
        </div>

        <div class="feature-box">
          <div class="feature-icon-circle">ℹ️</div>
          <h3 class="feature-box-title">Customize & Inspect</h3>
          <p class="feature-box-desc">Click ℹ️ to inspect HTML entities, CSS escapes, decimal codes, and Alt codes, or launch the Visual Studio to colorize and resize.</p>
        </div>

        <div class="feature-box">
          <div class="feature-icon-circle">📋</div>
          <h3 class="feature-box-title">1-Click Copy & Paste</h3>
          <p class="feature-box-desc">Click any symbol to copy directly to your clipboard. Paste seamlessly into Instagram bios, Discord, Roblox, TikTok, Word, or HTML.</p>
        </div>
      </div>

      <!-- INTERACTIVE TOOLS SHOWCASE (Like Arrow Site) -->
      <div style="margin-top: 4rem;">
        <div class="section-header">
          <h2>Interactive Heart <span class="text-gradient">Tools & Utilities</span></h2>
          <p>Explore browser-based generators, vector SVG customizers, CSS shape builders, and batch copiers.</p>
        </div>

        <div class="interactive-tools-grid">
          <!-- Tool 1: Visual Studio / SVG Generator -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/svg-customizer'">
            <span class="tool-badge-pill">🎨 Visual Studio</span>
            <h3 class="tool-card-title">Heart Symbol Generator & Studio</h3>
            <p class="tool-card-desc">Customize vector heart colors, radiant gradient angles, neon glow drop shadows, and export pure SVG or PNG markup.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>

          <!-- Tool 2: Batch Copier -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/batch-copier'">
            <span class="tool-badge-pill">📋 Batch Copier</span>
            <h3 class="tool-card-title">Heart Symbol Copier</h3>
            <p class="tool-card-desc">Multi-select batch clipboard collector with custom formatting, delimiter presets, and count tags.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>

          <!-- Tool 3: Bio Text Styler -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/aesthetic-text'">
            <span class="tool-badge-pill">✍️ Bio Styler</span>
            <h3 class="tool-card-title">Aesthetic Heart Text Generator</h3>
            <p class="tool-card-desc">Wrap your text and social media bios with stylish heart borders, wing brackets, and aesthetic dividers.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>

          <!-- Tool 4: Emoji Combo Mixer -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/emoji-combos'">
            <span class="tool-badge-pill">💖 Combo Mixer</span>
            <h3 class="tool-card-title">Cute Heart Emoji Combos</h3>
            <p class="tool-card-desc">100+ curated heart pairings, kaomoji faces, and stardust sparkle combinations for bio headers.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>

          <!-- Tool 5: Big ASCII Art Maker -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/ascii-art'">
            <span class="tool-badge-pill">📜 ASCII Art</span>
            <h3 class="tool-card-title">Big ASCII Heart Art Maker</h3>
            <p class="tool-card-desc">Generate giant ASCII hearts made of text, custom letters, and banners for Discord and WhatsApp.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>

          <!-- Tool 6: 1000 Hearts Repeater -->
          <div class="interactive-tool-card" onclick="window.location.hash='#/tools/1000-hearts'">
            <span class="tool-badge-pill">💯 Multiplier</span>
            <h3 class="tool-card-title">1000 Heart Symbols Repeater</h3>
            <p class="tool-card-desc">Instantly copy 100, 500, 1000, or 10,000 heart symbols in 1 click with custom line breaks.</p>
            <div class="tool-card-action">Launch Tool →</div>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 4rem;">
          <a href="#/tools" class="btn-primary" style="padding: 0.8rem 2rem; font-size: 1rem;">View All Interactive Tools →</a>
        </div>
      </div>

      <!-- CATEGORY DIRECTORY SHOWCASE (Like Arrow Site) -->
      <div style="margin-top: 2rem;">
        <div class="section-header">
          <h2>Browse Heart Symbols <span class="text-gradient">by Category</span></h2>
          <p>Organized by visual shape, aesthetic style, Unicode block, and emotional meaning.</p>
        </div>

        <div class="category-directory-grid">
          <!-- Classic -->
          <div class="directory-cat-card" onclick="window.location.hash='#/symbols/classic'">
            <div class="cat-glyph-preview">♥</div>
            <div class="cat-count-tag">24 Glyphs</div>
            <h3 class="cat-card-title">Classic Text Hearts</h3>
            <p class="cat-card-desc">Solid playing cards, outline suits, and standard typographical hearts (♥, ♡, ❣).</p>
            <div class="tool-card-action">Browse Collection → ♥</div>
          </div>

          <!-- Aesthetic -->
          <div class="directory-cat-card" onclick="window.location.hash='#/symbols/aesthetic'">
            <div class="cat-glyph-preview">ᥫ᭡</div>
            <div class="cat-count-tag">42 Glyphs</div>
            <h3 class="cat-card-title">Aesthetic & Cute Hearts</h3>
            <p class="cat-card-desc">Viral TikTok hearts, angel wings, coquette ribbons, and vintage floral dingbats (ᥫ᭡, 𓆩♡𓆪, ❥).</p>
            <div class="tool-card-action">Browse Collection → ✨</div>
          </div>

          <!-- Color Emojis -->
          <div class="directory-cat-card" onclick="window.location.hash='#/symbols/emojis'">
            <div class="cat-glyph-preview">❤️</div>
            <div class="cat-count-tag">32 Glyphs</div>
            <h3 class="cat-card-title">Full Color Heart Emojis</h3>
            <p class="cat-card-desc">All 12 official Unicode color hearts, mending hearts, fire hearts, and special emojis.</p>
            <div class="tool-card-action">Browse Collection → ❤️</div>
          </div>

          <!-- Hand Gestures -->
          <div class="directory-cat-card" onclick="window.location.hash='#/symbols/gestures'">
            <div class="cat-glyph-preview">🫰</div>
            <div class="cat-count-tag">18 Glyphs</div>
            <h3 class="cat-card-title">Hand & Gesture Hearts</h3>
            <p class="cat-card-desc">Korean finger heart (🫰), concert heart hands (🫶), and loving facial expressions.</p>
            <div class="tool-card-action">Browse Collection → 🫰</div>
          </div>

          <!-- Kaomoji -->
          <div class="directory-cat-card" onclick="window.location.hash='#/symbols/kaomoji'">
            <div class="cat-glyph-preview">ʕ•ᴥ•ʔ</div>
            <div class="cat-count-tag">28 Glyphs</div>
            <h3 class="cat-card-title">Japanese Kaomoji</h3>
            <p class="cat-card-desc">Anime text faces blowing kisses, teddy bears hugging hearts, and cute ASCII faces.</p>
            <div class="tool-card-action">Browse Collection → 🌸</div>
          </div>

          <!-- Gaming Presets -->
          <div class="directory-cat-card" onclick="window.location.hash='#/presets'">
            <div class="cat-glyph-preview">꧁❤️꧂</div>
            <div class="cat-count-tag">40 Presets</div>
            <h3 class="cat-card-title">Gaming & Bio Presets</h3>
            <p class="cat-card-desc">Free Fire name fonts, Roblox bios, Instagram dividers, and Discord channel templates.</p>
            <div class="tool-card-action">Browse Collection → 🎮</div>
          </div>
        </div>
      </div>

      <!-- ACCORDION FAQ SECTION (Like Arrow Site) -->
      <div style="margin-top: 2rem;">
        <div class="section-header">
          <h2>Frequently Asked <span class="text-gradient">Questions</span></h2>
          <p>Everything you need to know about typing, copying, and using heart symbols.</p>
        </div>

        <div class="faq-accordion-container" id="faq-container">
          <div class="faq-item">
            <div class="faq-question">
              <span>How do I copy and paste a heart symbol?</span>
              <span class="faq-chevron">▼</span>
            </div>
            <div class="faq-answer">
              Simply click on any heart symbol card on this site. It copies instantly to your clipboard, and you can paste it anywhere using Ctrl+V (Windows) or Cmd+V (Mac).
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>What is the keyboard Alt code for a heart symbol on Windows?</span>
              <span class="faq-chevron">▼</span>
            </div>
            <div class="faq-answer">
              Make sure NumLock is ON, press and hold the Alt key, type 3 on the numeric keypad, and release Alt to produce ♥. For an outline heart, type Alt + 9825.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>What is the HTML entity code for a heart?</span>
              <span class="faq-chevron">▼</span>
            </div>
            <div class="faq-answer">
              Use <code>&amp;hearts;</code> or <code>&amp;#9829;</code> for solid ♥, and <code>&amp;#9825;</code> for outline ♡.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Are these heart symbols supported on Instagram, TikTok & Roblox?</span>
              <span class="faq-chevron">▼</span>
            </div>
            <div class="faq-answer">
              Yes! All symbols on this site are standardized Unicode characters supported across iOS, Android, macOS, Windows, Discord, Instagram bios, TikTok, Roblox, and Free Fire.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Can I use these symbols and generated SVGs commercially?</span>
              <span class="faq-chevron">▼</span>
            </div>
            <div class="faq-answer">
              Yes, 100%. All heart tools, generated CSS snippets, SVGs, and Unicode characters are completely free and royalty-free for commercial and personal use.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const grid = document.getElementById('main-symbol-grid');
  const searchInput = document.getElementById('home-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const countText = document.getElementById('results-count-text');
  const sizeSlider = document.getElementById('size-slider');

  function renderGrid() {
    const filtered = HEART_SYMBOLS.filter(item => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch = 
        item.char.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        (item.altCode && item.altCode.toLowerCase().includes(q)) ||
        (item.unicode && item.unicode.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
        (item.meaning && item.meaning.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });

    countText.textContent = `Showing ${filtered.length} symbol${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💔</div>
          <p style="font-size: 1.1rem; font-weight: 600;">No matching heart symbols found</p>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Try searching for 'pink', 'alt 3', 'wings', or 'aesthetic'</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="symbol-card" data-char="${item.char}" title="Click to Copy ${item.name}">
        <button class="symbol-info-trigger" data-info="${item.char}" title="Inspect Details & Specs">ℹ️</button>
        <span class="symbol-action-badge">Copy</span>
        <div class="symbol-glyph" style="font-size: ${currentFontSize}rem;">${item.char}</div>
        <div class="symbol-name">${item.name}</div>
      </div>
    `).join('');

    // Attach click listeners to cards
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

  // Search input listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearBtn.style.display = searchQuery ? 'block' : 'none';
    renderGrid();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderGrid();
  });

  // Size slider listener
  sizeSlider.addEventListener('input', (e) => {
    currentFontSize = parseFloat(e.target.value);
    grid.querySelectorAll('.symbol-glyph').forEach(glyph => {
      glyph.style.fontSize = `${currentFontSize}rem`;
    });
  });

  // Category filter listeners
  const pillsContainer = document.getElementById('category-pills-container');
  if (pillsContainer) {
    pillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;
      pillsContainer.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      renderGrid();
    });
  }

  // FAQ Accordion listener
  const faqContainer = document.getElementById('faq-container');
  if (faqContainer) {
    faqContainer.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  }

  // Initial render
  renderGrid();
}
