let s = document.querySelectorAll('.stars span');
s.forEach((e, i) => e.onclick = () => { s.forEach(x => x.classList.remove('active')); for (let j = 0; j <= i; j++)s[j].classList.add('active') });
document.getElementById('f').onsubmit = e => { e.preventDefault(); alert('Thanks for feedback') };
