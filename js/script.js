document.addEventListener('DOMContentLoaded', function() {
  var carouselElement = document.querySelector('#carouselExampleIndicators');
  var carouselItems = carouselElement.querySelectorAll('.carousel-item');
  var currentIndex = 0;

  function showNextSlide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});


// card hover

// Additional JavaScript can be added here for more complex dynamic interactions
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.fa-brands');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

//  registration form 
document.addEventListener('DOMContentLoaded', function() {
  const showFormBtn = document.getElementById('showFormBtn');
  const registrationForm = document.getElementById('registrationForm');

  showFormBtn.addEventListener('click', function() {
    registrationForm.style.display = 'block';
  });
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// current news -------------------------------------
const newsData = [
  { title: "Breaking News: Earthquake Hits Japan", source: "https://indianexpress.com/section/india/", time: "1 hour ago" },
  { title: "Tech Giants Face Antitrust Scrutiny", source: "BBC", time: "2 hours ago" },
  { title: "New COVID-19 Variant Detected in Europe", source: "Reuters", time: "3 hours ago" }
  // Add more news items here
];

// Function to display news on the webpage
function displayNews() {
  const newsContainer = document.getElementById('newsContainer');

  // Clear previous news if any
  newsContainer.innerHTML = '';

  // Loop through each news item and create a card to display it
  newsData.forEach(news => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${news.source} - ${news.time}</h6>
      </div>
    `;
    newsContainer.appendChild(card);
  });
}

// Call the displayNews function to show news on page load
displayNews();
