'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ulElement = document.querySelector('ul');
  if (!ulElement) {
    return;
  }

  const liElement = document.createElement('li');
  liElement.textContent = `jsで生成した要素`;

  ulElement.appendChild(liElement);
});
