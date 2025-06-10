
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const modo = localStorage.getItem("modo");

  if (modo === "oscuro") {
    body.classList.add("dark-mode");
  } else if (modo === "alto-contraste") {
    body.classList.add("alto-contraste");
  }

  const elementos = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach((el) => observer.observe(el));
});


document.getElementById("modo-btn")?.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.remove("alto-contraste");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.removeItem("modo");
  }
});


document.getElementById("btn-contraste")?.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("alto-contraste");
  body.classList.remove("dark-mode");

  if (body.classList.contains("alto-contraste")) {
    localStorage.setItem("modo", "alto-contraste");
  } else {
    localStorage.removeItem("modo");
  }
});


const formulario = document.getElementById("contactForm");
if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeExito = document.getElementById("mensajeExito");

    if (nombre && email && mensaje) {
      formulario.reset();
      if (mensajeExito) {
        mensajeExito.classList.add("visible");
        setTimeout(() => mensajeExito.classList.remove("visible"), 4000);
      }
    }
  });
}
