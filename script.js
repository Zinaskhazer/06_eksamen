// En const til knappen så vi kan refere til den med det navn
const seProjekterKnap = document.querySelector("#projektKnap");

// når HTML er hentet helt ind, så tilføjes en eventListener, der gør knappen klibar, og
// ved klik sendes man til projekter siden
document.addEventListener("DOMContentLoaded", () => {
  seProjekterKnap.addEventListener("click", () => {
    window.location.href = "projekter.html";
  });
});
