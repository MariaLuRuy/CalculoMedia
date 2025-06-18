//Função para calcular a média das notas
function calcularMédia() {

    //Pega os valores dos campos
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);
    var n3 = parseFloat(document.getElementById('nota3').value);

    // Verifica se são números válidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira notas válidas!");
        return;
    }
   
    // Calcula a média
    var media = (n1 + n2 + n3) / 3;
 
    // Mostra o resultado
    document.getElementById('resultado').innerText = "A média é: " + media.toFixed(2);
}