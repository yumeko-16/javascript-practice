export default function initOffcanvasNav() {
  const root = document.getElementById('fixedNav');
  const openBtn = document.getElementById('navToggle');
  const closeBtn = document.getElementById('navClose');
  const panel = document.getElementById('navPanel');

  if (!root || !openBtn || !closeBtn || !panel) return;

  const open = () => {
    root.classList.add('is-open');
    openBtn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-scrollLock');
  };

  const close = () => {
    root.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-scrollLock');
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // メニュー内リンクをクリックしたら閉じる
  panel.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#"]')) {
      close();
    }
  });
}
