function animarImagem(nome) {
  const imagem = event.target;

  imagem.style.transition = "transform 0.2s ease";
  imagem.style.transform = "scale(1.1)";

  setTimeout(() => {
    imagem.style.transform = "scale(1)";
  }, 200);

  setTimeout(() => {
    alert(nome);
  }, 200);
}
