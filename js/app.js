import { initSearch } from './components/search.js';
import { initExplore } from './components/explore-container.js';

window.addEventListener('load', () => {
  initSearch();
  initExplore();
});
