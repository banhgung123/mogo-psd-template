// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

menuToggle.addEventListener("click", function (e) {
  if (menuHeader.classList.contains(expandClass)) {
    menuHeader.classList.remove(expandClass);
    // if (menuToggle.classList.contains("fa-times")) {
    menuToggle.classList.add("fa-bars");
    menuToggle.classList.remove("fa-times");
    // }
  } else {
    menuHeader.classList.add(expandClass);
    // if (menuToggle.classList.contains("fa-bars")) {
    menuToggle.classList.remove("fa-bars");
    menuToggle.classList.add("fa-times");
    // }
  }
});

window.addEventListener("click", function (e) {
  if (!e.target.contains(menuToggle)) {
    menuHeader.classList.remove(expandClass);
    menuToggle.classList.add("fa-bars");
    menuToggle.classList.remove("fa-times");
  }
});

// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
