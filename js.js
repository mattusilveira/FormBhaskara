function calcularRaizes() {

    let ValorA = Number(document.getElementById('ValorA').value);
    let ValorB = Number(document.getElementById('ValorB').value);
    let ValorC = Number(document.getElementById('ValorC').value);

    let Delta = ValorB * ValorB - 4 * ValorA * ValorC;

    if (Delta > 0) {
        let x1 = (-ValorB + Math.sqrt(Delta)) / (2 * ValorA);
        let x2 = (-ValorB - Math.sqrt(Delta)) / (2 * ValorA);

        document.getElementById('resposta').innerHTML = `x1 = ${x1} <br>x2 = ${x2}`;
    } else if (Delta === 0) {
        let x1 = -ValorB / (2 * ValorA);
        document.getElementById('resposta').innerHTML = `x1 = ${x1}`;
    } else {
        document.getElementById('resposta').innerHTML = 'A equação não possui raízes reais (Δ < 0)';
    }
}