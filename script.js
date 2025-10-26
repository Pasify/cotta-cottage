"use strict";
const trackerMouse = document.querySelector(".mouse-tracker");
const navToggle = document.getElementById("nav-toggle");
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  trackerMouse.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

// touch overlay to close nav menu.
document.querySelector(".nav__overlay").addEventListener("click", () => {
  navToggle.checked = false;
});
