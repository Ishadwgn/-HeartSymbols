import { COLOR_MEANINGS, GESTURE_MEANINGS } from '../../data/meaningsData.js';
import { copyEngine } from '../components/copyEngine.js';

export function renderMeaningsView(container, subPage = null) {
  if (subPage === 'dating') {
    renderDatingGuide(container);
  } else if (subPage === 'snapchat') {
    renderSnapchatGuide(container);
  } else if (subPage === 'gestures') {
    renderGesturesGuide(container);
  } else {
    renderColorMeaningsHub(container);
  }
}

function renderColorMeaningsHub(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/meanings" class="breadcrumb-link">Meanings</a>
        <span>/</span>
        <span class="breadcrumb-current">Heart Color Meanings</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Emoji <span class="text-gradient">Color Meanings & Psychology</span></h1>
        <p>Decipher the emotional meaning, psychological impact, and texting etiquette for every heart emoji color.</p>
      </div>

      <!-- Category Filter Pills -->
      <div class="category-pills-row">
        <a href="#/meanings/colors" class="pill-btn active">All Colors</a>
        <a href="#/meanings/dating" class="pill-btn">Dating & Texting Decoder</a>
        <a href="#/meanings/snapchat" class="pill-btn">Snapchat Heart Levels</a>
        <a href="#/meanings/gestures" class="pill-btn">Hand Heart Gestures</a>
      </div>

      <!-- Color Cards Grid -->
      <div class="meanings-grid">
        ${COLOR_MEANINGS.map(c => `
          <div class="meaning-card" id="${c.id}">
            <div class="meaning-header">
              <span class="meaning-emoji-badge">${c.emoji}</span>
              <div>
                <h2 class="meaning-title">${c.colorName}</h2>
                <span style="font-size: 0.78rem; font-family: monospace; color: ${c.hexColor}; font-weight: 700;">${c.hexColor}</span>
              </div>
            </div>

            <p class="meaning-summary">${c.summary}</p>

            <div class="meaning-section-label">Romantic Context:</div>
            <p class="meaning-section-text">${c.romanticMeaning}</p>

            <div class="meaning-section-label">Platonic Context:</div>
            <p class="meaning-section-text">${c.platonicMeaning}</p>

            <div class="meaning-section-label">Texting Etiquette:</div>
            <p class="meaning-section-text" style="font-style: italic; color: var(--text-primary);">${c.datingRules}</p>

            <div style="display: flex; gap: 0.5rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
              <button class="btn-primary copy-color-emoji-btn" data-emoji="${c.emoji}" style="flex: 1; justify-content: center; font-size: 0.82rem; padding: 0.4rem 0.8rem;">
                <span>Copy ${c.emoji}</span>
              </button>
              <a href="#/tools/aesthetic-text" class="btn-secondary" style="font-size: 0.82rem; padding: 0.4rem 0.8rem;" title="Style in Bio Generator">
                <span>Bio Styler →</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Contextual Internal Bridges & Authority Outbound Reference -->
      <div class="tool-card-box" style="margin-top: 2rem;">
        <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem;">Related Guides & Authoritative References</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
          <a href="#/compare/red-heart-vs-pink-heart" class="outbound-link-card">
            <div class="outbound-header-row">
              <span class="outbound-title">Red ❤️ vs Pink 🩷 Comparison</span>
              <span class="outbound-badge" style="color: var(--primary-pink); background: rgba(163, 8, 44, 0.1);">Internal Guide</span>
            </div>
            <p class="outbound-desc">Explore nuanced differences between deep romantic passion vs playful crush.</p>
          </a>

          <a href="#/compare/black-heart-vs-white-heart" class="outbound-link-card">
            <div class="outbound-header-row">
              <span class="outbound-title">Black 🖤 vs White 🤍 Meaning</span>
              <span class="outbound-badge" style="color: var(--primary-pink); background: rgba(163, 8, 44, 0.1);">Internal Guide</span>
            </div>
            <p class="outbound-desc">Dark humor and aesthetic vs pure angelic condolences and sympathy.</p>
          </a>

          <a href="https://www.unicode.org/reports/tr51/" target="_blank" rel="noopener noreferrer" class="outbound-link-card">
            <div class="outbound-header-row">
              <span class="outbound-title">Unicode Emoji Standard TR-51</span>
              <span class="outbound-badge">Official ↗</span>
            </div>
            <p class="outbound-desc">Unicode Consortium technical standard for emoji properties and skin-tone modifiers.</p>
          </a>

          <a href="https://emojipedia.org/hearts" target="_blank" rel="noopener noreferrer" class="outbound-link-card">
            <div class="outbound-header-row">
              <span class="outbound-title">Emojipedia Hearts Reference</span>
              <span class="outbound-badge">Official ↗</span>
            </div>
            <p class="outbound-desc">Cross-platform rendering comparisons across Apple iOS, Android Gboard, and Samsung.</p>
          </a>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.copy-color-emoji-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const emoji = btn.getAttribute('data-emoji');
      copyEngine.copy(emoji, `Copied ${emoji}!`, true);
    });
  });
}

function renderDatingGuide(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/meanings" class="breadcrumb-link">Meanings</a>
        <span>/</span>
        <span class="breadcrumb-current">Dating & Texting Decoder</span>
      </nav>

      <div class="tool-header">
        <h1>What Heart Emojis Mean <span class="text-gradient">in Dating & Texting</span></h1>
        <p>A comprehensive guide on interpreting heart emojis received from a guy, girl, or new crush.</p>
      </div>

      <div class="category-pills-row">
        <a href="#/meanings/colors" class="pill-btn">All Colors</a>
        <a href="#/meanings/dating" class="pill-btn active">Dating & Texting Decoder</a>
        <a href="#/meanings/snapchat" class="pill-btn">Snapchat Heart Levels</a>
        <a href="#/meanings/gestures" class="pill-btn">Hand Heart Gestures</a>
      </div>

      <div class="tool-card-box">
        <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">The 5 Stages of Heart Emoji Texting</h2>
        
        <div class="step-card">
          <div class="step-number">1</div>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Stage 1: Casual & Safe (💛 💙 🧡)</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">Early talking stage. Neither party wants to come on too strong. Used for friendly vibes, light compliments, and meme reactions.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Stage 2: The Flirty Sparkle (🩷 💖 💗 ❥)</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">Romantic interest is established. The conversation moves beyond platonic territory. Pink hearts signal adoration without heavy commitment.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Stage 3: Burning Passion (❤️ ❤️‍🔥 💘)</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">Exclusive relationship or deep mutual attraction. Red heart or fire heart confirms serious feelings.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">4</div>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Stage 4: Cozy Comfort & Loyalty (🤍 🤎 💜)</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">Established couple comfort, pure devotion, sweet coffee dates, and shared intimacy.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">5</div>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Danger Zone: The Friend-Zone Shift (❤️ ➔ 💙)</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">If someone who used to send red or pink hearts switches strictly to blue or fist-bumps, they are intentionally dialing back romantic expectations.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSnapchatGuide(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/meanings" class="breadcrumb-link">Meanings</a>
        <span>/</span>
        <span class="breadcrumb-current">Snapchat Heart Levels</span>
      </nav>

      <div class="tool-header">
        <h1>Snapchat Heart Emojis <span class="text-gradient">Explained</span></h1>
        <p>Learn the exact rules for unlocking Yellow 💛, Red ❤️, and Pink 💕 Best Friend hearts on Snapchat.</p>
      </div>

      <div class="tool-card-box">
        <div style="display: grid; gap: 1.5rem;">
          <div style="display: flex; gap: 1.2rem; align-items: center;">
            <span style="font-size: 3rem;">💛</span>
            <div>
              <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Yellow Heart — Best Friends</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">You are each other's #1 Best Friend (you send the most snaps to them, and they send the most to you).</p>
            </div>
          </div>

          <div style="display: flex; gap: 1.2rem; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
            <span style="font-size: 3rem;">❤️</span>
            <div>
              <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Red Heart — #1 BF for 2 Weeks</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">You have maintained mutual #1 Best Friend status continuously for two full weeks.</p>
            </div>
          </div>

          <div style="display: flex; gap: 1.2rem; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
            <span style="font-size: 3rem;">💕</span>
            <div>
              <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Two Pink Hearts — Super BFFs (2 Months)</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">The highest friend milestone: you have been each other's #1 Best Friend for two straight months.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderGesturesGuide(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <a href="#/meanings" class="breadcrumb-link">Meanings</a>
        <span>/</span>
        <span class="breadcrumb-current">Hand Heart Gestures</span>
      </nav>

      <div class="tool-header">
        <h1>Hand & Finger Heart <span class="text-gradient">Symbols & Origins</span></h1>
        <p>The history and pop culture phenomenon of the Korean Finger Heart 🫰 and Concert Heart Hands 🫶.</p>
      </div>

      <div class="meanings-grid">
        ${GESTURE_MEANINGS.map(g => `
          <div class="meaning-card">
            <h2 class="meaning-title">${g.name}</h2>
            <div class="meaning-section-label" style="margin-top: 0.5rem;">Origin & Popularity:</div>
            <p class="meaning-section-text">${g.origin}</p>
            <div class="meaning-section-label">How to Make It:</div>
            <p class="meaning-section-text">${g.description}</p>
            <div class="meaning-section-label">Cultural Impact:</div>
            <p class="meaning-section-text">${g.culturalImpact}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
