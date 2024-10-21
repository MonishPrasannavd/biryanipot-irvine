var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".pagination-swiper1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  navigation: {
    nextEl: ".next-swiper",
    prevEl: ".prev-swiper",
  }
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next-swiper3",
    prevEl: ".prev-swiper3",
  }
});
var swiper = new Swiper(".testimonialSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".testimonials-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".blogSwiper", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Enable auto-slide with smooth transitions
  autoplay: {
    delay: 3000,  // Time delay between slides (in milliseconds)
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
  speed: 2000,
  // Enable infinite looping
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".popularSwiper", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".partner-type-6", {
  direction: "horizontal",
  effect: "slide",
  slidesPerView: 2,
  loop: true,
  spaceBetween: 68.95,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

var swiper = new Swiper(".swiperchoose", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".testimonialPortfolio", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".testimonialPortfolio1", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// var swiper = new Swiper(".testimonialPortfolio3", {

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,



// });


var swiper = new Swiper(".testimonialPortfolio4", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Global autoplay setting
    disableOnInteraction: false,
  },
  loop: true,
  speed: 2000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: false,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: false,
    },
  },


});

// var swiper = new Swiper(".testimonialPortfolio3", {

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   slidesPerView: 1,
//   // spaceBetween: 30,
//   spaceBetween: 30,
//   loop: true,



// });

var swiper = new Swiper(".testimonialPortfolio3", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Center the active slide
  centeredSlides: true,

  // Enable infinite looping
  loop: true,

  // Space between the slides
  // spaceBetween: 30,

  // Show partial next and previous slides (adjust 1.6 as needed)
  slidesPerView: 1.6,

  // Add autoplay for auto-slide functionality
  autoplay: {
    delay: 3000, // 3 seconds delay between auto-slides
    disableOnInteraction: false, // Auto-slide will continue after user interaction
  },

  // Smooth transition speed (for slide transitions)
  speed: 3000, // 1 second smooth transition
  
  // Optional: Use 'coverflow' effect for better visual appearance
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,  // Rotate the slides slightly
    stretch: 0,  // Don't stretch the slides
    depth: 100,  // Set depth to create a 3D effect
    modifier: 1, // Effect multiplier
    slideShadows: true, // Add shadows to the slides
  },
});



var swiper = new Swiper(".aboutSwiper", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

});

var swiper = new Swiper(".imagesSwiper", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {

    768: {
      slidesPerView: 1.5,
    },
    991: {
      slidesPerView: 2.42,
    },
  },
});