let whatt = document.getElementById("whatsapp");

function zoomWhatt() {
  if (!whatt.classList.contains("zoomWhatt")) {
    whatt.classList.add("zoomWhatt");
  } else {
    whatt.classList.remove("zoomWhatt");
  }
}

export function initialZoom() {
  zoomWhatt();
}


window.onload = setInterval(initialZoom, 500);