// En const til knappen så vi kan refere til den med det navn
const seProjekterKnap = document.querySelector("#projektKnap");

// når HTML er hentet helt ind, så tilføjes en eventListener, der gør knappen klibar, og
// ved klik sendes man til projekter siden
document.addEventListener("DOMContentLoaded", () => {
  seProjekterKnap.addEventListener("click", () => {
    window.location.href = "projekter.html";
  });
});

// seprojektknap til tema 2 //

document.addEventListener("DOMContentLoaded", () => {
  seProjekt1.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/02_web/01_website/website/galleri.html";
  });
});

// seprojektknap til tema 3 //

document.addEventListener("DOMContentLoaded", () => {
  seProjekt2.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/03_ux/01_kodet_site/index.html";
  });
});

// seprojektknap til tema 4 //

document.addEventListener("DOMContentLoaded", () => {
  seProjekt3.addEventListener("click", () => {
    window.location.href = "http://zinasaleh.dk/kea/04_animation/website/spil.html";
  });
});

// seprojektknap til tema 5 //

document.addEventListener("DOMContentLoaded", () => {
  seProjekt4.addEventListener("click", () => {
    window.location.href = "https://zinasaleh.dk/05_indhold/centralhotelogcafe/about.html";
  });
});
