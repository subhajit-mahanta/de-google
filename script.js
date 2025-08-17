// Interactive DeGoogle Guide
let tips = [];
fetch('assets/tips.json')
  .then(res => res.json())
  .then(data => {
    tips = data;
    renderTips();
  });

function renderTips() {
  const tipsList = document.getElementById('tipsList');
  tipsList.innerHTML = '';
  tips.forEach((tip, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${tip.title}:</strong> ${tip.tip}`;
    tipsList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('showValueBtn').addEventListener('click', function() {
    const valueBox = document.getElementById('dataValueBox');
    valueBox.style.display = valueBox.style.display === 'block' ? 'none' : 'block';
  });

  document.getElementById('quizBtn').addEventListener('click', function() {
    document.getElementById('quizSection').style.display = 'block';
  });

  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const answer = document.querySelector('input[name="quizQ1"]:checked');
    const result = document.getElementById('quizResult');
    if (answer && answer.value === 'b') {
      result.textContent = 'Correct! Google makes most of its money from ads.';
      result.style.color = 'green';
    } else {
      result.textContent = 'Not quite! The main source is advertising.';
      result.style.color = 'red';
    }
  });
});
