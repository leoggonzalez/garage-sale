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

document.addEventListener("turbolinks:load", function () {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    // 1. Initiate
    const slides = slider.querySelectorAll(".slider__slide");
    // Enumerate slides
    slides.forEach((slide, index) => {
      slide.setAttribute("data-number", index);
    });
    const previousArrow = slider.querySelector(".slider__arrow--previous");
    const nextArrow = slider.querySelector(".slider__arrow--next");
    // Hide arrows if there's only one slide
    if (slides.length === 1) {
      previousArrow.classList.add("hidden");
      nextArrow.classList.add("hidden");
    }
    // Make the first one active
    if (slides.length) {
      slides[0].classList.add("active");
    }
    // 2. Arrow functionality
    nextArrow.addEventListener("click", () => {
      const activeSlide = slider.querySelector(".slider__slide.active");
      if (activeSlide) {
        const number = Number(activeSlide.dataset.number);
        let nextSlide = null;
        if (number < slides.length - 1) {
          nextSlide = slides.item(number + 1);
        } else {
          nextSlide = slides.item(0);
        }
        if (nextSlide) {
          activeSlide.classList.remove("active");
          nextSlide.classList.add("active");
        }
      }
    });
    previousArrow.addEventListener("click", () => {
      const activeSlide = slider.querySelector(".slider__slide.active");
      if (activeSlide) {
        const number = Number(activeSlide.dataset.number);
        let nextSlide = null;
        if (number > 0) {
          nextSlide = slides.item(number - 1);
        } else {
          nextSlide = slides.item(slides.length - 1);
        }
        if (nextSlide) {
          activeSlide.classList.remove("active");
          nextSlide.classList.add("active");
        }
      }
    });
  });
});
