document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".navbar ul");
  
    mobileMenu.addEventListener("click", () => {
      navList.classList.toggle("active");
      
      if (navList.classList.contains("active")) {
        mobileMenu.innerHTML = "&times;"; // Close icon
      } else {
        mobileMenu.innerHTML = "&#9776;"; // Hamburger icon
      }
    });
  
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#333";
      } else {
        navbar.style.backgroundColor = "#4e4d4d";
      }
    });
  });
  