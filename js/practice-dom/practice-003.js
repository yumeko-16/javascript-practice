'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  if (!ul) {
    return;
  }

  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '/practice-dom/practice-00.html';
  a.textContent = 'practice-00 ヨシ！';
  const img = document.createElement('img');
  img.src = '/img/practice-yoshi.png';
  img.alt = 'ヨシ！';

  ul.appendChild(li);
  li.appendChild(a);
  a.appendChild(img);

  //for (let i = 0; i < 2; i++) {
  //  const liElement = `
  //    <li><a href="/practice-dom/practice-001.html"><img src="/img/bookmark.png">practice-001</li>
  //  `;
  //  ulElement.insertAdjacentElement('beforeend', liElement);
  //}
});
