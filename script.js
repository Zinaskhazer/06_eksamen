// En const til knappen så vi kan refere til den med det navn
const seProjekterKnap = document.querySelector("#projektKnap");

// når HTML er hentet helt ind, så tilføjes en eventListener, der gør knappen klibar, og
// ved klik sendes man til projekter siden
document.addEventListener("DOMContentLoaded", () => {
  seProjekterKnap.addEventListener("click", () => {
    window.location.href = "projekter.html";
  });
});

// TEMA 2 KNAP//
const setema2 = document.querySelector("#tema2");

document.addEventListener("DOMContentLoaded", () => {
  setema2.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/02_web/01_website/website/";
  });
});

// TEMA 3 KNAP //
const setema3 = document.querySelector("#tema3");

document.addEventListener("DOMContentLoaded", () => {
  setema3.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/03_ux/01_kodet_site/index.html";
  });
});

// TEMA 4 KNAP//
const setema4 = document.querySelector("#tema4");

document.addEventListener("DOMContentLoaded", () => {
  setema4.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/04_animation/website/spil.html";
  });
});

// TEMA 5 KNAP//
const setema5 = document.querySelector("#tema5");

document.addEventListener("DOMContentLoaded", () => {
  setema5.addEventListener("click", () => {
    window.location.href = "https://zinasaleh.dk/05_indhold/centralhotelogcafe/about.html";
  });
});
