// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("typeface-nunito");
require("typeface-poppins");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import "bootstrap";

class Slider {
  active = 0;

  constructor(container) {
    // Save nodes
    this.container = container;
    this.slides = this.container.querySelectorAll(".slider__slide");
    this.previousArrow = this.container.querySelector(
      ".slider__arrow--previous"
    );
    this.nextArrow = this.container.querySelector(".slider__arrow--next");
    // Hide arrows if there's only one slide
    if (this.slides.length < 2) {
      this.previousArrow.classList.add("hidden");
      this.nextArrow.classList.add("hidden");
    }
    // Make the first one active
    if (this.slides.length) {
      this.setActiveSlide();
    }
    // 2. Arrow functionality
    this.nextArrow.addEventListener("click", () => {
      this.arrowClick("next");
    });
    this.previousArrow.addEventListener("click", () => {
      this.arrowClick("previous");
    });
  }

  setActiveSlide() {
    this.slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    this.slides[this.active].classList.add("active");
  }
  setNextActive() {
    if (this.active < this.slides.length - 1) {
      this.active = this.active + 1;
    } else {
      this.active = 0;
    }
  }
  setPreviousActive() {
    if (this.active > 0) {
      this.active = this.active - 1;
    } else {
      this.active = this.slides.length - 1;
    }
  }

  arrowClick(direction) {
    if (direction === "next") {
      this.setNextActive();
    } else {
      this.setPreviousActive();
    }
    this.setActiveSlide();
  }
}

document.addEventListener("turbolinks:load", function () {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    new Slider(slider);
  });
});
