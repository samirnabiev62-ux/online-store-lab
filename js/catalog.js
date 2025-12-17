const products = [
  { name: "Беспроводные наушники", price: 2990 },
  { name: "Умные часы", price: 7500 },
  { name: "Powerbank 20000 мАч", price: 1490 },
  { name: "USB-C кабель 2м", price: 390 },
  { name: "Мышь беспроводная", price: 890 }
];

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p class="price">${product.price.toLocaleString('ru-RU')} ₽</p>
    <button class="btn-add" onclick="addToCart('${product.name}', ${product.price})">
      В корзину
    </button>
  `;
  return card;
}

function renderCatalog() {
  const container = document.getElementById('catalog');
  container.innerHTML = '';
  products.forEach(p => container.appendChild(createProductCard(p)));
}

document.addEventListener('DOMContentLoaded', renderCatalog);