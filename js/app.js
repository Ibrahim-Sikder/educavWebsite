
    $(document).ready(function(){
      $('.sliderWrapper').slick({   
        autoplay:true,
        adaptiveHeight:true,
        arrows:true,
        autoplaySpeed:1000,
        prevArrow:'<button type="button" class="slick-prev-custom"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next-custom"><i class="fas fa-long-arrow-alt-right"></i></button>',
      });
    });


    /*Owlcarousel */
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      autoplaySpeed:1000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  })
