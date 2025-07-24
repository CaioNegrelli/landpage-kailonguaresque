document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagemTexto").value;

  const texto = `Olá, sou ${nome}. ${mensagem}`;
  const numero = "5568992106733"; //
  const linkWhatsApp = `https://wa.me/${5568992106733}?text=${encodeURIComponent(texto)}`;

  window.open(linkWhatsApp, "_blank");
});
