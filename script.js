"use strict";
const trackerMouse = document.querySelector(".mouse-tracker");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  trackerMouse.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
