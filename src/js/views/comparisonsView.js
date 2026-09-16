import { COMPARISONS_DATA } from '../../data/comparisonsData.js';
import { copyEngine } from '../components/copyEngine.js';

export function renderComparisonsView(container) {
  container.innerHTML = `
    <div class="container tool-page-wrapper">
      <nav class="breadcrumb-nav">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span>/</span>
        <span class="breadcrumb-current">Side-by-Side Comparisons</span>
      </nav>

      <div class="tool-header">
        <h1>Heart Symbol & Emoji <span class="text-gradient">Side-by-Side Comparisons</span></h1>
        <p>Understand the subtle emotional, visual, and technical differences between similar heart symbols.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 3rem;">
        ${COMPARISONS_DATA.map(comp => `
          <div class="tool-card-box" id="${comp.id}">
            <!-- Header with VS -->
            <div style="display: flex; align-items: center; justify-content: space-around; margin-bottom: 2rem; text-align: center; flex-wrap: wrap; gap: 1rem;">
              <div style="flex: 1; min-width: 200px;">
                <div style="font-size: 3.5rem; line-height: 1;">${comp.item1.emoji}</div>
                <h3 style="font-size: 1.3rem; margin-top: 0.5rem;">${comp.item1.name}</h3>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${comp.item1.tag}</span>
              </div>

              <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary-pink); padding: 0.5rem 1rem; background: rgba(255, 51, 102, 0.1); border-radius: 9999px;">
                VS
              </div>

              <div style="flex: 1; min-width: 200px;">
                <div style="font-size: 3.5rem; line-height: 1;">${comp.item2.emoji}</div>
                <h3 style="font-size: 1.3rem; margin-top: 0.5rem;">${comp.item2.name}</h3>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${comp.item2.tag}</span>
              </div>
            </div>

            <!-- Summary -->
            <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 1.5rem; text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;">
              ${comp.summary}
            </p>

            <!-- Table -->
            <table class="shortcut-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Feature</th>
                  <th style="width: 37.5%;">${comp.item1.name}</th>
                  <th style="width: 37.5%;">${comp.item2.name}</th>
                </tr>
              </thead>
              <tbody>
                ${comp.comparisonTable.map(row => `
                  <tr>
                    <td style="font-weight: 600; color: var(--text-primary);">${row.feature}</td>
                    <td style="color: var(--text-secondary);">${row.item1}</td>
                    <td style="color: var(--text-secondary);">${row.item2}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <!-- Contextual Quick Actions -->
            <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap;">
              <a href="#/meanings/colors" class="btn-primary" style="font-size: 0.85rem;">
                <span>Explore Full Color Meanings →</span>
              </a>
              <a href="#/symbols" class="btn-secondary" style="font-size: 0.85rem;">
                <span>View in Symbols Directory</span>
              </a>
              <a href="#/tools/aesthetic-text" class="btn-secondary" style="font-size: 0.85rem;">
                <span>Try in Bio Generator</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
