import './styles/main.css';
import { copyEngine } from './js/components/copyEngine.js';
import { renderHeader } from './js/components/navHeader.js';
import { renderFooter } from './js/components/footer.js';
import { handleRoute } from './js/router.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme from local storage (default to Red & White light mode)
  const savedTheme = localStorage.getItem('heart_symbols_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // 2. Initialize Core Copy Engine
  copyEngine.init();

  // 3. Render Global Header & Footer
  renderHeader();
  renderFooter();

  // 4. Mount Route
  handleRoute();

  // 5. Setup Hash Change Listener
  window.addEventListener('hashchange', handleRoute);

  // 6. Global Search Shortcut (/ or Ctrl+K)
  window.addEventListener('keydown', (e) => {
    if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const searchInput = document.getElementById('home-search-input') || document.getElementById('glossary-search-input');
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.hash = '#/';
        setTimeout(() => {
          const el = document.getElementById('home-search-input');
          if (el) el.focus();
        }, 100);
      }
    }
  });
});
