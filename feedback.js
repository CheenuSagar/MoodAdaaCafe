// ============================================
//   MOOD ADAA CAFÉ — feedback.js
// ============================================

// ===== STATE =====
let currentRating  = 0;
let selectedVisit  = 'Dine In';

const ratingLabels = ['', 'Poor 😞', 'Fair 😐', 'Good 🙂', 'Great 😊', 'Amazing! 🤩'];

// ===== STAR RATING =====
function setRating(value) {
  currentRating = value;

  const stars = document.querySelectorAll('#starsContainer .star');
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });

  document.getElementById('ratingLabel').textContent = ratingLabels[value];
}

// Hover preview effect
document.querySelectorAll('#starsContainer .star').forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    const stars = document.querySelectorAll('#starsContainer .star');
    stars.forEach((s, i) => {
      s.style.color = i <= index ? '#f5c518' : '#e5e7eb';
    });
  });

  star.addEventListener('mouseleave', () => {
    const stars = document.querySelectorAll('#starsContainer .star');
    stars.forEach((s, i) => {
      s.style.color = i < currentRating ? '#f5c518' : '#e5e7eb';
    });
  });
});

// ===== VISIT TYPE =====
function selectVisit(btn) {
  document.querySelectorAll('.visit-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedVisit = btn.textContent.trim();
}

// ===== FORM SUBMIT =====
function handleSubmit(e) {
  e.preventDefault();

  // Validate rating
  if (currentRating === 0) {
    alert('Please select a star rating before submitting!');
    return;
  }

  const name    = document.getElementById('nameInput').value.trim();
  const message = document.getElementById('msgInput').value.trim();

  // Log to console (can be replaced with API call)
  console.log('Feedback Submitted:', {
    name,
    visitType: selectedVisit,
    rating: currentRating,
    ratingLabel: ratingLabels[currentRating],
    message,
    timestamp: new Date().toISOString(),
  });

  // Show success screen
  document.getElementById('feedbackForm').classList.add('hidden');
  document.getElementById('successMsg').classList.remove('hidden');
}
