import "./css/styles.css";
import "./css/code.css";
import "./css/social.css";

import "./js/nojs.js";
import "lazysizes";
import quicklink from "quicklink/dist/quicklink.mjs";
quicklink();

// Hotkeys
window.addEventListener(
  "keydown",
  e => {
    if (e.altKey || e.ctrlKey) {
      if (e.code == "ArrowRight") {
        document.querySelector(".next").click();
      } else if (e.code == "ArrowLeft") {
        document.querySelector(".prev").click();
      }
    }
  },
  { passive: true, capture: false }
);
