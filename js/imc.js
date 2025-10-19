// Recebe os botões
const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para validar status do IMC e cor correspondente
function validarStatusIMC(valorIMC) {
    let status_imc = 'Inválido';
    let cor = '#000'; // cor padrão preta

    if (valorIMC < 18.5) {
        status_imc = 'Magreza';
        cor = '#3498db'; // azul
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        status_imc = 'Normal';
        cor = '#024d21ff'; // verde
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        status_imc = 'Sobrepeso';
        cor = '#f1690fff'; // amarelo
    } else if (valorIMC >= 30) {
        status_imc = 'Obesidade';
        cor = '#f51c04ff'; // vermelho
    }

    return { status_imc, cor };
}

// Evento click do botão calcular
botaoCalcular.addEventListener('click', function() {
    let peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    let altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos de peso e altura!");
        return;
    }

    let resultado_IMC = calcularIMC(peso, altura);
    let resultado = validarStatusIMC(resultado_IMC);

    const valorIMCElement = document.getElementById('resultado_valor_imc');
    const statusIMCElement = document.getElementById('resultado_status_imc');

    valorIMCElement.innerText = resultado_IMC.toFixed(2);
    statusIMCElement.innerText = resultado.status_imc;

    valorIMCElement.style.color = resultado.cor;
    statusIMCElement.style.color = resultado.cor;
});

// Evento click do botão limpar
botaoLimpar.addEventListener('click', function() {
    // Limpa os inputs
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

    // Limpa os resultados
    const valorIMCElement = document.getElementById('resultado_valor_imc');
    const statusIMCElement = document.getElementById('resultado_status_imc');

    valorIMCElement.innerText = '0.00';
    statusIMCElement.innerText = '---';

    // Reseta a cor
    valorIMCElement.style.color = '#000';
    statusIMCElement.style.color = '#000';
});
