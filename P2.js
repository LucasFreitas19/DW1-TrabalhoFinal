

document.getElementById('localizador').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});



function nextpage(){

    let localizador = document.getElementById("localizador").value;
    let localizadores = ["A75HB2", "B56T23","2MJ03J", "3LQ7RZ", "BNS981", "MJ765S", " BN78JH" , "EUAN82", "28SN96"];
    let codigocorreto = false;

    for (let i = 0; i < localizadores.length; i++) {

        if (localizadores[i]== localizador) {

        codigocorreto = true;
            
            
        }
        
        
    }

    if (codigocorreto == true) {

        window.sessionStorage.setItem("localizador", localizador);
        window.location = "./P3.html";
        
    } else { 

        document.getElementById("alert").innerText = "Este codigo não possui nenhum voo";




    }

    };

    
    