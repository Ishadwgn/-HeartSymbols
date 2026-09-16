import { HEART_SYMBOLS } from '../../data/heartSymbols.js';
import { copyEngine } from '../components/copyEngine.js';

// Font conversion tables
const FONT_STYLES = [
  {
    name: "Cursive Script Heart",
    wrap: (text) => `♡ 𝒯𝑒𝓍𝓉 ♡`,
    transform: (text) => `♡ ${toScript(text)} ♡`
  },
  {
    name: "Double Aesthetic Wing",
    wrap: (text) => `𓆩♡𓆪 𝒯𝑒𝓍𝓉 𓆩♡𓆪`,
    transform: (text) => `𓆩♡𓆪 ${text} 𓆩♡𓆪`
  },
  {
    name: "Coquette Bow Ribbon",
    wrap: (text) => `𝜗𝜚 𝒯𝑒𝓍𝓉 𝜗𝜚`,
    transform: (text) => `𝜗𝜚 ${text} 𝜗𝜚`
  },
  {
    name: "Sparkle Cloud Heart",
    wrap: (text) => `⋆⁺₊⋆ ♡ 𝒯𝑒𝓍𝓉 ♡ ⋆⁺₊⋆`,
    transform: (text) => `⋆⁺₊⋆ ♡ ${text} ♡ ⋆⁺₊⋆`
  },
  {
    name: "Viral Tai Arabic Heart",
    wrap: (text) => `ᥫ᭡ 𝒯𝑒𝓍𝓉 ᥫ᭡`,
    transform: (text) => `ᥫ᭡ ${text} ᥫ᭡`
  },
  {
    name: "Bold Gothic Heart",
    wrap: (text) => `♥ 𝕿𝖊𝖝𝖙 ♥`,
    transform: (text) => `♥ ${toGothic(text)} ♥`
  },
  {
    name: "Bubble Heart Circles",
    wrap: (text) => `❥ Ⓣⓔⓧⓣ ❥`,
    transform: (text) => `❥ ${toBubble(text)} ❥`
  },
  {
    name: "ECG Lifeline Pulse",
    wrap: (text) => `ﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩـ 𝒯𝑒𝓍𝓉 ﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩـ`,
    transform: (text) => `ﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩـ ${text} ﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩـ`
  },
  {
    name: "Stardust Fairy Core",
    wrap: (text) => `₊˚⊹♡ 𝒯𝑒𝓍𝓉 ♡⊹˚₊`,
    transform: (text) => `₊˚⊹♡ ${text} ♡⊹˚₊`
  }
];

function toScript(str) {
  const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const script = "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵";
  return str.split('').map(c => {
    const idx = normal.indexOf(c);
    return idx !== -1 ? script.slice(idx * 2, idx * 2 + 2) : c;
  }).join('');
}

function toGothic(str) {
  const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const gothic = "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ";
  return str.split('').map(c => {
    const idx = normal.indexOf(c);
    return idx !== -1 ? gothic.slice(idx * 2, idx * 2 + 2) : c;
  }).join('');
}

function toBubble(str) {
  const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bubble = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨";
  return str.split('').map(c => {
    const idx = normal.indexOf(c);
    return idx !== -1 ? bubble.slice(idx * 2, idx * 2 + 2) : c;
  }).join('');
}

export function renderToolsView(container, subTool = null) {
  if (subTool === 'aesthetic-text') {
    renderAestheticTextTool(container);
  } else if (subTool === 'batch-copier') {
    renderBatchCopierTool(container);
  } else if (subTool === 'emoji-combos') {
    renderEmojiCombosTool(container);
  } else if (subTool === 'ascii-art') {
    renderAsciiArtTool(container);
  } else if (subTool === 'svg-customizer') {
    renderSvgCustomizerTool(container);
  } else if (subTool === '1000-hearts') {
    render1000HeartsTool(container);
  } else if (subTool === 'morse-code') {
    renderMorseCodeTool(container);
  } else {
    renderToolsHub(container);
  }
}

// 1. TOOLS HUB
function renderToolsHub(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Interactive Tools</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Symbols <span class="text-gradient">Interactive Tools Suite</span></h1>
        <p>A complete suite of aesthetic bio generators, batch copiers, ASCII banner creators, SVG vector designers, and emoji combo mixers.</p>
      </div>

      <div class="interactive-tools-grid">
        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/batch-copier'">
          <span class="tool-badge-pill">📋 Batch Copier</span>
          <h2 class="tool-card-title">Heart Symbol Copier</h2>
          <p class="tool-card-desc">Multi-select batch clipboard collector with custom delimiters, spacing presets, and count counters.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/aesthetic-text'">
          <span class="tool-badge-pill">✨ Bio Styler</span>
          <h2 class="tool-card-title">Aesthetic Heart Bio Generator</h2>
          <p class="tool-card-desc">Turn plain text into stylish fonts decorated with cute heart wings, ribbons, and sparkles.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/svg-customizer'">
          <span class="tool-badge-pill">🎨 Visual Studio</span>
          <h2 class="tool-card-title">Heart SVG & PNG Customizer</h2>
          <p class="tool-card-desc">Design custom vector heart icons with custom hex colors, gradients, and 1-click downloads.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/emoji-combos'">
          <span class="tool-badge-pill">💖 Combo Mixer</span>
          <h2 class="tool-card-title">Heart Emoji Combo Mixer</h2>
          <p class="tool-card-desc">100+ aesthetic heart emoji pairings, kaomoji faces, and stardust combinations.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/ascii-art'">
          <span class="tool-badge-pill">📜 ASCII Banner</span>
          <h2 class="tool-card-title">Big ASCII Heart Art Maker</h2>
          <p class="tool-card-desc">Generate giant ASCII hearts made of text, custom letters, and banners.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/1000-hearts'">
          <span class="tool-badge-pill">💯 Repeater</span>
          <h2 class="tool-card-title">1000 Hearts Repeater</h2>
          <p class="tool-card-desc">Copy 100, 500, 1000, or 10,000 heart symbols in 1 click for spamming love in chats.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>

        <div class="interactive-tool-card" onclick="window.location.hash='#/tools/morse-code'">
          <span class="tool-badge-pill">📡 Cipher</span>
          <h2 class="tool-card-title">Heart Morse Code Translator</h2>
          <p class="tool-card-desc">Encode secret love notes into heart Morse code dots and dashes.</p>
          <div class="tool-card-action">Launch Tool →</div>
        </div>
      </div>
    </div>
  `;
}

// 2. BATCH TRAY COPIER TOOL (Like Arrow Site)
function renderBatchCopierTool(container) {
  let selectedSymbols = [];
  let delimiter = " ";

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">Batch Tray Copier</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Symbol <span class="text-gradient">Batch Tray Copier</span></h1>
        <p>Click multiple heart symbols to collect them into your clipboard tray, format with custom delimiters, and copy all at once.</p>
      </div>

      <!-- Collector Tray Card -->
      <div class="tool-card-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="font-size: 1.2rem;">Collected Symbols Tray (<span id="batch-count-num">0</span>)</h3>
          <div style="display: flex; gap: 0.5rem;">
            <button id="batch-copy-btn" class="btn-primary">Copy All Collected</button>
            <button id="batch-clear-btn" class="btn-secondary">Clear Tray</button>
          </div>
        </div>

        <!-- Delimiter Options -->
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.2rem; flex-wrap: wrap;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">Delimiter / Spacing:</span>
          <button class="pill-btn active delim-btn" data-delim=" ">Space (" ")</button>
          <button class="pill-btn delim-btn" data-delim="">No Space ("")</button>
          <button class="pill-btn delim-btn" data-delim=", ">Comma (", ")</button>
          <button class="pill-btn delim-btn" data-delim=" - ">Hyphen (" - ")</button>
          <button class="pill-btn delim-btn" data-delim="\\n">New Line</button>
        </div>

        <!-- Preview Box -->
        <textarea id="batch-tray-textarea" class="tool-textarea" rows="4" placeholder="Click symbols below to add them to your batch collector..." readonly></textarea>
      </div>

      <!-- Symbol Picker Grid -->
      <h3 style="margin-bottom: 1rem;">Click Symbols to Add to Batch:</h3>
      <div class="symbol-grid" id="batch-picker-grid">
        ${HEART_SYMBOLS.map(item => `
          <div class="symbol-card batch-pick-card" data-char="${item.char}">
            <span class="symbol-action-badge">+ Add</span>
            <div class="symbol-glyph">${item.char}</div>
            <div class="symbol-name">${item.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const textarea = document.getElementById('batch-tray-textarea');
  const countNum = document.getElementById('batch-count-num');
  const copyBtn = document.getElementById('batch-copy-btn');
  const clearBtn = document.getElementById('batch-clear-btn');

  function updateBatchDisplay() {
    countNum.textContent = selectedSymbols.length;
    const actualDelim = delimiter === '\\n' ? '\n' : delimiter;
    textarea.value = selectedSymbols.join(actualDelim);
  }

  container.querySelectorAll('.batch-pick-card').forEach(card => {
    card.addEventListener('click', () => {
      const char = card.getAttribute('data-char');
      selectedSymbols.push(char);
      updateBatchDisplay();
      copyEngine.playPopSound();
    });
  });

  container.querySelectorAll('.delim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.delim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      delimiter = btn.getAttribute('data-delim');
      updateBatchDisplay();
    });
  });

  copyBtn.addEventListener('click', () => {
    if (selectedSymbols.length === 0) return;
    copyEngine.copy(textarea.value, `Copied ${selectedSymbols.length} collected symbols!`, true);
  });

  clearBtn.addEventListener('click', () => {
    selectedSymbols = [];
    updateBatchDisplay();
    copyEngine.showToast('🧹', 'Batch Tray Cleared');
  });
}

// 3. AESTHETIC TEXT TOOL
function renderAestheticTextTool(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">Aesthetic Bio Maker</span>
      </nav>

      <div class="tool-header">
        <h1>Aesthetic Heart <span class="text-gradient">Text & Bio Generator</span></h1>
        <p>Type your name, username, or message to generate beautiful aesthetic heart fonts for Instagram, Roblox, and TikTok.</p>
      </div>

      <div class="tool-card-box">
        <div class="tool-input-group">
          <label class="tool-label" for="bio-text-input">Type your text below:</label>
          <input type="text" id="bio-text-input" class="tool-input" placeholder="e.g. angel, lovely, moonlight..." value="angel" />
        </div>

        <div class="tool-results-list" id="aesthetic-results-list"></div>
      </div>
    </div>
  `;

  const input = document.getElementById('bio-text-input');
  const resultsContainer = document.getElementById('aesthetic-results-list');

  function updateResults() {
    const text = input.value.trim() || 'heart';
    resultsContainer.innerHTML = FONT_STYLES.map(style => {
      const formatted = style.transform(text);
      return `
        <div class="tool-result-item">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">${style.name}</div>
            <div class="tool-result-text">${formatted}</div>
          </div>
          <button class="btn-primary copy-result-btn" data-text="${formatted}">
            <span>Copy</span>
          </button>
        </div>
      `;
    }).join('');

    resultsContainer.querySelectorAll('.copy-result-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-text');
        copyEngine.copy(textToCopy, 'Copied bio style!', true);
      });
    });
  }

  input.addEventListener('input', updateResults);
  updateResults();
}

// 4. EMOJI COMBOS MIXER
function renderEmojiCombosTool(container) {
  const COMBOS = [
    "⋆⁺₊⋆ ♡ ⋆⁺₊⋆",
    "𓆩♡𓆪",
    "₊˚⊹♡",
    "ᥫ᭡",
    "𝜗𝜚 𝜗𝜚",
    "ﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩـ",
    "✧˖°♡°˖✧",
    "˗ˏˋ ♡ ˎˊ˗",
    "(⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥",
    "ʕ•ᴥ•ʔ♡",
    "♥︎♡♥︎♡",
    "˚₊· ͟͟͞͞➳❥",
    "♡━━━♡",
    "‧₊˚ ☁️⋅♡🪐༘⋆",
    "🍓₊˚⊹♡",
    "💌🕊️♡",
    "🌸(｡•ᴗ•｡)♡"
  ];

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">Emoji Combo Mixer</span>
      </nav>

      <div class="tool-header">
        <h1>Cute Heart <span class="text-gradient">Emoji Combos & Kaomoji</span></h1>
        <p>1-click copy aesthetic heart combinations, stardust sparklers, and cute anime kaomojis.</p>
      </div>

      <div class="tool-card-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
          ${COMBOS.map(combo => `
            <div class="tool-result-item" style="flex-direction: column; text-align: center; gap: 0.8rem; padding: 1.5rem 1rem;">
              <div class="tool-result-text" style="font-size: 1.4rem;">${combo}</div>
              <button class="btn-secondary copy-combo-btn" data-combo="${combo}" style="width: 100%; justify-content: center;">
                <span>Copy Combo</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.copy-combo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const combo = btn.getAttribute('data-combo');
      copyEngine.copy(combo, 'Copied cute combo!', true);
    });
  });
}

// 5. ASCII ART MAKER
function renderAsciiArtTool(container) {
  const ASCII_HEARTS = [
    {
      title: "Classic Giant Heart",
      art: `  ***     ***  
 *****   ***** 
******* *******
 ************* 
  ***********  
   *********   
    *******    
     *****     
      ***      
       *       `
    },
    {
      title: "I Love You Banner",
      art: `  _                     
 | |    _____ _____ ___ 
 | |___|     |  |  | -_|
 |_____|_|_|_|\\___/|___|
      <3 <3 <3          `
    },
    {
      title: "Sparkle Winged ASCII Heart",
      art: `  .-""-.     .-""-.  
 /      \\   /      \\ 
|   ()   |_|   ()   |
 \\      /   \\      / 
  '-..-'     '-..-'  
     \\  LOVE  /      
      '.___.'        `
    }
  ];

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">ASCII Heart Art</span>
      </nav>

      <div class="tool-header">
        <h1>Big ASCII <span class="text-gradient">Heart Text Art</span></h1>
        <p>Copy large ASCII hearts and text banners for Discord, Reddit, and WhatsApp messages.</p>
      </div>

      <div class="tool-card-box">
        ${ASCII_HEARTS.map((item, idx) => `
          <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <h3 style="font-size: 1.1rem;">${item.title}</h3>
              <button class="btn-primary copy-ascii-btn" data-idx="${idx}">Copy ASCII</button>
            </div>
            <pre class="ascii-display-box">${item.art}</pre>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.copy-ascii-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      const text = ASCII_HEARTS[idx].art;
      copyEngine.copy(text, 'Copied ASCII Heart!', true);
    });
  });
}

// 6. SVG / PNG CUSTOMIZER (Visual Studio)
function renderSvgCustomizerTool(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">SVG & PNG Customizer</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Symbol <span class="text-gradient">SVG & PNG Visual Studio</span></h1>
        <p>Customize heart vector colors, gradients, neon glow, and download transparent SVGs or high-res PNGs.</p>
      </div>

      <div class="tool-card-box svg-customizer-grid">
        <!-- Controls -->
        <div>
          <div class="tool-input-group">
            <label class="tool-label">Heart Color 1 (Primary Hex)</label>
            <input type="color" id="svg-color-1" value="#ff2a6d" style="width: 100%; height: 40px; border-radius: 8px; cursor: pointer;" />
          </div>

          <div class="tool-input-group">
            <label class="tool-label">Heart Color 2 (Gradient End)</label>
            <input type="color" id="svg-color-2" value="#ff6584" style="width: 100%; height: 40px; border-radius: 8px; cursor: pointer;" />
          </div>

          <div class="tool-input-group">
            <label class="tool-label">Size (px)</label>
            <input type="range" id="svg-size-slider" min="64" max="300" value="160" style="width: 100%; accent-color: var(--primary-pink);" />
          </div>

          <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
            <button id="download-svg-btn" class="btn-primary" style="flex: 1; justify-content: center;">Download SVG</button>
            <button id="copy-svg-code-btn" class="btn-secondary" style="flex: 1; justify-content: center;">Copy SVG Code</button>
          </div>
        </div>

        <!-- Live Preview Stage -->
        <div class="svg-preview-stage">
          <div id="svg-render-box"></div>
        </div>
      </div>
    </div>
  `;

  const color1Input = document.getElementById('svg-color-1');
  const color2Input = document.getElementById('svg-color-2');
  const sizeInput = document.getElementById('svg-size-slider');
  const renderBox = document.getElementById('svg-render-box');

  function updateSvg() {
    const c1 = color1Input.value;
    const c2 = color2Input.value;
    const size = sizeInput.value;

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${c1}" />
            <stop offset="100%" stop-color="${c2}" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="${c1}" flood-opacity="0.3" />
          </filter>
        </defs>
        <path fill="url(#heartGrad)" filter="url(#glow)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;

    renderBox.innerHTML = svgContent;
  }

  color1Input.addEventListener('input', updateSvg);
  color2Input.addEventListener('input', updateSvg);
  sizeInput.addEventListener('input', updateSvg);
  updateSvg();

  document.getElementById('download-svg-btn').addEventListener('click', () => {
    const svgCode = renderBox.innerHTML;
    const blob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'heart-symbol.svg';
    a.click();
    URL.revokeObjectURL(url);
    copyEngine.showToast('📥', 'SVG Downloaded!');
  });

  document.getElementById('copy-svg-code-btn').addEventListener('click', () => {
    copyEngine.copy(renderBox.innerHTML, 'Copied raw SVG code!', true);
  });
}

// 7. 1000 HEARTS REPEATER
function render1000HeartsTool(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">1000 Hearts Repeater</span>
      </nav>

      <div class="tool-header">
        <h1>1000 Heart Symbols <span class="text-gradient">Copy and Paste</span></h1>
        <p>Instantly generate and copy 100, 500, 1000, or 5000 heart symbols in one click.</p>
      </div>

      <div class="tool-card-box">
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
          <button class="btn-secondary count-preset-btn" data-count="100">100 Hearts</button>
          <button class="btn-secondary count-preset-btn" data-count="500">500 Hearts</button>
          <button class="btn-primary count-preset-btn" data-count="1000">1,000 Hearts</button>
          <button class="btn-secondary count-preset-btn" data-count="5000">5,000 Hearts</button>
        </div>

        <div class="tool-input-group">
          <label class="tool-label">Generated Hearts:</label>
          <textarea id="repeated-hearts-box" class="tool-textarea" rows="8" readonly></textarea>
        </div>

        <button id="copy-repeated-btn" class="btn-primary" style="width: 100%; justify-content: center; padding: 1rem;">
          <span>Copy All Generated Hearts</span>
        </button>
      </div>
    </div>
  `;

  const textarea = document.getElementById('repeated-hearts-box');
  const copyBtn = document.getElementById('copy-repeated-btn');

  function generate(count) {
    const symbol = '❤️ ';
    textarea.value = symbol.repeat(count).trim();
  }

  generate(1000);

  container.querySelectorAll('.count-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-preset-btn').forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
      });
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');

      const count = parseInt(btn.getAttribute('data-count'));
      generate(count);
    });
  });

  copyBtn.addEventListener('click', () => {
    copyEngine.copy(textarea.value, 'Copied all hearts to clipboard!', true);
  });
}

// 8. MORSE CODE TOOL
function renderMorseCodeTool(container) {
  const MORSE_MAP = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', ' ': '/'
  };

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/tools" class="breadcrumb-link">Tools</a>
        <span>/</span>
        <span class="breadcrumb-current">Heart Morse Code</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Morse Code <span class="text-gradient">Secret Translator</span></h1>
        <p>Translate romantic messages into heart dots (♡) and dashes (♥).</p>
      </div>

      <div class="tool-card-box">
        <div class="tool-input-group">
          <label class="tool-label">Your Message:</label>
          <input type="text" id="morse-msg-input" class="tool-input" value="I LOVE YOU" />
        </div>

        <div class="tool-input-group">
          <label class="tool-label">Heart Morse Cipher:</label>
          <div id="morse-output-box" class="ascii-display-box" style="font-size: 1.2rem;"></div>
        </div>

        <button id="copy-morse-btn" class="btn-primary" style="margin-top: 1rem;">
          <span>Copy Heart Cipher</span>
        </button>

        <!-- Related Links -->
        <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <h3 style="font-size: 1.15rem; margin-bottom: 0.8rem;">Related Tools & Historical Guides</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            <a href="#/tools/aesthetic-text" class="outbound-link-card">
              <div class="outbound-header-row">
                <span class="outbound-title">Aesthetic Bio Generator</span>
                <span class="outbound-badge" style="color: var(--primary-pink); background: rgba(163, 8, 44, 0.1);">Tool</span>
              </div>
              <p class="outbound-desc">Generate cursive and winged heart bios for social media.</p>
            </a>
            <a href="https://en.wikipedia.org/wiki/Morse_code" target="_blank" rel="noopener noreferrer" class="outbound-link-card">
              <div class="outbound-header-row">
                <span class="outbound-title">Wikipedia: Morse Code History</span>
                <span class="outbound-badge">Official ↗</span>
              </div>
              <p class="outbound-desc">Standard international Morse alphabet and transmission history.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const input = document.getElementById('morse-msg-input');
  const output = document.getElementById('morse-output-box');

  function translate() {
    const text = input.value.toUpperCase();
    const morse = text.split('').map(c => MORSE_MAP[c] || '').join(' ');
    const heartMorse = morse.replace(/\./g, '♡').replace(/-/g, '♥');
    output.textContent = heartMorse || '♡';
  }

  input.addEventListener('input', translate);
  translate();

  document.getElementById('copy-morse-btn').addEventListener('click', () => {
    copyEngine.copy(output.textContent, 'Copied Heart Morse Code!', true);
  });
}
