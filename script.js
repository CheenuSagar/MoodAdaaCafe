let cart = [];
function addToCart(n, p) { let i = cart.find(x => x.n === n); i ? i.q++ : cart.push({ n, p, q: 1 }); update(); }
function update() { let c = document.getElementById('cartItems'), t = 0, k = 0; c.innerHTML = ''; cart.forEach(i => { t += i.p * i.q; k += i.q; c.innerHTML += `${i.n} x ${i.q}<br>` }); document.getElementById('totalPrice').innerText = t; document.getElementById('cartCount').innerText = k; }
function openCart() { document.getElementById('cartModal').style.display = 'flex' }
function closeCart() { document.getElementById('cartModal').style.display = 'none' }
function orderWhatsApp() { let m = 'My Order:%0A'; cart.forEach(i => m += `${i.n} x ${i.q}%0A`); window.open('https://wa.me/+919756341454?text=' + m) }
function payNow() { alert('Payment gateway ready soon!') }
