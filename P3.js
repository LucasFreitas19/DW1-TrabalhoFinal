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

