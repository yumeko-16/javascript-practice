import initHeaderScrollState from './modules/headerScrollState.js';
import initScrollNavAll from './modules/scrollNav.js';
import initModal from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollState();
  initScrollNavAll();
  initModal();
});
