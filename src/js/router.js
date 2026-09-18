import { renderHomeView } from './views/homeView.js';
import { renderToolsView } from './views/toolsView.js';
import { renderSymbolsView } from './views/symbolsView.js';
import { renderMeaningsView } from './views/meaningsView.js';
import { renderTypingGuidesView } from './views/typingGuidesView.js';
import { renderComparisonsView } from './views/comparisonsView.js';
import { renderPresetsView } from './views/presetsView.js';
import { renderGlossaryView } from './views/glossaryView.js';
import { renderAboutView } from './views/aboutView.js';

export function handleRoute() {
  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  const rawHash = window.location.hash || '#/';
  const cleanHash = rawHash.replace(/^#\/?/, '');
  const segments = cleanHash.split('/').filter(Boolean);

  const mainSection = segments[0] || '';
  const subSection = segments[1] || null;

  // Automatically close mobile nav drawer if open
  if (typeof window.closeMobileNav === 'function') {
    window.closeMobileNav();
  }

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update active state in desktop and mobile nav
  updateNavActiveState(rawHash, mainSection);

  switch (mainSection) {
    case '':
      renderHomeView(appRoot);
      break;

    case 'tools':
      renderToolsView(appRoot, subSection);
      break;

    case 'symbols':
      renderSymbolsView(appRoot, subSection);
      break;

    case 'meanings':
      renderMeaningsView(appRoot, subSection);
      break;

    case 'how-to-type':
      renderTypingGuidesView(appRoot);
      break;

    case 'compare':
      renderComparisonsView(appRoot);
      break;

    case 'presets':
      renderPresetsView(appRoot);
      break;

    case 'glossary':
      renderGlossaryView(appRoot);
      break;

    case 'about':
      renderAboutView(appRoot, 'about');
      break;

    case 'editorial':
      renderAboutView(appRoot, 'editorial');
      break;

    case 'api':
      renderAboutView(appRoot, 'api');
      break;

    case 'privacy':
      renderAboutView(appRoot, 'privacy');
      break;

    case 'terms':
      renderAboutView(appRoot, 'terms');
      break;

    case 'sitemap':
      renderAboutView(appRoot, 'sitemap');
      break;

    default:
      renderHomeView(appRoot);
      break;
  }
}

function updateNavActiveState(hash, mainSection) {
  // Desktop Nav Links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === hash || (hash !== '#/' && href !== '#/' && hash.startsWith(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile Bottom Nav Links
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const dataPath = item.getAttribute('data-path');
    if (dataPath === undefined || dataPath === null) return;
    if (dataPath === mainSection || (mainSection === '' && dataPath === '')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

