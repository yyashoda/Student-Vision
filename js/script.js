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

// ------------------------ registration form -----------------------------
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate username
    const username = document.getElementById('username');
    if (username.value.trim() === '') {
      isValid = false;
      showError(username, 'Please enter a valid username');
    } else {
      clearError(username);
    }

    // Validate email
    const email = document.getElementById('email');
    const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/;
    if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      showError(email, 'Please enter a valid email');
    } else {
      clearError(email);
    }

    // Validate password
    const password = document.getElementById('password');
    if (password.value.trim().length < 6) {
      isValid = false;
      showError(password, 'Password must be at least 6 characters');
    } else {
      clearError(password);
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value.trim() !== password.value.trim()) {
      isValid = false;
      showError(confirmPassword, 'Passwords do not match');
    } else {
      clearError(confirmPassword);
    }

    // Validate phone number
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
      isValid = false;
      showError(phone, 'Please enter a valid phone number');
    } else {
      clearError(phone);
    }

    if (isValid) {
      alert('Form submitted successfully!');
      // Add your form submission logic here
    }
  });

  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      validateField(input);
    });
  });

  function validateField(input) {
    switch (input.id) {
      case 'username':
        if (input.value.trim() === '') {
          showError(input, 'Please enter a valid username');
        } else {
          clearError(input);
        }
        break;
      case 'email':
        const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/;
        if (!emailPattern.test(input.value.trim())) {
          showError(input, 'Please enter a valid email');
        } else {
          clearError(input);
        }
        break;
      case 'password':
        if (input.value.trim().length < 6) {
          showError(input, 'Password must be at least 6 characters');
        } else {
          clearError(input);
        }
        break;
      case 'confirmPassword':
        const password = document.getElementById('password');
        if (input.value.trim() !== password.value.trim()) {
          showError(input, 'Passwords do not match');
        } else {
          clearError(input);
        }
        break;
      case 'phone':
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(input.value.trim())) {
          showError(input, 'Please enter a valid phone number');
        } else {
          clearError(input);
        }
        break;
    }
  }

  function showError(input, message) {
    input.classList.add('error');
    const feedback = input.nextElementSibling;
    feedback.textContent = message;
    feedback.style.display = 'block';
  }

  function clearError(input) {
    input.classList.remove('error');
    const feedback = input.nextElementSibling;
    feedback.style.display = 'none';
  }
});
 
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
