

let bgImage = document.getElementById("main");
let imagens = [
  "../img/img-main.webp",
  "../img/img-main2.webp",
  "../img/img-main3.webp",
  "../img/img-main4.webp",
  "../img/img-main5.webp",
];

export function changeBgImagen() {
  let numImagem = Math.floor(Math.random()* imagens.length);

  bgImage.style.backgroundImage = `url('${imagens[numImagem]}')`;
  bgImage.style.transition = "5s ease-in-out";
}

window.onload = setInterval(changeBgImagen, 6000);