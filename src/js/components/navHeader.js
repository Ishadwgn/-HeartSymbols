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
                <a href="#/tools/morse-code" class="dropdown-item">
                  <span class="dropdown-icon">📡</span>
                  <div>
                    <div class="dropdown-title">Heart Morse Code</div>
                    <div class="dropdown-desc">Secret love note translator</div>
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
          
          <!-- Mobile Hamburger Toggle Button -->
          <button id="mobile-menu-toggle-btn" class="mobile-menu-btn" aria-label="Open Navigation Menu" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer Overlay & Backdrop -->
    <div id="mobile-nav-backdrop" class="mobile-nav-backdrop"></div>
    <div id="mobile-nav-drawer" class="mobile-nav-drawer" aria-hidden="true">
      <div class="mobile-drawer-header">
        <a href="#/" class="brand-logo" onclick="window.closeMobileNav()">
          <span class="brand-heart-icon">♥</span>
          <span>Heart<span class="text-gradient">Symbols</span></span>
        </a>
        <button id="mobile-drawer-close-btn" class="mobile-drawer-close" aria-label="Close menu">&times;</button>
      </div>

      <div class="mobile-drawer-body">
        <!-- Quick Search Bar in Menu -->
        <div class="mobile-drawer-search">
          <button class="mobile-search-trigger-btn" onclick="window.focusHomeSearch()">
            <span>🔍 Search 150+ Heart Symbols...</span>
          </button>
        </div>

        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <a href="#/" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">📋</span>
              <span>Copy Matrix Hub</span>
            </a>
          </li>

          <!-- Mobile Tools Accordion -->
          <li class="mobile-nav-item has-accordion">
            <div class="mobile-nav-accordion-header" onclick="window.toggleMobileAccordion('mobile-tools-sub')">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span class="mobile-nav-icon">✨</span>
                <span>Interactive Tools</span>
              </div>
              <span class="mobile-accordion-chevron" id="mobile-tools-sub-chevron">▾</span>
            </div>
            <div class="mobile-accordion-content" id="mobile-tools-sub">
              <a href="#/tools" class="mobile-sublink" onclick="window.closeMobileNav()">All Tools Overview</a>
              <a href="#/tools/aesthetic-text" class="mobile-sublink" onclick="window.closeMobileNav()">✨ Aesthetic Bio Maker</a>
              <a href="#/tools/batch-copier" class="mobile-sublink" onclick="window.closeMobileNav()">📋 Batch Tray Copier</a>
              <a href="#/tools/emoji-combos" class="mobile-sublink" onclick="window.closeMobileNav()">💖 Emoji Combo Mixer</a>
              <a href="#/tools/ascii-art" class="mobile-sublink" onclick="window.closeMobileNav()">📜 ASCII Heart Art</a>
              <a href="#/tools/svg-customizer" class="mobile-sublink" onclick="window.closeMobileNav()">🎨 SVG / PNG Studio</a>
              <a href="#/tools/1000-hearts" class="mobile-sublink" onclick="window.closeMobileNav()">💯 1000 Hearts Repeater</a>
              <a href="#/tools/morse-code" class="mobile-sublink" onclick="window.closeMobileNav()">📡 Morse Code Translator</a>
            </div>
          </li>

          <!-- Mobile Directory Accordion -->
          <li class="mobile-nav-item has-accordion">
            <div class="mobile-nav-accordion-header" onclick="window.toggleMobileAccordion('mobile-dir-sub')">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span class="mobile-nav-icon">📂</span>
                <span>Symbols Directory</span>
              </div>
              <span class="mobile-accordion-chevron" id="mobile-dir-sub-chevron">▾</span>
            </div>
            <div class="mobile-accordion-content" id="mobile-dir-sub">
              <a href="#/symbols" class="mobile-sublink" onclick="window.closeMobileNav()">All Categories</a>
              <a href="#/symbols/aesthetic" class="mobile-sublink" onclick="window.closeMobileNav()">ᥫ᭡ Aesthetic & Winged</a>
              <a href="#/symbols/classic" class="mobile-sublink" onclick="window.closeMobileNav()">♥ Classic Monochrome</a>
              <a href="#/symbols/emojis" class="mobile-sublink" onclick="window.closeMobileNav()">❤️ Color Emojis (12 Colors)</a>
              <a href="#/symbols/gestures" class="mobile-sublink" onclick="window.closeMobileNav()">🫰 Korean Hand Gestures</a>
              <a href="#/symbols/kaomoji" class="mobile-sublink" onclick="window.closeMobileNav()">ʕ•ᴥ•ʔ Kaomoji & Faces</a>
            </div>
          </li>

          <li class="mobile-nav-item">
            <a href="#/meanings" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">💡</span>
              <span>Heart Color Meanings</span>
            </a>
          </li>

          <li class="mobile-nav-item">
            <a href="#/how-to-type" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">⌨️</span>
              <span>How to Type (Alt + 3)</span>
            </a>
          </li>

          <li class="mobile-nav-item">
            <a href="#/compare" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">⚖️</span>
              <span>Compare Hearts</span>
            </a>
          </li>

          <li class="mobile-nav-item">
            <a href="#/presets" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">🎀</span>
              <span>Bio Presets & Nicknames</span>
            </a>
          </li>

          <li class="mobile-nav-item">
            <a href="#/glossary" class="mobile-nav-link" onclick="window.closeMobileNav()">
              <span class="mobile-nav-icon">📖</span>
              <span>Unicode Index & Codes</span>
            </a>
          </li>
        </ul>

        <!-- Mobile Drawer Footer with Quick Theme Toggle -->
        <div class="mobile-drawer-footer">
          <div class="mobile-theme-switch-row">
            <span>Color Theme</span>
            <button id="mobile-theme-btn" class="mobile-theme-pill-btn">
              <span id="mobile-theme-icon">${currentTheme === 'dark' ? '☀️ Dark Mode' : '🌙 Light Mode'}</span>
            </button>
          </div>
          <div class="mobile-drawer-credit">
            HeartSymbols.io &copy; 2026
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navigation Bar (Native App Style) -->
    <nav class="mobile-bottom-nav" aria-label="Mobile Navigation Bar">
      <a href="#/" class="bottom-nav-item active" data-path="">
        <span class="bottom-nav-icon">♥</span>
        <span class="bottom-nav-label">Matrix</span>
      </a>
      <a href="#/tools" class="bottom-nav-item" data-path="tools">
        <span class="bottom-nav-icon">✨</span>
        <span class="bottom-nav-label">Tools</span>
      </a>
      <a href="#/symbols" class="bottom-nav-item" data-path="symbols">
        <span class="bottom-nav-icon">📂</span>
        <span class="bottom-nav-label">Symbols</span>
      </a>
      <a href="#/meanings" class="bottom-nav-item" data-path="meanings">
        <span class="bottom-nav-icon">💡</span>
        <span class="bottom-nav-label">Meanings</span>
      </a>
      <button id="bottom-nav-menu-btn" class="bottom-nav-item bottom-nav-btn" aria-label="More Menu">
        <span class="bottom-nav-icon">☰</span>
        <span class="bottom-nav-label">Menu</span>
      </button>
    </nav>
  `;

  // Theme toggle listener (desktop header)
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  function toggleTheme() {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('heart_symbols_theme', newTheme);
    if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    if (mobileThemeIcon) mobileThemeIcon.textContent = newTheme === 'dark' ? '☀️ Dark Mode' : '🌙 Light Mode';
  }

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

  // Mobile Drawer Toggle Logic
  const menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const drawerCloseBtn = document.getElementById('mobile-drawer-close-btn');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const drawer = document.getElementById('mobile-nav-drawer');
  const bottomMenuBtn = document.getElementById('bottom-nav-menu-btn');

  function openMobileNav() {
    if (drawer && backdrop) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (menuToggleBtn) menuToggleBtn.classList.add('active');
    }
  }

  function closeMobileNav() {
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (menuToggleBtn) menuToggleBtn.classList.remove('active');
    }
  }

  window.closeMobileNav = closeMobileNav;
  window.openMobileNav = openMobileNav;

  window.toggleMobileAccordion = function(accordionId) {
    const content = document.getElementById(accordionId);
    const chevron = document.getElementById(accordionId + '-chevron');
    if (!content) return;
    const isOpen = content.classList.contains('open');
    if (isOpen) {
      content.classList.remove('open');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    } else {
      content.classList.add('open');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    }
  };

  window.focusHomeSearch = function() {
    closeMobileNav();
    const searchInput = document.getElementById('home-search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.hash = '#/';
      setTimeout(() => {
        const input = document.getElementById('home-search-input');
        if (input) input.focus();
      }, 150);
    }
  };

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', () => {
    if (drawer && drawer.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (bottomMenuBtn) bottomMenuBtn.addEventListener('click', openMobileNav);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileNav);
  if (backdrop) backdrop.addEventListener('click', closeMobileNav);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeMobileNav();
    }
  });
}

