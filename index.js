const typed = new Typed('.multiple-text', {
    strings: ['Spices', 'Herbs', 'Clove', 'Cinnamon', 'Garlic', 'Nutmeg'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const shopLink = document.getElementById("shop-link");
    const dropdown = document.querySelector(".dropdown");

    shopLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== shopLink) {
            dropdown.classList.remove("active");
        }
    });
});
