export function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  header.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <!-- Logo -->
        <a href="#/" class="brand-logo" aria-label="Heart Symbols Home">
          <span class="brand-heart-icon">♥</span>
          <span>Heart<span class="text-gradient">Symbols</span></span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-menu" aria-label="Primary Navigation">
          <ul class="nav-links">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <span>Copy Matrix</span>
              </a>
            </li>

            <!-- SILO 1: TOOLS -->
            <li class="nav-item">
              <a href="#/tools" class="nav-link">
                <span>Tools ▾</span>
              </a>
              <div class="mega-dropdown">
                <a href="#/tools/aesthetic-text" class="dropdown-item">
                  <span class="dropdown-icon">✨</span>
                  <div>
                    <div class="dropdown-title">Aesthetic Bio Maker</div>
                    <div class="dropdown-desc">Fancy fonts, wings & sparklers</div>
                  </div>
                </a>
                <a href="#/tools/batch-copier" class="dropdown-item">
                  <span class="dropdown-icon">📋</span>
                  <div>
                    <div class="dropdown-title">Batch Tray Copier</div>
                    <div class="dropdown-desc">Multi-select clipboard collector</div>
                  </div>
                </a>
                <a href="#/tools/emoji-combos" class="dropdown-item">
                  <span class="dropdown-icon">💖</span>
                  <div>
                    <div class="dropdown-title">Emoji Combo Mixer</div>
                    <div class="dropdown-desc">Curated cute heart combinations</div>
                  </div>
                </a>
                <a href="#/tools/ascii-art" class="dropdown-item">
                  <span class="dropdown-icon">📜</span>
                  <div>
                    <div class="dropdown-title">ASCII Heart Art</div>
                    <div class="dropdown-desc">Big text banner generator</div>
                  </div>
                </a>
                <a href="#/tools/svg-customizer" class="dropdown-item">
                  <span class="dropdown-icon">🎨</span>
                  <div>
                    <div class="dropdown-title">SVG/PNG Customizer</div>
                    <div class="dropdown-desc">Vector color & size designer</div>
                  </div>
                </a>
                <a href="#/tools/1000-hearts" class="dropdown-item">
                  <span class="dropdown-icon">💯</span>
                  <div>
                    <div class="dropdown-title">1000 Hearts Repeater</div>
                    <div class="dropdown-desc">Instant 100/500/1000 copy</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- SILO 2: DIRECTORY -->
            <li class="nav-item">
              <a href="#/symbols" class="nav-link">
                <span>Symbols ▾</span>
              </a>
              <div class="mega-dropdown">
                <a href="#/symbols/classic" class="dropdown-item">
                  <span class="dropdown-icon">♥</span>
                  <div>
                    <div class="dropdown-title">Classic Text Hearts</div>
                    <div class="dropdown-desc">Solid & outline (♥, ♡, ❣)</div>
                  </div>
                </a>
                <a href="#/symbols/aesthetic" class="dropdown-item">
                  <span class="dropdown-icon">ᥫ᭡</span>
                  <div>
                    <div class="dropdown-title">Aesthetic & Winged</div>
                    <div class="dropdown-desc">ᥫ᭡, 𓆩♡𓆪, ❥, ❦, ₊˚⊹♡</div>
                  </div>
                </a>
                <a href="#/symbols/emojis" class="dropdown-item">
                  <span class="dropdown-icon">❤️</span>
                  <div>
                    <div class="dropdown-title">Color Emojis</div>
                    <div class="dropdown-desc">All 12 Unicode color hearts</div>
                  </div>
                </a>
                <a href="#/symbols/gestures" class="dropdown-item">
                  <span class="dropdown-icon">🫰</span>
                  <div>
                    <div class="dropdown-title">Hand Gestures</div>
                    <div class="dropdown-desc">Korean finger heart & hand heart</div>
                  </div>
                </a>
                <a href="#/symbols/kaomoji" class="dropdown-item">
                  <span class="dropdown-icon">ʕ•ᴥ•ʔ</span>
                  <div>
                    <div class="dropdown-title">Japanese Kaomoji</div>
                    <div class="dropdown-desc">Anime faces, kissing & bears</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- SILO 3: MEANINGS -->
            <li class="nav-item">
              <a href="#/meanings" class="nav-link">
                <span>Meaning</span>
              </a>
            </li>

            <!-- SILO 4: HOW TO TYPE -->
            <li class="nav-item">
              <a href="#/how-to-type" class="nav-link">
                <span>Guides</span>
              </a>
            </li>

            <!-- SILO 5: COMPARISONS -->
            <li class="nav-item">
              <a href="#/compare" class="nav-link">
                <span>Compare</span>
              </a>
            </li>

            <!-- SILO 7: GLOSSARY -->
            <li class="nav-item">
              <a href="#/glossary" class="nav-link">
                <span>Technical</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Actions -->
        <div class="nav-actions">
          <button id="theme-toggle-btn" class="btn-icon" aria-label="Toggle light or dark theme" title="Toggle Theme">
            <span id="theme-icon">${currentTheme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </div>

  `;

  // Theme toggle listener
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('heart_symbols_theme', newTheme);
      themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }
}
