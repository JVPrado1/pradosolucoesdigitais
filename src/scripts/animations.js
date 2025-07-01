// Animações baseadas em scroll usando Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Configuração do Intersection Observer
  const observerOptions = {
    threshold: 0.01, // Elemento precisa estar apenas 1% visível para disparar a animação
    rootMargin: "0px 0px -10px 0px", // Margem negativa pequena para ativar quase imediatamente
  };

  // Callback do observer
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona a classe de animação quando o elemento entra na viewport
        entry.target.classList.add("animate-in");

        // Adiciona uma classe para animações rápidas
        entry.target.classList.add("animate-fast");

        // Log para depuração
        console.log("Animação disparada para:", entry.target);

        // Para de observar o elemento após animar
        observer.unobserve(entry.target);
      }
    });
  };

  // Cria o observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Seleciona todos os elementos que devem ser animados com diferentes efeitos
  const animatedElements = document.querySelectorAll(
    ".animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom-in, .animate-rotate-left, .animate-fade-scale, [data-aos]"
  );

  // Observa cada elemento
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Adiciona estilos CSS para animações mais rápidas
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .animate-in {
      transition-duration: 0.4s !important;
    }
    
    .animate-fast {
      animation-duration: 0.4s !important;
    }
    
    .animate-from-left {
      transform: translateX(-20px);
      opacity: 0;
      transition: all 0.4s ease-out;
    }
    
    .animate-from-left.animate-in {
      transform: translateX(0);
      opacity: 1;
    }
    
    .animate-from-right {
      transform: translateX(20px);
      opacity: 0;
      transition: all 0.4s ease-out;
    }
    
    .animate-from-right.animate-in {
      transform: translateX(0);
      opacity: 1;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.4s ease-out;
    }
    
    .animate-on-scroll.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    [data-aos] {
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.4s ease-out;
    }
    
    [data-aos].animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .mobile-grid-item {
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.4s ease-out;
    }
    
    .mobile-grid-item.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  document.head.appendChild(styleElement);

  // Pré-anima elementos visíveis na carga inicial
  setTimeout(() => {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0;

      if (isVisible) {
        element.classList.add("animate-in", "animate-fast");
      }
    });
  }, 100);
});
