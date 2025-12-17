// Добавить товар в корзину
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Товар "${name}" добавлен в корзину!`);
}

// Отобразить корзину
function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
    return;
  }

  let html = '<h2>Товары в корзине:</h2>';
  let total = 0;

  cart.forEach((item, index) => {
    html += `
      <div class="cart-item">
        <strong>${item.name}</strong> — ${item.price.toLocaleString('ru-RU')} ₽
        <button onclick="removeFromCart(${index})">Удалить</button>
      </div>
    `;
    total += item.price;
  });

  html += `<h3>Итого: ${total.toLocaleString('ru-RU')} ₽</h3>`;
  cartContainer.innerHTML = html;
}

// Удалить товар
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// Очистить корзину
function clearCart() {
  if (confirm('Очистить корзину?')) {
    localStorage.removeItem('cart');
    displayCart();
  }
}