document.addEventListener('DOMContentLoaded', () => {
  const name = document.getElementById('name');
  const url = document.getElementById('url');
  const btn = document.getElementById('btn');
  const list = document.getElementById('list');

  btn.addEventListener('click', () => {
    const anchor = document.createElement('a');
    console.log(anchor);

    anchor.href = url.value;
    const text = document.createTextNode(name.value);
    anchor.appendChild(text);
    const br = document.createElement('br');
    list.appendChild(anchor);
    list.appendChild(br);
  });
});
