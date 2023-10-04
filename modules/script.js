//import {changeBgImagen} from "../modules/imgRandom.js";
import { initialZoom } from "../modules/whatt.js";
import { abrirModal, fecharModal } from "../modules/modal.js";
import { loadCounter } from "../modules/counter.js";

let yealink = document.querySelector(".img-container-yealink");
let yealink1 = document.querySelector(".img-container-yealink1");
let yealink2 = document.querySelector(".img-container-yealink2");
let imagens = document.querySelectorAll(".img-container-yealink img");
let imagens1 = document.querySelectorAll(".img-container-yealink1 img");
let imagens2 = document.querySelectorAll(".img-container-yealink2 img");

function rodarImagens() {
  let numImagem = Math.floor(Math.random() * imagens.length);
  yealink.innerHTML = `<img src="${imagens[numImagem].src}" alt="${imagens[numImagem].alt}">`;
}
function rodarImagens1() {
  let numImagem = Math.floor(Math.random() * imagens.length);
  yealink1.innerHTML = `<img src="${imagens1[numImagem].src}" alt="${imagens1[numImagem].alt}">`;
}
function rodarImagens2() {
  let numImagem = Math.floor(Math.random() * imagens.length);
  yealink2.innerHTML = `<img src="${imagens2[numImagem].src}" alt="${imagens2[numImagem].alt}">`;
}

function chamaImagem() {
  rodarImagens();
  rodarImagens1();
  rodarImagens2();
}

window.onload = () => {
 // Chama a função uma vez para exibir uma imagem inicial
  setInterval(chamaImagem, 3000);
};
