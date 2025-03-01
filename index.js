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

<<<<<<< HEAD
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
=======
// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth scrolling for links
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
>>>>>>> Updated homepage layout and fixed CSS issues

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

// gallery section
document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const imagesPerView = 3; // Show 3 images at a time
    const totalImages = document.querySelectorAll(".carousel-images img").length;
    const imageWidth = document.querySelector(".carousel-images img").clientWidth + 10; // Include margin

    function updateCarousel() {
        const translateX = -index * imageWidth + "px";
        carouselTrack.style.transform = "translateX(" + translateX + ")";
    }

    nextButton.addEventListener("click", function () {
        if (index < totalImages - imagesPerView) {
            index++;
        } else {
            index = 0; // Loop back to start
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalImages - imagesPerView; // Loop to the end
        }
        updateCarousel();
    });

    // Auto-scroll every 5 seconds
    setInterval(() => {
        index = (index + 1) % (totalImages - imagesPerView + 1);
        updateCarousel();
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navbar links
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});

// site map section
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navbar links
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});
