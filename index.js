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

    // 🚀 Hamburger Menu Logic
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 🚀 Fade Text Animation
    const texts = ["Spices", "Herbs", "Clove", "Cinnamon", "Garlic", "Nutmeg"];
    let index = 0;
    const textElement = document.getElementById("text-display");

    if (textElement) {
        textElement.style.transition = "opacity 1s ease-in-out";

        function fadeText() {
            textElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                index = (index + 1) % texts.length; // Loop through texts
                textElement.textContent = texts[index]; // Change text
                textElement.style.opacity = 1; // Fade in
            }, 1000); // Delay should match the CSS transition duration
        }

        setInterval(fadeText, 3000); // Change text every 3 seconds
    }

    // 🚀 Smooth Scrolling for Links
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 50; // Adjust for fixed navbar height
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth"
                });
            }
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

    // 🚀 Gallery & Popup Logic
    const galleryPopup = document.getElementById("gallery-popup");
    const galleryImage = document.querySelector(".gallery-content img");
    const galleryDescription = document.querySelector(".gallery-description");

    if (galleryPopup && galleryImage && galleryDescription) {
        const galleryData = {
            bestsellers: [
                { src: "assets/img-8.jpg", description: "Premium quality spice blend, perfect for cooking." },
                { src: "assets/img-17.jpg", description: "Organic cloves sourced from the finest farms." },
                { src: "assets/img-1.jpg", description: "Cinnamon sticks with a rich aroma and flavor." }
            ],
            hotDeals: [
                { src: "assets/img-16.jpg", description: "Limited-time discount on fresh garlic paste!" },
                { src: "assets/img-10.jpg", description: "Buy one get one free on organic nutmeg." },
                { src: "assets/img-11.jpg", description: "Exclusive offer on dried basil leaves." }
            ],
            newArrivals: [
                { src: "assets/img-9.jpg", description: "Our brand new brown garnishing sauce!" },
                { src: "assets/img-13.jpg", description: "Special turmeric powder with a strong essence." },
                { src: "assets/img-14.jpg", description: "Spicy sunday grill sauce special ." }
            ]
        };

        let currentCategory = "bestsellers";
        let currentIndex = 0;

        function updateGalleryImage() {
            const currentImages = galleryData[currentCategory];
            if (currentImages && currentImages[currentIndex]) {
                const { src, description } = currentImages[currentIndex];
                galleryImage.src = src;
                galleryDescription.textContent = description;
                updateStars(src);
            }
        }

        function openGalleryPopup(category) {
            currentCategory = category;
            currentIndex = 0;
            galleryPopup.style.display = "flex";
            updateGalleryImage();
        }

        function closeGallery() {
            galleryPopup.style.display = "none";
        }

        // Add event listeners to buttons with data-gallery attribute
        document.querySelectorAll("[data-gallery]").forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                const category = this.dataset.gallery;
                openGalleryPopup(category);
            });
        });

        document.getElementById("popup-next")?.addEventListener("click", function () {
            const maxIndex = galleryData[currentCategory].length - 1;
            currentIndex = (currentIndex + 1) % (maxIndex + 1);
            updateGalleryImage();
        });

        document.getElementById("popup-prev")?.addEventListener("click", function () {
            const maxIndex = galleryData[currentCategory].length - 1;
            currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
            updateGalleryImage();
        });

        document.getElementById("gallery-close")?.addEventListener("click", closeGallery);

        // Close gallery when clicking outside
        document.addEventListener("click", function (event) {
            if (event.target === galleryPopup) {
                closeGallery();
            }
        });

        // ⭐ Star ratings logic
        const starRatings = {
            "assets/img-8.jpg": 5,
          "assets/img-17.jpg": 4,
          "assets/img-1.jpg": 5,
           "assets/img-16.jpg": 3,
       "assets/img-10.jpg": 4,
    "assets/img-11.jpg": 5,
    "assets/img-9.jpg": 4,
    "assets/img-13.jpg": 3,
    "assets/img-14.jpg": 5
        };

        function updateStars(imageSrc) {
            const starContainer = document.querySelector(".gallery-stars");
            if (starContainer) {
                starContainer.innerHTML = "";
                const starCount = starRatings[imageSrc] || 3;
                for (let i = 0; i < 5; i++) {
                    let star = document.createElement("span");
                    star.innerHTML = "★";
                    star.classList.add("star");
                    if (i >= starCount) {
                        star.classList.add("inactive");
                    }
                    star.dataset.index = i + 1;
                    star.addEventListener("click", () => handleStarClick(imageSrc, i + 1));
                    starContainer.appendChild(star);
                }
            }
        }

        function handleStarClick(imageSrc, rating) {
            starRatings[imageSrc] = rating;
            updateStars(imageSrc);
        }
    }

    // 🚀 Carousel Logic
    const carouselTrack = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselImages = document.querySelectorAll(".carousel-images img");

    if (carouselTrack && prevButton && nextButton && carouselImages.length > 0) {
        let index = 0;
        const imagesPerView = window.innerWidth < 768 ? 1 : 3; // Adjust for mobile
        const totalImages = carouselImages.length;
        const imageWidth = carouselImages[0].clientWidth + 10;

        function updateCarousel() {
            const translateX = -index * imageWidth + "px";
            carouselTrack.style.transform = "translateX(" + translateX + ")";
        }

        nextButton.addEventListener("click", function () {
            index = (index + 1) % (totalImages - imagesPerView + 1);
            updateCarousel();
        });

        prevButton.addEventListener("click", function () {
            index = index > 0 ? index - 1 : totalImages - imagesPerView;
            updateCarousel();
        });

        setInterval(() => {
            index = (index + 1) % (totalImages - imagesPerView + 1);
            updateCarousel();
        }, 5000);
    }

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
