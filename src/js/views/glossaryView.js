import { HEART_SYMBOLS } from '../../data/heartSymbols.js';
import { copyEngine } from '../components/copyEngine.js';
import { openSymbolModal } from '../components/detailModal.js';

export function renderGlossaryView(container) {
  let searchQuery = '';

  function render() {
    const filtered = HEART_SYMBOLS.filter(s => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        s.char.includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.unicode.toLowerCase().includes(q) ||
        (s.altCode && s.altCode.toLowerCase().includes(q))
      );
    });

    container.innerHTML = `
      <div class="container tool-page-wrapper">
        <nav class="breadcrumb-nav">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span>/</span>
          <span class="breadcrumb-current">Unicode Index & Specs</span>
        </nav>

        <div class="tool-header">
          <h1>Unicode Heart Symbols <span class="text-gradient">Glossary & Codepoint Index</span></h1>
          <p>Technical reference table of all Unicode heart codepoints, hexadecimal values, decimal codes, Alt codes, and CSS entities.</p>
        </div>

        <div class="tool-card-box">
          <!-- Search in Glossary -->
          <div class="tool-input-group" style="margin-bottom: 1.5rem;">
            <input type="text" id="glossary-search-input" class="tool-input" placeholder="Search by name, codepoint (e.g. U+2665), or Alt code..." value="${searchQuery}" />
          </div>

          <table class="shortcut-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Character Name</th>
                <th>Unicode</th>
                <th>Alt Code</th>
                <th>HTML Entity</th>
                <th>Inspect</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(s => `
                <tr>
                  <td style="font-size: 1.8rem; font-weight: 700;">${s.char}</td>
                  <td style="font-weight: 600; color: var(--text-primary);">${s.name}</td>
                  <td style="font-family: monospace; color: var(--primary-pink);">${s.unicode}</td>
                  <td style="font-family: monospace;">${s.altCode || 'N/A'}</td>
                  <td style="font-family: monospace; color: var(--text-secondary);">${escapeHtml(s.htmlEntity || s.dec || 'N/A')}</td>
                  <td>
                    <button class="btn-secondary inspect-symbol-btn" data-char="${s.char}" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;">Specs</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const searchInput = document.getElementById('glossary-search-input');
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
      const el = document.getElementById('glossary-search-input');
      if (el) {
        el.focus();
        el.setSelectionRange(searchQuery.length, searchQuery.length);
      }
    });

    container.querySelectorAll('.inspect-symbol-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const char = btn.getAttribute('data-char');
        const found = HEART_SYMBOLS.find(s => s.char === char);
        if (found) openSymbolModal(found);
      });
    });
  }

  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
