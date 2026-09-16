import { PRESETS_DATA } from '../../data/presetsData.js';
import { copyEngine } from '../components/copyEngine.js';

export function renderPresetsView(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Gaming & Social Presets</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Symbol <span class="text-gradient">Gaming & Bio Presets</span></h1>
        <p>1-click copy stylish heart nickname templates for Free Fire, Roblox, Instagram bio headers, and Discord channels.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        ${PRESETS_DATA.map(preset => `
          <div class="tool-card-box">
            <h2 style="font-size: 1.4rem; margin-bottom: 0.3rem;">${preset.title}</h2>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">${preset.description}</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
              ${preset.items.map(item => `
                <div class="tool-result-item" style="flex-direction: column; text-align: center; gap: 0.8rem; padding: 1.2rem;">
                  <div class="tool-result-text" style="font-size: 1.1rem; white-space: pre-line;">${item}</div>
                  <button class="btn-secondary copy-preset-item-btn" data-text="${escapeAttr(item)}" style="width: 100%; justify-content: center; font-size: 0.85rem;">
                    <span>Copy Template</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.copy-preset-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-text');
      copyEngine.copy(text, 'Copied preset template!', true);
    });
  });
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;');
}
