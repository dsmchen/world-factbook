import { initSearch } from './components/search.js';
import { initFilter } from './components/filter.js';
import { initExplore } from './components/explore-container.js';

window.addEventListener('load', () => {
  initSearch();
  initFilter();
  initExplore();
});
