document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  localStorage.removeItem('cart');
  window.location.href = 'success.html';
});