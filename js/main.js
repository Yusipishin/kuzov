$(document).ready(function(){
  $('.offers__slider').slick({
    dots:true,
    slidesToShow: 3,
    initialSlide: 4,  
    infinite: false,
    centerMode: true,
    centerPadding: true,
    adaptiveHeight:true,
    variableWidth: true,
    appendDots:$('.offers__slider-dots')
  });
  $('.works__main-slider').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    appendDots:$('.works__info-box'),
    appendArrows:$('.works__info-box')
  });
});