const botao = document.querySelector(".botao");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", function() {
  mensagem.textContent = "Se chegou até aqui é sinal que você é apaixonado por tecnologia, Bem-vindo ao time!";
});