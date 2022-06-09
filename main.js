"use strict";
import "./style.scss";
import * as bootstrap from "bootstrap";
import Typed from "typed.js";
import "waypoints/lib/noframework.waypoints.min";
import ScrollReveal from "scrollreveal";


// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  this.classList.toggle("open");
  this.closest(".myNav").classList.toggle("nav-open");
});

const tabCompo = document.querySelector(".tab-wrapper");
const tabContainer = document.querySelectorAll(".tab-container");
const tabImg = document.querySelectorAll(".tab-image-container");
tabCompo.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-container");
  if (!clicked) return;

  // remove active class
  [...tabContainer].map((cur) => cur.classList.remove("active-tab"));

  // add active class
  clicked.classList.add("active-tab");

  // deactivate all active tab
  [...tabImg].map((cur) => cur.classList.add("d-none"));

  // activate active tab img
  document
    .querySelector(`.tab-img-${clicked.dataset.tab}`)
    .classList.remove("d-none");
});



