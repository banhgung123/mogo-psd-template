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

// const menuToggle = document.querySelector(".header-toggle");
const menuToggle = document.querySelector(".header-toggle");
const menuToggleClose = document.querySelector(".header-toggle-close");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
  menuToggle.style.display = "none";
  menuToggleClose.style.display = "inline-block";
});

menuToggleClose.addEventListener("click", function (e) {
  // if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
  menuHeader.classList.remove(expandClass);
  menuToggle.style.display = "inline-block";
  menuToggleClose.style.display = "none";
  // }
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
