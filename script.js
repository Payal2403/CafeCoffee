const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Togglemobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the ckose button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when  the close button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})

//Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const inputs = form.querySelectorAll(".form-input");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const message = inputs[2].value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Create alert element
        const alertBox = document.createElement("div");
        alertBox.className = "custom-alert";
        alertBox.textContent = "Details submitted successfully!";
        document.body.appendChild(alertBox);

        // Show it
        setTimeout(() => alertBox.classList.add("show"), 10);

        // Hide after 3 seconds
        setTimeout(() => {
        alertBox.classList.remove("show");
        setTimeout(() => alertBox.remove(), 400);
        }, 3000);

        form.reset(); // Clear form fields
    });
});
