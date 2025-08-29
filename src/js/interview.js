document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.i_container .img .fade img');
  if (!imgs.length) return;

  let current = 0;
  imgs[current].classList.add('is-active');

  const DURATION = 5000;  // 5秒ごと
  const TWEEN    = 1000;  // フェード時間（CSSと同じにする）

  setInterval(() => {
    const prev = current;
    current = (current + 1) % imgs.length;

    // 次の画像を表示
    imgs[current].classList.add('is-active');

    // 前の画像を少し遅れて消す
    setTimeout(() => {
      imgs[prev].classList.remove('is-active');
    }, TWEEN);
  }, DURATION);
});
