let num1 = document.getElementById("num-delivery1");
let num2 = document.getElementById("num-delivery2");
let num3 = document.getElementById("num-delivery3");
let num4 = document.getElementById("num-delivery4");
let deliveryOur = document.getElementById("delivery-ours");

// INICIO DOS CONTADORES
var contador1 = 0; // Defina o valor inicial da contagem progressiva
var contador2 = 0; // Defina o valor inicial da contagem progressiva
var contador3 = 0; // Defina o valor inicial da contagem progressiva
var contador4 = 0; // Defina o valor inicial da contagem progressiva

// FUNÇÃO PARA INCREMENTAR O CONTADOR
function counterNum1() {
  setInterval(() => {
    if (contador1 < 150) {
      contador1++;
      num1.textContent = contador1;
    }
  }, 70);
}

function counterNum2() {
  setInterval(() => {
    if (contador2 < 88) {
      contador2++;
      num2.textContent = contador2;
    }
  }, 120);
}

function counterNum3() {
  setInterval(() => {
    if (contador3 < 494) {
      contador3++;
      num3.textContent = contador3;
    }
  }, 20);
}

function counterNum4() {
  setInterval(() => {
    if (contador4 < 55) {
      contador4++;
      num4.textContent = contador4;
    }
  }, 190);
}

export function loadCounter() {
  counterNum1();
  counterNum2();
  counterNum3();
  counterNum4();
}



//CHAMAR A FUNÇÃO QUANDO O ELEMENTO DO HTML APARECER NO VIEWPORT
const cardCount = document.querySelector(".card-delivery");

const opcao = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Apenas chame loadCounter quando o elemento entrar na viewport
      loadCounter();
      // Depois, pare de observar o elemento, se necessário
      observer.unobserve(entry.target);
    }
  });
}

const observar = new IntersectionObserver(callback, opcao);

observar.observe(cardCount);

