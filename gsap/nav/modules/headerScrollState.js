export default function initHeaderScrollState() {
  const header = document.getElementById('header');
  if (!header) return;

  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  sentinel.style.height = '1px';
  document.body.prepend(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('is-scrolled', !entry.isIntersecting);
      console.log(header);
    },
    { threshold: 0 },
  );

  observer.observe(sentinel);
}
