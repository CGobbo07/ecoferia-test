const carrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const botonComprar = document.getElementById("comprar");
const abrirCarrito = document.getElementById("abrir-carrito");
const contadorCarrito = document.getElementById("contador-carrito");

let items = [];


document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".producto");
    const nombre = boton.dataset.nombre;
    const precio = parseInt(boton.dataset.precio);
    const input = card.querySelector("input[type='number']");
    const cantidad = parseInt(input.value);

    if (isNaN(cantidad) || cantidad < 1) return;

    for (let i = 0; i < cantidad; i++) {
      items.push({ nombre, precio });
    }

    actualizarCarrito();
    carrito.classList.remove("oculto");
    carrito.classList.add("activo");
  });
});


if (abrirCarrito) {
  abrirCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    carrito.classList.remove("oculto");
    carrito.classList.add("activo");
  });
}


cerrarCarrito.addEventListener("click", () => {
  carrito.classList.remove("activo");
  carrito.classList.add("oculto");
});


function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  items.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      items.splice(index, 1);
      actualizarCarrito();
    });

    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
  });

  totalElemento.textContent = total;


  if (contadorCarrito) {
    if (items.length > 0) {
      contadorCarrito.textContent = `(${items.length})`;
      contadorCarrito.style.display = "inline";
    } else {
      contadorCarrito.style.display = "none";
    }
  }
}


botonComprar.addEventListener("click", () => {
  if (items.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("¡Gracias por tu compra!");
  items = [];
  actualizarCarrito();
  carrito.classList.remove("activo");
  carrito.classList.add("oculto");
});
