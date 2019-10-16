$(document).ready(function(){
  $('.review__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

$('.main__chat-marker').click(function () {
  $('.main__chat').addClass('active').siblings().removeClass('active');
  $('.main__chat-window-dialog-response p').addClass('active');
})

$('.fa-times-circle').click(function () {
  $('.main__chat').removeClass('active');
  $('.main__chat-marker').addClass('active')
  $('.main__chat-window-dialog-response p').removeClass('active');
})