// Mock de productos (sin BD)
const productos = [
  { id: 1, titulo: "Manzanas", precio: 1.5, img: "https://picsum.photos/seed/a/400/260" },
  { id: 2, titulo: "Leche",    precio: 2.1, img: "https://picsum.photos/seed/b/400/260" },
  { id: 3, titulo: "Pan",      precio: 1.2, img: "https://picsum.photos/seed/c/400/260" },
  { id: 4, titulo: "Huevos",   precio: 2.9, img: "https://picsum.photos/seed/d/400/260" },
];

const grid = document.getElementById("grid");
const buscar = document.getElementById("buscar");

function render(lista) {
  grid.innerHTML = lista.map(p => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img src="${p.img}" class="card-img-top" alt="${p.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.titulo}</h5>
          <p class="text-muted mb-4">$ ${p.precio.toFixed(2)}</p>
          <div class="mt-auto d-grid">
            <button class="btn btn-primary" onclick="agregar(${p.id})">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function filtrar() {
  const q = (buscar.value || "").toLowerCase();
  render(productos.filter(p => p.titulo.toLowerCase().includes(q)));
}

function agregar(id) {
  alert("👍 Agregado (demo): " + productos.find(p => p.id === id).titulo);
}

buscar?.addEventListener("input", filtrar);
render(productos);
