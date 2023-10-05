"use strict";

let button = document.getElementById('calcular');
let button_limpar = document.getElementById('limpar');

button.addEventListener('click', calculo);
button_limpar.addEventListener('click', limpar);

function calculo(e) {
    e.preventDefault();//para impedir que a página HTML sofra refresh
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let delta = Math.pow(b, 2) - 4 * a * c;
    alert(`O delta é: ${delta}`);
    if (delta > 0) {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "Raiz 1 = " + raiz1 + "<br>" + "Raiz 2 = " + raiz2;

    } else if (delta === 0) {
        let raizUnica = (-b + Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "Raiz única = " + raizUnica;
    } else if (delta < 0) {
        document.getElementById("resultado").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }
}

function limpar(e) {
    document.getElementById('a').value = " ";
    document.getElementById('b').value = " ";
    document.getElementById('c').value = " ";
    document.getElementById('resultado').innerHTML = null;
}






