




let qtdSegundos = 10 * 1000;


let assento = sessionStorage.getItem("assentocorreto");
let localizador = sessionStorage.getItem("localizador");
let emergencia = sessionStorage.getItem("emergencia");
let nome = sessionStorage.getItem("name");








document.getElementById("texto").textContent = nome ;
document.getElementById("poltrona").textContent = assento;
document.getElementById("emer").textContent = emergencia;
document.getElementById("local").textContent = localizador;

window.setTimeout(() => { window.location.href = "P1.html"}, qtdSegundos);