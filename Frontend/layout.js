function includeHTML(callback) {
  const includes = document.querySelectorAll('[data-include]');
  let remaining = includes.length;

  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
        remaining--;
        if (remaining === 0 && typeof callback === 'function') {
          callback();
        }
      });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML(() => {
    setupHeaderMenu();
    setupEmailValidation();
    setupNewsletterForm(); // ✅ ici après que le footer est bien chargé
  });
});

function setupHeaderMenu() {
  let menuOpen = false;

  const sidebar = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("overlay");

  if (!sidebar || !overlay) return;

  window.toggleMenu = function () {
    sidebar.style.width = menuOpen ? "0" : "300px";
    overlay.style.display = menuOpen ? "none" : "block";
    menuOpen = !menuOpen;
  };

  window.closeMenu = function () {
    sidebar.style.width = "0";
    overlay.style.display = "none";
    menuOpen = false;
  };
}

function setupEmailValidation() {
  const emailInput = document.querySelector('.subscribe-input');
  if (!emailInput) return;

  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    emailInput.classList.remove('valid', 'invalid');

    if (value === '') return;

    if (isValid) {
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.add('invalid');
    }
  });
}

function setupNewsletterForm() {
  const subscribeBtn = document.querySelector('.subscribe-button');
  const emailInput = document.querySelector('.subscribe-input');

  if (!subscribeBtn || !emailInput) return;

  subscribeBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        emailInput.value = "";
        emailInput.classList.remove('valid');
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("AJAX Error:", error);
      alert("Could not connect to the server.");
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML(() => {
    setupHeaderMenu();
    setupEmailValidation();
    setupNewsletterForm(); // 👈 ajoute ça !
  });
});
