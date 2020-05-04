AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      } 
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
  };

  return {
    init: init
  };
})();

function toggle() {
  var mainContent = document.getElementById("main-content");
  var navbar = document.getElementById("navbarSupportedContent");
  var products = document.getElementById("products");
  var audio = document.getElementById("audio");
  if (mainContent.style.display === "none") 
  {
    mainContent.style.display = "block";
    products.style.display = "none";
    audio.style.display = "none";
  } 
  else 
  {
    mainContent.style.display = "none";
    navbar.style.display = "block";
    document.body.style.backgroundColor = "#0F0F0F";
  }
}

function toggleProducts() {
  var navbar = document.getElementById("navbarSupportedContent");
  var products = document.getElementById("products");
  navbar.style.display = "none";
  products.style.display = "block";
  document.body.style.backgroundColor = "#0F0F0F";
  
}

function toggleAudio() {
  var navbar = document.getElementById("navbarSupportedContent");
  var products = document.getElementById("products");
  var audio = document.getElementById("audio");
  navbar.style.display = "none";
  products.style.display = "none";
  audio.style.display = "block";
  document.body.style.backgroundColor = "#0F0F0F";
}