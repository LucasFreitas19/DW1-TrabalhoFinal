let assentocorreto = null;

let assentoss = document.getElementsByClassName("assentos");
for (let index = 0; index < assentoss.length; index++) {
let assento = assentoss[index];
    assento.addEventListener("click", function(ev){

        assentocorreto = ev.target.innerText;
        ev.target.className = ev.target.className +  " assentoselecionado";

    });
}