let bgYealink = document.getElementById("bg-img-yealink");
let bgYealink1 = document.getElementById("bg-img-yealink1");
let bgYealink2 = document.getElementById("bg-img-yealink2");

let yealinkIgm = [
  "url(../img/yealink/img1.webp)",
  "url(../img/yealink/img2.webp)",
  "url(../img/yealink/img3.webp)",
  "url(../img/yealink/img4.webp)",
  "url(../img/yealink/img5.webp)",
];

let yealinkIgm1 = [
  "url(../img/yealink/img6.webp)",
  "url(../img/yealink/img7.webp)",
  "url(../img/yealink/img8.webp)",
  "url(../img/yealink/img9.webp)",
  "url(../img/yealink/img10.webp)",
];

let yealinkIgm2 = [
  "url(../img/yealink/img2.webp)",
  "url(../img/yealink/img4.webp)",
  "url(../img/yealink/img6.webp)",
  "url(../img/yealink/img8.webp)",
  "url(../img/yealink/img10.webp)",
];

function changeBgYealink() {
  let numImagem = Math.floor(Math.random() * yealinkIgm.length);
  bgYealink.style.backgroundImage = yealinkIgm[numImagem];
  bgYealink.style.backgroundRepeat = "no-repeat";
  bgYealink.style.backgroundPosition = "center";
  bgYealink.style.backgroundSize = "contain";
  bgYealink.style.transition = "5s ease";
}

function changeBgYealink1() {
  let numImagem = Math.floor(Math.random() * yealinkIgm1.length);
  bgYealink1.style.backgroundImage = yealinkIgm1[numImagem];
  bgYealink1.style.backgroundRepeat = "no-repeat";
  bgYealink1.style.backgroundPosition = "center";
  bgYealink1.style.backgroundSize = "contain";
  bgYealink1.style.transition = "5s ease";
}

function changeBgYealink2() {
  let numImagem = Math.floor(Math.random() * yealinkIgm2.length);
  bgYealink2.style.backgroundImage = yealinkIgm2[numImagem];
  bgYealink2.style.backgroundRepeat = "no-repeat";
  bgYealink2.style.backgroundPosition = "center";
  bgYealink2.style.backgroundSize = "contain";
  bgYealink2.style.transition = "5s ease";
}

export function chamarBg() {
  changeBgYealink();
  changeBgYealink1();
  changeBgYealink2();
}

window.onload = setInterval(chamarBg, 5000);
