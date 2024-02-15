"use strict";
const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", ({ target }) => {
  const accItem = target.closest(".accordion__item");
  if (!accItem) return;

  const accordionItems = accordion.querySelectorAll(".accordion__item");

  for (const item of accordionItems) {
    item.classList.remove("active");
    item.querySelector(".accordion__icon").innerHTML = "&#43";
  }

  accItem.classList.add("active");
  accItem.querySelector(".accordion__icon").innerHTML = "&#45";
});
