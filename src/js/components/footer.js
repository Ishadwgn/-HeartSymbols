export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Summary -->
        <div class="footer-brand">
          <a href="#/" class="brand-logo">
            <span class="brand-heart-icon">♥</span>
            <span>Heart<span class="text-gradient">Symbols</span></span>
          </a>
          <p>
            The web's most comprehensive 1-click Heart Symbol copy-paste engine, Unicode reference, bio styler, and emoji psychology dictionary.
          </p>
        </div>

        <!-- Silo 1 & 2 -->
        <div class="footer-col">
          <h4 class="footer-col-title">Symbols & Tools</h4>
          <ul class="footer-links">
            <li><a href="#/">Copy Matrix</a></li>
            <li><a href="#/symbols/aesthetic">Aesthetic Hearts (ᥫ᭡)</a></li>
            <li><a href="#/symbols/classic">Text Hearts (♥ ♡)</a></li>
            <li><a href="#/symbols/emojis">Color Emojis (❤️ 🩷)</a></li>
            <li><a href="#/tools/aesthetic-text">Aesthetic Bio Maker</a></li>
            <li><a href="#/tools/svg-customizer">SVG / PNG Customizer</a></li>
            <li><a href="#/tools/1000-hearts">1000 Hearts Repeater</a></li>
          </ul>
        </div>

        <!-- Silo 3 & 4 -->
        <div class="footer-col">
          <h4 class="footer-col-title">Meanings & Typing</h4>
          <ul class="footer-links">
            <li><a href="#/meanings/colors">Heart Color Meanings</a></li>
            <li><a href="#/meanings/dating">Dating & Texting Rules</a></li>
            <li><a href="#/meanings/snapchat">Snapchat Streak Hearts</a></li>
            <li><a href="#/meanings/gestures">Korean Finger Heart (🫰)</a></li>
            <li><a href="#/how-to-type">Windows Alt + 3 Codes</a></li>
            <li><a href="#/how-to-type">Mac Keyboard Shortcuts</a></li>
            <li><a href="#/how-to-type">HTML & CSS Unicode</a></li>
          </ul>
        </div>

        <!-- Silo 5 & 6 -->
        <div class="footer-col">
          <h4 class="footer-col-title">Presets & Compare</h4>
          <ul class="footer-links">
            <li><a href="#/presets">Free Fire Nicknames</a></li>
            <li><a href="#/presets">Roblox Bio Aesthetics</a></li>
            <li><a href="#/presets">Instagram Bio Dividers</a></li>
            <li><a href="#/presets">Discord Channel Hearts</a></li>
            <li><a href="#/compare">Red ❤️ vs Pink 🩷</a></li>
            <li><a href="#/compare">Black 🖤 vs White 🤍</a></li>
            <li><a href="#/compare">Text ♥ vs Emoji ❤️</a></li>
          </ul>
        </div>

        <!-- Silo 7 & 8 -->
        <div class="footer-col">
          <h4 class="footer-col-title">Authority & Trust</h4>
          <ul class="footer-links">
            <li><a href="#/glossary">Unicode Codepoint Index</a></li>
            <li><a href="#/about">About HeartSymbols.io</a></li>
            <li><a href="#/editorial">Editorial Policy</a></li>
            <li><a href="#/api">Free Embed & API Widget</a></li>
            <li><a href="#/privacy">Privacy Policy</a></li>
            <li><a href="#/terms">Terms of Service</a></li>
            <li><a href="#/sitemap">Visual HTML Sitemap</a></li>
          </ul>
        </div>
      </div>

      <!-- Official Standards & Outbound Documentation Strip -->
      <div style="padding: 1.5rem 0; border-top: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem;">
          Official Standards & External Documentation:
        </div>
        <div style="display: flex; gap: 1.2rem; flex-wrap: wrap; font-size: 0.85rem;">
          <a href="https://www.unicode.org/charts/PDF/U2600.pdf" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">Unicode.org (U+2600 Charts) ↗</a>
          <a href="https://www.unicode.org/reports/tr51/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">Unicode Emoji Standard TR-51 ↗</a>
          <a href="https://www.w3.org/TR/xml-entity-names/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">W3C Named Character Entities ↗</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">MDN Web Docs (CSS content) ↗</a>
          <a href="https://en.wikipedia.org/wiki/Heart_symbol" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">Wikipedia: Heart Semiotics ↗</a>
          <a href="https://emojipedia.org/hearts" target="_blank" rel="noopener noreferrer" style="color: var(--primary-pink);">Emojipedia Hearts ↗</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 HeartSymbols.io — All Unicode characters & glyphs are freely copyable.</div>
        <div>Verified with official Unicode 15.1 and W3C standards.</div>
      </div>
    </div>
  `;
}
