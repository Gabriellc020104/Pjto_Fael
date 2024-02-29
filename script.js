function addToCart(product) {
  const cart = document.getElementById('cart');
  const item = document.createElement('p');
  item.textContent = product + ' adicionado ao carrinho';
  cart.appendChild(item);
  document.getElementById('checkout').style.display = 'block';
}

function finishPurchase() {
  alert('Compra realizada com sucesso');
  const notification = document.createElement('p');
  notification.textContent = 'Você receberá uma notificação da entrega de sua mercadoria em seu e-mail';
  document.body.appendChild(notification);
  document.getElementById('cart').innerHTML = '';
  document.getElementById('checkout').style.display = 'none';
}