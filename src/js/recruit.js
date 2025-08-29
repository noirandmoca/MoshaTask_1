// js/slide-fade.js
document.addEventListener('DOMContentLoaded', () => {
  // まずは存在確認をシンプルに
  const fade = document.querySelector('.side-img .fade');
  if (!fade) return;

  const imgs = fade.querySelectorAll('img');
  if (!imgs.length) return;

  // すでに1枚目に is-active が付いているならこの行は省略OK（付いてなくても安全）
  let current = 0;
  imgs[current].classList.add('is-active');

  const DURATION = 5000; // 5秒ごと
  const TWEEN = 1000;    // CSSの transition と同じに

  setInterval(() => {
    const prev = current;
    current = (current + 1) % imgs.length;

    // 次の画像を表示（クロスフェード）
    imgs[current].classList.add('is-active');

    // 前の画像を少し遅れて非表示に
    setTimeout(() => {
      imgs[prev].classList.remove('is-active');
    }, TWEEN);
  }, DURATION);
});
