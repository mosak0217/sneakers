$(function(){
  $('.hamberger_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });



$('.slick_area').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

});