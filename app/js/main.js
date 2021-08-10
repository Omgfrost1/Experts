$(function () {

  $('.header-slider').slick({
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: '<button type = "button" class= "header-slider__slick-prev"><img src="images/arrow-left.svg" alt="left arrow"> </button>',
    nextArrow: '<button type = "button" class= "header-slider__slick-next"><img src="images/arrow-right.svg" alt="right arrow"> </button>',
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          arrows: false
        }
      },
    ]
  });


});