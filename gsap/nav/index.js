import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';
import { ScrollToPlugin } from 'https://cdn.skypack.dev/gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const getTarget = (link) => {
  if (!link) return null;

  const id = link.getAttribute('href');
  if (!id || id === '#') return null;

  return document.querySelector(id);
};

const setActive = (items, active) => {
  items.forEach((item) => item.classList.toggle('is-active', item === active));
};

const bindClickScroll = (link, target) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: target, duration: 0.8, ease: 'power2.out' });
  });
};

const bindActiveToggle = (target, items, activeItem) => {
  ScrollTrigger.create({
    trigger: target,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActive(items, activeItem),
    onEnterBack: () => setActive(items, activeItem),
  });
};

const initScrollNavAll = () => {
  document.querySelectorAll('[data-scroll-nav]').forEach((nav) => {
    const items = nav.querySelectorAll('[data-scroll-nav-item]');

    items.forEach((item) => {
      const link = item.querySelector('a[href^="#"]');
      const target = getTarget(link);
      if (!target) return;

      bindClickScroll(link, target);
      bindActiveToggle(target, items, item);
    });
  });
};

document.addEventListener('DOMContentLoaded', initScrollNavAll);
