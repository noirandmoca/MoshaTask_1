$(function () {
  $('.interview_slider').slick({
    slidesToShow: 3,      // 同時表示数
    // slidesToScroll: 1,
    autoplay: true,       // 自動
    autoplaySpeed: 1000,  // 5秒ごと
    speed: 600,           // アニメ速度
    infinite: true,       // ループ（クローン生成）
    // arrows: true,         // 矢印を表示
    dots: false,          // ドット不要なら false
    centerMode: false,
    cssEase: 'ease',
    pauseOnHover: false,
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 600,  settings: { slidesToShow: 1 } },
    // ],
  });
});
