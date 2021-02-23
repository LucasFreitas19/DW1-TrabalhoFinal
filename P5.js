




let qtdSegundos = 10;
function segundos (){
setTimeout = qtdSegundos;
window.location = "./P1.html";

}

let assento = sessionStorage.getItem("assentocorreto");
let localizador = sessionStorage.getItem("localizador");
let emergencia = sessionStorage.getItem("emergencia");
let nome = sessionStorage.getItem("name");








document.getElementById("texto").textContent = nome ;
document.getElementById("poltrona").textContent = assento;
document.getElementById("emer").textContent = emergencia;
document.getElementById("local").textContent = localizador;