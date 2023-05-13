'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ulElement = document.querySelector('ul');
  if (!ulElement) {
    return;
  }

  const liElement = `
    <li>
      <a href="/practice-dom/practice-001.html">
        <img src="" alt="画像">
      </a>
    </li>
  `;

  ulElement.insertAdjacentHTML('beforeend', liElement);
});
