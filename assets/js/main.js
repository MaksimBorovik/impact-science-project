import { CountUp } from './libs/countUp/count-up.min.js';

$(document).ready(function(){
  $('.review__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$('.main__chat-marker').click(function () {
  $('.main__chat').addClass('active').siblings().removeClass('active');
  $('.main__chat-window-dialog-response p').addClass('active');
  $('body').addClass('active');
})

$('.fa-times-circle').click(function () {
  $('.main__chat').removeClass('active');
  $('.main__chat-marker').addClass('active')
  $('.main__chat-window-dialog-response p').removeClass('active');
  $('body').removeClass('active');
})

$('.navbar-toggler').click(function () {
  $('.header__menu-navbar-toggler-icon').toggleClass('active');
})

AOS.init();

var $win = $(window);
var $marker = $('#pub');
$win.scroll(function() {
  if ($win.scrollTop() + $win.height() <= $marker.offset().top) {
    const countUp = new CountUp('pub', 950000);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }

    const countUp2 = new CountUp('pub2', 296000);
    if (!countUp2.error) {
      countUp2.start();
    } else {
      console.error(countUp2.error);
    }

    const countUp3 = new CountUp('pub3', 2000);
    if (!countUp3.error) {
      countUp3.start();
    } else {
      console.error(countUp3.error);
    }
  }	
});