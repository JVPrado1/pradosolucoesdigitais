// Animações baseadas em scroll usando Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Configuração do Intersection Observer
  const observerOptions = {
    threshold: 0.1, // Elemento precisa estar 10% visível
    rootMargin: "0px 0px -50px 0px", // Margem negativa para ativar um pouco antes
  };

  // Callback do observer
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona a classe de animação quando o elemento entra na viewport
        entry.target.classList.add("animate-in");

        // Para de observar o elemento após animar
        observer.unobserve(entry.target);
      }
    });
  };

  // Cria o observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Seleciona todos os elementos que devem ser animados
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Observa cada elemento
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
