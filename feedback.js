// ============================================
//   MOOD ADAA CAFÉ — feedback.js
// ============================================

let currentRating = 0;
let selectedVisit = 'Dine In';

const ratingLabels = ['', 'Poor 😞', 'Fair 😐', 'Good 🙂', 'Great 😊', 'Amazing! 🤩'];

function setRating(val) {
  currentRating = val;
  updateStars(val);
  document.getElementById('ratingLabel').textContent = ratingLabels[val];
}

function updateStars(val) {
  document.querySelectorAll('#starsContainer .star').forEach((s, i) => {
    s.classList.toggle('lit', i < val);
  });
}

document.querySelectorAll('#starsContainer .star').forEach((star, idx) => {
  star.addEventListener('mouseenter', () => updateStars(idx + 1));
  star.addEventListener('mouseleave', () => updateStars(currentRating));
});

function selectVisit(btn) {
  document.querySelectorAll('.visit-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedVisit = btn.textContent.trim();
}

function handleSubmit(e) {
  e.preventDefault();
  if (currentRating === 0) { alert('Please select a star rating!'); return; }
  document.getElementById('feedbackForm').style.display = 'none';
  document.getElementById('successMsg').style.display   = 'block';
}
