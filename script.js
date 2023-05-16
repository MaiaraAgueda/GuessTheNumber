// gerar número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// selecionar os elementos da página
const formulario = document.querySelector('#advinha-form');
const entrada = document.querySelector('#advinha-input');
const botao = document.querySelector('#botaoAdvinhar');
const mensagem = document.querySelector('#message');
const tentativas = document.querySelector('#tries');

// inicializar tentativas
let numTentativas = 7;
tentativas.textContent = numTentativas;

// adicionar evento de submissão do formulário
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // impedir envio do formulário

  const palpite = parseInt(entrada.value);
  if (isNaN(palpite)) {
    mensagem.textContent = 'Type a valid number!';
  } else if (palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Type a number between 1 and 100!';
  } else if (palpite < numeroAleatorio) {
    mensagem.textContent = 'Your number is too small! [' + (palpite + 1) + ', 100]';
    numTentativas--;
  } else if (palpite > numeroAleatorio) {
    mensagem.textContent = 'Your number is too large! [1, ' + (palpite - 1) + ']';
    numTentativas--;
  } else {
    mensagem.textContent = 'Congratulations!';
    reiniciarJogo();
    return
  }

  entrada.value = ''; // limpar campo de entrada
  tentativas.textContent = numTentativas;

  if (numTentativas === 0) {
    mensagem.textContent = 'You lose! Correct number: ' + numeroAleatorio;
    reiniciarJogo();
  }
});

// função para reiniciar o jogo
function reiniciarJogo() {
  setTimeout(function () {
    location.reload();
  }, 5000); // aguardar 
}