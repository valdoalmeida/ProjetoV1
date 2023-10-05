//import {changeBgImagen} from "../modules/imgRandom.js";
import { initialZoom } from "../modules/whatt.js";
import { abrirModal, fecharModal } from "../modules/modal.js";
import { loadCounter } from "../modules/counter.js";

let containerYealink = document.getElementById("img-container-yealink");
let containerYealink1 = document.getElementById("img-container-yealink1");
let containerYealink2 = document.getElementById("img-container-yealink2");
let yealink = document.querySelectorAll(".img-container-yealink img");
let yealink1 = document.querySelectorAll(".img-container-yealink1 img");
let yealink2 = document.querySelectorAll(".img-container-yealink2 img");
let imgSuave = document.getElementById(".img-yealink");

function mudarImagem() {
  let mudarImg = Math.floor(Math.random() * yealink.length);
  let mudarImg1 = Math.floor(Math.random() * yealink1.length);
  let mudarImg2 = Math.floor(Math.random() * yealink2.length);

  yealink.forEach((imagem) => {
    imagem.style.opacity = 0;
  });

  yealink1.forEach((imagem) => {
    imagem.style.opacity = 0;
  });

  yealink2.forEach((imagem) => {
    imagem.style.opacity = 0;
  });

  containerYealink.innerHTML = `<img src="${yealink[mudarImg].src}" alt="${yealink[mudarImg].alt}">`;
  containerYealink1.innerHTML = `<img src="${yealink1[mudarImg1].src}" alt="${yealink1[mudarImg1].alt}">`;
  containerYealink2.innerHTML = `<img src="${yealink2[mudarImg2].src}" alt="${yealink2[mudarImg2].alt}">`;
}

function chamarImagens() {
  mudarImagem();
}

setInterval(() => {
  mudarImagem();
}, 2000);
