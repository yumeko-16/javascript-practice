import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('[data-hscroll]');
  const list = document.querySelector('[data-hscroll-list]');

  if (!wrapper || !list) return;

  const scrollDistance = list.scrollWidth - wrapper.offsetWidth;

  // 横スクロールアニメーションの設定
  gsap.to(list, {
    x: () => -scrollDistance, // -X軸方向に移動
    ease: 'none', // アニメーションのイージング(noneは定速)
    scrollTrigger: {
      trigger: wrapper, // アニメーション開始のトリガー要素
      pin: true, // 要素を固定
      scrub: 1, // スクロール量に合わせてアニメーション
      start: 'top top', // アニメーションが始まる位置
      end: () => `+=${scrollDistance}`, // アニメーションが終わる位置
      anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
      invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
    },
  });
});
