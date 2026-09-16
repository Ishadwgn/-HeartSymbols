import { TYPING_GUIDES } from '../../data/typingGuidesData.js';
import { copyEngine } from '../components/copyEngine.js';

export function renderTypingGuidesView(container) {
  let activeTabId = 'windows-alt-codes';

  function render() {
    const guide = TYPING_GUIDES.find(g => g.id === activeTabId) || TYPING_GUIDES[0];

    container.innerHTML = `
      <div class="container tool-page-wrapper">
        <nav class="breadcrumb-nav">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span>/</span>
          <span class="breadcrumb-current">How to Type & Alt Codes</span>
        </nav>

        <div class="tool-header">
          <h1>How to Type Heart Symbols <span class="text-gradient">on Keyboard & OS</span></h1>
          <p>Complete step-by-step shortcuts for Windows Alt Codes, Mac Character Viewer, iPhone text replacement, and Web developers.</p>
        </div>

        <!-- Device Selector Tabs -->
        <div class="device-tabs" id="device-tabs-row">
          ${TYPING_GUIDES.map(g => `
            <button class="device-tab-btn ${g.id === activeTabId ? 'active' : ''}" data-id="${g.id}">
              <span>${g.title}</span>
            </button>
          `).join('')}
        </div>

        <!-- Active Guide Details -->
        <div class="tool-card-box">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <h2>${guide.title}</h2>
            <span style="background: rgba(255, 51, 102, 0.15); color: var(--primary-pink); padding: 0.3rem 0.8rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">
              ${guide.badge}
            </span>
          </div>

          <!-- Step Cards -->
          <div style="margin-bottom: 2rem;">
            ${guide.steps.map(s => `
              <div class="step-card">
                <div class="step-number">${s.step}</div>
                <div>
                  <h3 style="font-size: 1.05rem; margin-bottom: 0.2rem;">${s.title}</h3>
                  <p style="color: var(--text-secondary); font-size: 0.95rem;">${s.instruction}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Shortcut Reference Table -->
          <h3 style="margin-bottom: 0.8rem;">Quick Shortcut Reference Table</h3>
          <table class="shortcut-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Shortcut / Entity</th>
                <th>Result Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${guide.shortcutTable.map(row => `
                <tr>
                  <td style="font-size: 1.4rem; font-weight: 700;">${row.symbol}</td>
                  <td style="font-family: monospace; font-weight: 600; color: var(--primary-pink);">${row.code}</td>
                  <td style="color: var(--text-secondary); font-size: 0.9rem;">${row.result}</td>
                  <td>
                    <button class="btn-secondary copy-table-btn" data-code="${row.symbol}" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;">Copy</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- Pro Tip Box -->
          <div style="margin-top: 2rem; padding: 1.2rem; background: var(--bg-surface); border-left: 4px solid var(--primary-pink); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <div style="font-weight: 700; color: var(--primary-pink); margin-bottom: 0.3rem;">💡 Pro Tip:</div>
            <div style="font-size: 0.92rem; color: var(--text-secondary);">${guide.laptopTip}</div>
          </div>

          <!-- Contextual Internal Bridges & Authority Outbound Reference -->
          <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
            <h3 style="font-size: 1.15rem; margin-bottom: 0.8rem;">Related Tools & Official Documentation</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
              <a href="#/glossary" class="outbound-link-card">
                <div class="outbound-header-row">
                  <span class="outbound-title">Unicode Codepoint Index</span>
                  <span class="outbound-badge" style="color: var(--primary-pink); background: rgba(163, 8, 44, 0.1);">Internal Index</span>
                </div>
                <p class="outbound-desc">Lookup decimal codes, hexadecimal values, and UTF-8 encodings.</p>
              </a>

              <a href="#/tools/batch-copier" class="outbound-link-card">
                <div class="outbound-header-row">
                  <span class="outbound-title">Batch Tray Copier</span>
                  <span class="outbound-badge" style="color: var(--primary-pink); background: rgba(163, 8, 44, 0.1);">Interactive Tool</span>
                </div>
                <p class="outbound-desc">Collect multiple heart glyphs and copy formatted strings in 1-click.</p>
              </a>

              <a href="https://www.w3.org/TR/xml-entity-names/" target="_blank" rel="noopener noreferrer" class="outbound-link-card">
                <div class="outbound-header-row">
                  <span class="outbound-title">W3C HTML Named Entities</span>
                  <span class="outbound-badge">Official ↗</span>
                </div>
                <p class="outbound-desc">World Wide Web Consortium standard XML/HTML entities for &amp;hearts;.</p>
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" target="_blank" rel="noopener noreferrer" class="outbound-link-card">
                <div class="outbound-header-row">
                  <span class="outbound-title">MDN Web Docs: CSS content</span>
                  <span class="outbound-badge">Official ↗</span>
                </div>
                <p class="outbound-desc">Mozilla developer documentation on inserting Unicode escapes in CSS.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Tab switcher
    document.getElementById('device-tabs-row').querySelectorAll('.device-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTabId = btn.getAttribute('data-id');
        render();
      });
    });

    // Copy buttons
    container.querySelectorAll('.copy-table-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-code');
        copyEngine.copy(text, `Copied "${text}"!`, true);
      });
    });
  }

  render();
}
