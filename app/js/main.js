$(function () {

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type = "button" class= "slick-prev"><img src="images/arrow-left.svg" alt="left arrow"> </button>',
    nextArrow: '<button type = "button" class= "slick-next"><img src="images/arrow-right.svg" alt="right arrow"> </button>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false
        }
      }
    ]
  });
});