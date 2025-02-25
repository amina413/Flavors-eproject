document.addEventListener("DOMContentLoaded", function () {
  // Typing Animation
  const typed = new Typed('.multiple-text', {
      strings: ['Spices', 'Herbs', 'Clove', 'Cinnamon', 'Garlic', 'Nutmeg'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
  });

  // Dropdown Menu
  const shopLink = document.getElementById("shop-link");
  const dropdown = document.querySelector(".dropdown");

  shopLink.addEventListener("click", function (event) {
      event.preventDefault();
      dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target) && event.target !== shopLink) {
          dropdown.classList.remove("active");
      }
  });

  // Popup Logic
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const popupImages = document.querySelector(".popup-images");

  function openPopup(images) {
      popupImages.innerHTML = images.map(img => `<img src="${img}" alt="Product">`).join("");
      popup.style.display = "flex";
  }

  // Ensure elements exist before adding event listeners
  document.getElementById("hot-deals")?.addEventListener("click", function () {
      openPopup(["assets/best-1.jpg", "assets/best-2.jpg", "assets/best-3.jpg"]);
  });

  document.getElementById("hot-deals-dropdown")?.addEventListener("click", function (event) {
      event.preventDefault();
      openPopup(["assets/best-2.jpg", "assets/best-3.jpg", "assets/best-1.jpg"]);
  });

  document.getElementById("new-arrivals-dropdown")?.addEventListener("click", function (event) {
      event.preventDefault();
      openPopup(["assets/best-1.jpg", "assets/best-2.jpg", "assets/best-3.jpg"]);
  });

  closeBtn?.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});
