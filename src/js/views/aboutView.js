import { copyEngine } from '../components/copyEngine.js';

export function renderAboutView(container, subType = 'about') {
  if (subType === 'privacy') {
    renderPrivacyPage(container);
  } else if (subType === 'terms') {
    renderTermsPage(container);
  } else if (subType === 'editorial') {
    renderEditorialPage(container);
  } else if (subType === 'api') {
    renderApiPage(container);
  } else if (subType === 'sitemap') {
    renderSitemapPage(container);
  } else {
    renderAboutPage(container);
  }
}

function renderAboutPage(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">About HeartSymbols.io</span>
      </nav>

      <div class="tool-header">
        <h1>About <span class="text-gradient">HeartSymbols.io</span></h1>
        <p>The definitive web utility for Unicode heart typography, emoji psychology, and bio styling.</p>
      </div>

      <div class="tool-card-box">
        <h2 style="font-size: 1.4rem; margin-bottom: 0.8rem;">Our Mission</h2>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          HeartSymbols.io was engineered to solve the fragmentation of special symbols across the internet. Whether you are a gamer designing a stylish Free Fire nickname, a creator curating an aesthetic Instagram bio, a developer seeking exact HTML/CSS hex codepoints, or someone trying to understand what a heart emoji from a crush signifies, we provide instantaneous, 1-click tools and authoritative information.
        </p>

        <h2 style="font-size: 1.4rem; margin-bottom: 0.8rem;">Universal Compatibility</h2>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          All symbols indexed in our database are cross-referenced with the official Unicode Consortium standard (Unicode 15.1 and earlier). We test rendering across Apple iOS/macOS, Google Android/ChromeOS, Microsoft Windows 11, and Linux.
        </p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="#/editorial" class="btn-primary">Editorial Guidelines</a>
          <a href="#/api" class="btn-secondary">Embed Widget & Free API</a>
          <a href="#/sitemap" class="btn-secondary">Visual HTML Sitemap</a>
        </div>
      </div>
    </div>
  `;
}

function renderEditorialPage(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Editorial & Fact-Checking Policy</span>
      </nav>

      <div class="tool-header">
        <h1>Editorial & <span class="text-gradient">Fact-Checking Policy</span></h1>
        <p>How we ensure accurate Unicode codepoints, typing shortcuts, and cultural context.</p>
      </div>

      <div class="tool-card-box">
        <h2 style="font-size: 1.3rem; margin-bottom: 0.6rem;">1. Unicode Standard Adherence</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.2rem;">Every codepoint (e.g. U+2665, U+1FAF0) is verified against Unicode Technical Reports and standardized character databases.</p>

        <h2 style="font-size: 1.3rem; margin-bottom: 0.6rem;">2. Platform Testing</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.2rem;">We test keyboard Alt codes on both physical numeric keypads and laptop Fn-lock modes, as well as iOS/Android native keyboard behaviors.</p>

        <h2 style="font-size: 1.3rem; margin-bottom: 0.6rem;">3. Cultural & Psychology Research</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.2rem;">Our emoji meaning guides cross-reference sociological data, youth culture trends, K-pop gesture histories, and messaging platform milestones.</p>
      </div>
    </div>
  `;
}

function renderApiPage(container) {
  const embedCode = `<iframe src="https://heart-symbols.io/embed" width="100%" height="450" frameborder="0"></iframe>`;

  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Free Embed Widget & API</span>
      </nav>

      <div class="tool-header">
        <h1>Free Heart Symbols <span class="text-gradient">Widget & JSON API</span></h1>
        <p>Embed our 1-click heart copy-paste matrix into your blog, Discord bot, or web app for free.</p>
      </div>

      <div class="tool-card-box">
        <h2 style="font-size: 1.3rem; margin-bottom: 0.6rem;">Embeddable HTML Widget</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Paste this iframe snippet directly into your website or WordPress post:</p>
        
        <pre class="ascii-display-box" style="margin-bottom: 1rem;">${escapeHtml(embedCode)}</pre>
        <button id="copy-embed-btn" class="btn-primary" style="margin-bottom: 2rem;">Copy Embed Code</button>

        <h2 style="font-size: 1.3rem; margin-bottom: 0.6rem;">Free JSON Data Format</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">All heart characters are available in clean JSON for bot and tool developers:</p>
        <pre class="ascii-display-box">[
  { "char": "♥", "name": "Black Heart Suit", "unicode": "U+2665", "alt": "Alt+3" },
  { "char": "♡", "name": "White Heart Suit", "unicode": "U+2661", "alt": "Alt+9825" },
  { "char": "❤️", "name": "Red Heart", "unicode": "U+2764" }
]</pre>
      </div>
    </div>
  `;

  document.getElementById('copy-embed-btn').addEventListener('click', () => {
    copyEngine.copy(embedCode, 'Copied Embed Code!', true);
  });
}

function renderPrivacyPage(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Privacy Policy</span>
      </nav>

      <div class="tool-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: September 2026</p>
      </div>

      <div class="tool-card-box" style="color: var(--text-secondary); line-height: 1.7;">
        <p style="margin-bottom: 1rem;">At HeartSymbols.io, we respect your privacy. All text styling, bio generation, and symbol copying occurs strictly inside your web browser (client-side).</p>
        <p style="margin-bottom: 1rem;">We do not collect, store, transmit, or monitor any text, passwords, or usernames you enter into our generators.</p>
        <p>We use local browser storage only to save your light/dark theme preference.</p>
      </div>
    </div>
  `;
}

function renderTermsPage(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Terms of Service</span>
      </nav>

      <div class="tool-header">
        <h1>Terms of Service</h1>
        <p>Last updated: September 2026</p>
      </div>

      <div class="tool-card-box" style="color: var(--text-secondary); line-height: 1.7;">
        <p style="margin-bottom: 1rem;">All Unicode heart characters and public emoji definitions are freely usable for personal and commercial projects without royalty.</p>
        <p>HeartSymbols.io is provided free of charge as a public web utility.</p>
      </div>
    </div>
  `;
}

function renderSitemapPage(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Visual HTML Sitemap</span>
      </nav>

      <div class="tool-header">
        <h1>Visual <span class="text-gradient">3-Click SILO Sitemap</span></h1>
        <p>Explore the complete hierarchical tree of all pages and tools on HeartSymbols.io.</p>
      </div>

      <div class="tool-card-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">🏠 Core Hub (Click 0)</h3>
            <ul class="footer-links">
              <li><a href="#/">Homepage (1-Click Copy Matrix)</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">🛠️ Silo 1: Interactive Tools</h3>
            <ul class="footer-links">
              <li><a href="#/tools">Tools Overview</a></li>
              <li><a href="#/tools/aesthetic-text">Aesthetic Bio Generator</a></li>
              <li><a href="#/tools/emoji-combos">Emoji Combo Mixer</a></li>
              <li><a href="#/tools/ascii-art">Big ASCII Heart Art</a></li>
              <li><a href="#/tools/svg-customizer">SVG & PNG Customizer</a></li>
              <li><a href="#/tools/1000-hearts">1000 Hearts Repeater</a></li>
              <li><a href="#/tools/morse-code">Heart Morse Code</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">🔣 Silo 2: Symbol Directory</h3>
            <ul class="footer-links">
              <li><a href="#/symbols">Directory Master</a></li>
              <li><a href="#/symbols/aesthetic">Aesthetic Hearts (ᥫ᭡)</a></li>
              <li><a href="#/symbols/classic">Classic Text (♥ ♡)</a></li>
              <li><a href="#/symbols/emojis">Color Emojis (❤️ 🩷)</a></li>
              <li><a href="#/symbols/gestures">Hand Gestures (🫰 🫶)</a></li>
              <li><a href="#/symbols/kaomoji">Kaomoji Emoticons</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">📖 Silo 3: Meanings & Context</h3>
            <ul class="footer-links">
              <li><a href="#/meanings">Meanings Overview</a></li>
              <li><a href="#/meanings/colors">All Color Meanings</a></li>
              <li><a href="#/meanings/dating">Dating & Texting Decoder</a></li>
              <li><a href="#/meanings/snapchat">Snapchat Heart Levels</a></li>
              <li><a href="#/meanings/gestures">Korean Finger Heart Origin</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">⌨️ Silo 4: How to Type</h3>
            <ul class="footer-links">
              <li><a href="#/how-to-type">Keyboard & Alt Codes</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">⚖️ Silo 5: Comparisons</h3>
            <ul class="footer-links">
              <li><a href="#/compare">Side-by-Side Comparisons</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">🎮 Silo 6: Gaming Presets</h3>
            <ul class="footer-links">
              <li><a href="#/presets">Free Fire & Roblox Presets</a></li>
            </ul>
          </div>

          <div>
            <h3 style="color: var(--primary-pink); margin-bottom: 0.8rem;">📚 Silo 7: Unicode Glossary</h3>
            <ul class="footer-links">
              <li><a href="#/glossary">Codepoint Index & Specs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
