function limitaTotal (evt) {
    var input = evt.target;
    var value = input.value;

    if (value.length <= 11) {
        return;
    }

    input.value = input.value.substr(0, 11); 
}

document.getElementById('inputCPF').addEventListener('input', limitaTotal)
document.getElementById("inputtelefone").addEventListener('input', limitaTotal)
document.getElementById("inputtelefonee").addEventListener('input', limitaTotal)






    function salvar(){
       
        const nome = document.getElementById("name").value;
        const emergencia = document.getElementById("emergencia").value;
        
        
            window.sessionStorage.setItem("emergencia",emergencia);
            window.sessionStorage.setItem("name", nome);
        


    }



function nextpage(){
   

       
    window.location = "./P4.html";}
    

