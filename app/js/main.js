$(function () {

  $('.services__slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: '<button type = "button" class= "services__prev"><img src="images/services/arrow_left.png" alt="left arrow"> </button>',
    nextArrow: '<button type = "button" class= "services__next"><img src="images/services/arrow_right.png" alt="right arrow"> </button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false
        }
      }
    ]
  });

  var mixer = mixitup('.projects__content');


});