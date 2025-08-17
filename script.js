// Interactive DeGoogle Guide
var tips = [];
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
  // Show Value interaction
  const showValueBtn = document.getElementById('showValueBtn');
  if (showValueBtn) {
    showValueBtn.addEventListener('click', function() {
      const valueBox = document.getElementById('dataValueBox');
      valueBox.style.display = valueBox.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Quiz interaction
  const quizBtn = document.getElementById('quizBtn');
  if (quizBtn) {
    quizBtn.addEventListener('click', function() {
      document.getElementById('quizSection').style.display = 'block';
    });
  }
  const quizForm = document.getElementById('quizForm');
  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
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
  }

  // Product modal guide
  const altGrid = document.querySelector('.alt-grid');
  if (altGrid) {
    altGrid.querySelectorAll('div').forEach((div, idx) => {
      div.style.cursor = 'pointer';
      div.addEventListener('click', function() {
        showProductGuide(idx);
      });
    });
  }
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      document.getElementById('productGuideModal').style.display = 'none';
    });
  }

  // Random tip
  const randomTipBtn = document.getElementById('randomTipBtn');
  if (randomTipBtn) {
    randomTipBtn.addEventListener('click', function() {
      if (tips.length > 0) {
        const tip = tips[Math.floor(Math.random() * tips.length)];
        document.getElementById('randomTipBox').innerHTML = `<strong>${tip.title}:</strong> ${tip.tip}`;
      }
    });
  }
});

function showProductGuide(idx) {
  const guides = [
    `<b>Search:</b> Use DuckDuckGo for private search. Set it as your browser default. Try Startpage for Google results without tracking.`,
    `<b>Maps:</b> Organic Maps and OsmAnd work offline and don’t track you. Download maps for your area and try navigation.`,
    `<b>Email:</b> ProtonMail and Tutanota offer encrypted email. Sign up and try forwarding your Gmail to your new address.`,
    `<b>Browser:</b> Firefox and Brave block trackers by default. Import your bookmarks and try privacy add-ons.`,
    `<b>Cloud:</b> Nextcloud lets you host your own cloud. Proton Drive is easy and private. Move important files first.`,
    `<b>Android:</b> /e/OS and GrapheneOS are privacy-focused. Try them on a secondary device or use F-Droid for open apps.`,
    `<b>Video:</b> PeerTube and Vimeo have no ads or tracking. Subscribe to creators and explore communities.`,
    `<b>Docs:</b> CryptPad and OnlyOffice let you collaborate without surveillance. Try creating a doc and sharing a link.`,
    `<b>Calendar:</b> Proton Calendar and Etar are private. Import your Google Calendar and test event creation.`,
    `<b>Photos:</b> Immich and PhotoPrism store photos privately. Try uploading a few and test search features.`,
  ];
  document.getElementById('modalContent').innerHTML = guides[idx] || '';
  document.getElementById('productGuideModal').style.display = 'flex';
}
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
