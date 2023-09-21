const saibaMais = document.getElementById("know-plus");
const modalMain = document.getElementById("modal-main");


export function abrirModal() {
  if (!modalMain.classList.contains("open-modal")) {
    modalMain.classList.add("open-modal");
  }
}

export function fecharModal() {
  if (modalMain.classList.contains("open-modal")) {
    modalMain.classList.remove("open-modal");
  }
}

saibaMais.addEventListener("click", abrirModal);
modalMain.addEventListener("click", fecharModal);



