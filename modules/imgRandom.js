let bgImage = document.getElementById("main");
let imagens = [
  "url(../img/img-main.webp)",
  "url(../img/img-main2.webp)",
  "url(../img/img-main3.webp)",
  "url(../img/img-main4.webp)",
  "url(../img/img-main5.webp)",
];

export function changeBgImagen() {
  let numImagem = Math.floor(Math.random() * imagens.length);

  bgImage.style.backgroundImage = imagens[numImagem];
  bgImage.style.transition = "5s ease-in-out";
}

window.onload = setInterval(changeBgImagen, 5000);
