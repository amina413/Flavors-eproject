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

    // hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

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
    const galleryImages = ["assets/img-10.jpg", "assets/img-4.jpg", "assets/img-3.jpg"];
    let currentIndex = 0;

    // Star ratings
const starRatings = {
    "assets/img-10.jpg": 5,
    "assets/img-4.jpg": 4,
    "assets/img-3.jpg": 5
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
        star.innerHTML = "★";
        star.classList.add("star");
        if (i >= starCount) {
            star.classList.add("inactive"); // Add a class to style unselected stars
        }
        star.dataset.index = i + 1;
        star.addEventListener("click", () => handleStarClick(imageSrc, i + 1));
        starContainer.appendChild(star);
    }
}

function handleStarClick(imageSrc, rating) {
    starRatings[imageSrc] = rating; // Update rating for the image
    updateStars(imageSrc); // Refresh the displayed stars
}

// CSS styles for inactive stars
const style = document.createElement("style");
style.innerHTML = `
    .star.inactive {
        color: gray;
    }
`;
document.head.appendChild(style);

// gallery popup functionality
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
    // Event Listeners for Navigation
document.getElementById("popup-next")?.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGalleryImage();
});

document.getElementById("popup-prev")?.addEventListener("click", function () {
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

// Site Map Section
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for normal navbar & site map links
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

    // Scroll to navbar & trigger dropdown for Bestsellers, Hot Deals, New Arrivals
    document.querySelectorAll(".scroll-and-dropdown").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.getElementById("navbar"); // Scrolls to Navbar
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }

            // Open dropdown menu
            const dropdownMenu = document.querySelector(".dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.classList.add("open"); // Add 'open' class to dropdown
                setTimeout(() => dropdownMenu.classList.remove("open"), 3000); // Auto-close after 3s
            }
        });
    });
});

