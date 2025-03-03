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
    }

    // 🚀 Fade Text Animation
    const texts = ["Spices", "Herbs", "Clove", "Cinnamon", "Garlic", "Nutmeg"];
    let index = 0;
    const textElement = document.getElementById("text-display");

    if (textElement) {
        textElement.style.transition = "opacity 1s ease-in-out"; // Ensure smooth transition

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
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
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
    const galleryTitle = document.querySelector(".gallery-title"); 
   

    if (galleryPopup && galleryImage && galleryDescription) {
        const galleryData = {
            bestsellers: [
                { src: "assets/img-8.jpg", description: "Premium quality spice blend, perfect for cooking.", price: "₦200,000" },
                { src: "assets/img-17.jpg", description: "Organic cloves sourced from the finest farms.", price: "₦150,000" },
                { src: "assets/img-1.jpg", description: "Cinnamon sticks with a rich aroma and flavor.", price: "₦250,000" }
            ],
            hotDeals: [
                { src: "assets/img-16.jpg", description: "Limited-time discount on fresh garlic paste!", price: "₦100,000" },
                { src: "assets/img-10.jpg", description: "Buy one get one free on organic nutmeg.", price: "₦98,000" },
                { src: "assets/img-11.jpg", description: "Exclusive offer on dried basil leaves.", price: "₦120,000" }
            ],
            newArrivals: [
                { src: "assets/img-9.jpg", description: "Our brand new brown garnishing sauce!", price: "₦220,000" },
                { src: "assets/img-13.jpg", description: "Special turmeric powder with a strong essence.", price: "₦170,000" },
                { src: "assets/img-14.jpg", description: "Spicy sunday grill sauce special.", price: "₦190,000" }
            ]
        };
        let currentCategory = "bestsellers";
        let currentIndex = 0;

        function updateGalleryImage() {
            const currentImages = galleryData[currentCategory];
            console.log("Current Category:", currentCategory); // Debugging
            console.log("Current Images:", currentImages); // Debugging
            if (currentImages && currentImages[currentIndex]) {
                const { src, description, price } = currentImages[currentIndex];
                galleryImage.src = src;
                galleryDescription.innerHTML = `${description}<br><span class="gallery-price">${price}</span>`;
                updateStars(src);
            }
        }

        function openGalleryPopup(category) {
            console.log("Opening Gallery for:", category); // Debugging
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
                console.log("Button Clicked:", category); // Debugging
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

        
        // ⭐ Star ratings logic
        const starRatings = {
            "assets/best-1.jpg": 5,
            "assets/best-2.jpg": 4,
            "assets/best-3.jpg": 5
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

        // CSS styles for inactive stars
        const style = document.createElement("style");
        style.innerHTML = `
            .star.inactive {
                color: gray;
            }
        `;
        document.head.appendChild(style);
    }


    
    // 🚀 Carousel Logic
    const carouselTrack = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselImages = document.querySelectorAll(".carousel-images img");

    if (carouselTrack && prevButton && nextButton && carouselImages.length > 0) {
        let index = 0;
        const imagesPerView = 3;
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

    // form submission
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual submission
    
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
    
        if (email.trim() === "" || message.trim() === "") {
            document.getElementById("formMessage").innerText = "Please fill in all required fields.";
            document.getElementById("formMessage").style.color = "red";
            document.getElementById("formMessage").style.display = "block";
            return;
        }
    
        // Simulate form submission success
        document.getElementById("formMessage").innerText = "Message sent successfully!";
        document.getElementById("formMessage").style.color = "green";
        document.getElementById("formMessage").style.display = "block";
    
        // Clear form fields after submission (optional)
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    
        // Hide message after 3 seconds
        setTimeout(() => {
            document.getElementById("formMessage").style.display = "none";
        }, 3000);
    });

    document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for normal links
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
            const navbar = document.getElementById("navbar"); // Scrolls to Navbar
            if (navbar) {
                window.scrollTo({
                    top: navbar.offsetTop - 20,
                    behavior: "smooth"
                });
            }

            // Open the Shop dropdown menu
            const shopDropdown = document.querySelector(".dropdown-menu");
            if (shopDropdown) {
                shopDropdown.classList.add("open"); // Show dropdown
                setTimeout(() => shopDropdown.classList.remove("open"), 3000); // Auto-close after 3s
            }
        });
    });
});

// site map
document.addEventListener("DOMContentLoaded", function () {
    // Handle Site Map links that need to open the Shop dropdown
    document.querySelectorAll(".scroll-and-dropdown").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Stop link behavior

            // Find the dropdown menu
            const dropdown = document.querySelector(".dropdown");
            if (dropdown) {
                dropdown.classList.add("active"); // Open dropdown

                // Close dropdown after 5 seconds
                setTimeout(() => {
                    dropdown.classList.remove("active");
                }, 5000);
            }
        });
    });
});

         


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
