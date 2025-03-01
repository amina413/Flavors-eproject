document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // 🚀 Visitor Count Logic
    let count = parseInt(localStorage.getItem("visitorCount")) || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    const visitorCountElement = document.getElementById("visitorCount");
    if (visitorCountElement) {
        visitorCountElement.innerText = count;
    }

    // 🚀 Typing Animation
    if (document.querySelector(".multiple-text") && typeof Typed !== "undefined") {
        new Typed(".multiple-text", {
            strings: ["Spices", "Herbs", "Clove", "Cinnamon", "Garlic", "Nutmeg"],
            typeSpeed: 60,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
        });
    }

    // 🚀 Shop Dropdown Menu
    const shopLink = document.getElementById("shop-link");
    const dropdownMenu = document.querySelector(".dropdown");

    if (shopLink && dropdownMenu) {
        shopLink.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownMenu.classList.toggle("active");
            event.stopPropagation();
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!dropdownMenu.contains(event.target) && event.target !== shopLink) {
                dropdownMenu.classList.remove("active");
            }
        });
    }

    // 🚀 Popup & Gallery Logic
    const galleryPopup = document.getElementById("gallery-popup");
    const galleryImages = ["assets/best-1.jpg", "assets/best-2.jpg", "assets/best-3.jpg"];
    let currentIndex = 0;

    // Star ratings
    const starRatings = {
        "assets/best-1.jpg": 5,
        "assets/best-2.jpg": 4,
        "assets/best-3.jpg": 5
    };

    function updateGalleryImage() {
        const imgElement = document.querySelector(".gallery-content img");
        if (imgElement) {
            let currentImage = galleryImages[currentIndex];
            imgElement.src = currentImage;
            updateStars(currentImage);
        }
    }

    function updateStars(imageSrc) {
        const starContainer = document.querySelector(".gallery-stars");
        if (!starContainer) return;
        starContainer.innerHTML = "";

        const starCount = starRatings[imageSrc] || 3;
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("span");
            star.innerHTML = i < starCount ? "★" : "☆";
            star.classList.add("star");
            starContainer.appendChild(star);
        }
    }

    function openGalleryPopup() {
        if (galleryPopup) {
            galleryPopup.style.display = "flex";
            updateGalleryImage();
        }
    }

    function closeGallery() {
        if (galleryPopup) {
            galleryPopup.style.display = "none";
        }
    }

    document.getElementById("gallery-link")?.addEventListener("click", function (event) {
        event.preventDefault();
        openGalleryPopup();
    });

    document.getElementById("hot-deals-dropdown")?.addEventListener("click", function (event) {
        event.preventDefault();
        openGalleryPopup();
    });

    document.getElementById("new-arrivals-dropdown")?.addEventListener("click", function (event) {
        event.preventDefault();
        openGalleryPopup();
    });

    document.getElementById("bestsellers-dropdown")?.addEventListener("click", function (event) {
        event.preventDefault();
        openGalleryPopup();
    });

    document.getElementById("gallery-next")?.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateGalleryImage();
    });

    document.getElementById("gallery-prev")?.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryImage();
    });

    document.getElementById("gallery-close")?.addEventListener("click", closeGallery);

    // 🚀 Ticker & Location
    function updateTicker(location) {
        const now = new Date();
        const dateStr = now.toDateString() + " | " + now.toLocaleTimeString();
        const locationStr = location ? `📍 ${location}` : "Location Unavailable";

        const tickerText = (`${dateStr} | ${locationStr} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `).repeat(4);

        const tickerElement = document.getElementById("ticker-text");
        if (tickerElement) {
            tickerElement.innerHTML = tickerText;
        }
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
    setInterval(fetchLocation, 60000);
});
