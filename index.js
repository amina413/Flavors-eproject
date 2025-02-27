// Visitor Count Logic
document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("visitorCount") || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitorCount").innerText = count;
});


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

document.addEventListener("DOMContentLoaded", function () {
    function updateTicker(location) {
        const now = new Date();
        const dateStr = now.toDateString() + " | " + now.toLocaleTimeString();
        const locationStr = location ? `📍 ${location}` : "Location Unavailable";
        
        // Add wide gaps between each item
        const tickerText = (`${dateStr} | ${locationStr} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `).repeat(4);
        
        document.getElementById("ticker-text").innerHTML = tickerText;
    }

    function fetchLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=YOUR_API_KEY`)
                        .then(response => response.json())
                        .then(data => {
                            const location = `${data.address.city || data.address.town}, ${data.address.country}`;
                            updateTicker(location);
                        })
                        .catch(() => updateTicker(null));
                },
                function () {
                    updateTicker(null);
                }
            );
        } else {
            updateTicker(null);
        }
    }

    fetchLocation();
    setInterval(fetchLocation, 60000); // Update every minute
});
