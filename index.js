
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cabin:ital,wght@0,400..700;1,400..700&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Outfit&family=Overpass:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Young+Serif&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cabin:ital,wght@0,400..700;1,400..700&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Outfit&family=Overpass:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Young+Serif&display=swap');

/* Reset Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global Styles */
body {
    font-family: cabin;
    line-height: 1.6;
    color: black;
    background-color: #fff;
}

/* Remove list styles */
ul {
    list-style: none;
    
}

/* Remove link underline */
a {
    text-decoration: none;
}


/* Navbar - Ensure Everything Stays in One Row */
.navbar {
    display: flex;
    justify-content: space-between; /* Spread items horizontally */
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    height: 13vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Navbar Left Section (Logo + Visitor Counter) */
.nav-left {
    display: flex;
    align-items: center;
    gap: 15px; /* Space between logo and visitor counter */
}

/* Visitor Counter */
.visitor-counter {
    font-size: 10px;
    background-color: #dcd9d8;
    color: black;
    padding: 10px;
    height: 40px;
    border-radius: 5px;
}

/* Logo */
.logo {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #EC5C39;
    font-family: cabin;
}

/* Navbar Links */
.nav-links {
    list-style: none;
    display: flex;
    font-family: cabin;
    gap: 2vh;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #ff5722;
}

/* Mobile Menu Toggle (Hamburger Icon) */
.menu-toggle {
    display: none;
    font-size: 24px;
    color: black;
    cursor: pointer;
}

/* Responsive Navbar - Keep Everything in One Line */
@media (max-width: 768px) {
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .nav-left {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .menu-toggle {
        display: flex; /* Show hamburger icon */
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: white;
        text-align: center;
        padding: 10px 0;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        padding: 10px 0;
    }
}




/* Dropdown menu */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1500px;
    height: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* margin-left: 570px; */
}

.dropdown-menu li a {
    padding: 10px 15px;
    display: block;
    color: black;
    margin-left: 20px;
    
}

.dropdown-menu li a:hover {
    background: #ddd;
}

/* Show dropdown when active */
.dropdown.active .dropdown-menu {
    display: block;
}

/* Show Dropdown on Hover */
.dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
}
/* Popup Styles */
.popup {
    display: flex !important;  /* Ensure it's displayed */
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important; /* Force Full Width */
    height: 100vh !important; /* Force Full Height */
    background: rgba(0, 0, 0, 0.8) !important;
    justify-content: center !important;
    align-items: center !important;
    z-index: 10000 !important;
}

/* Centering Content Inside Popup */
.popup-content {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 20px; /* Space between image and text */
}


/* Popup Image */
.popup-content img {
    width: 50%; /* Takes half the popup width */
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

/* Popup Text Description */
.popup-text {
    width: 50%; /* Takes the remaining half */
    padding: 20px;
    font-size: 1.2rem;
    color: black;
}

.popup-content img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Star Ratings */
.popup-stars {
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
    color: gold;
    
}

.popup-stars,
.gallery-stars {
    text-align: left; /* Aligns the stars to the left */
    margin-left: -420px; /* Moves the stars slightly to the left */
}

.star {
    padding: 2px;
}

/* Close Button */
.popup .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    border: none;
    z-index: 1000;
}

/* Ensure .popup-content does not apply hover effects globally */
.popup-content:hover {
    transform: none !important;
    box-shadow: none !important;
}

/* Navigation Buttons */
.popup-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 999999; /* Increase the value */
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
}

#popup-prev {
    left: 20px;
}

#popup-next {
    right: 20px;
}



/* Gallery Popup Styles */
.gallery-popup {
    display: flex ;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    background: rgba(0, 0, 0, 0.8); /* Dark overlay */
    justify-content: center;
    align-items: center;
    z-index: 10000; /* Ensure it appears above everything */
    padding: 20px;
}


/* Gallery Content Layout */
.gallery-content {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 20px;
}


/* Gallery Image */
.gallery-content img {
    width: 50%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

/* Gallery Text Description */
.gallery-text {
    width: 50%;
    padding: 20px;
    font-size: 1.2rem;
    color: black;
}

.gallery-content img:hover {
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Adds a shadow for depth */
}

.gallery-stars {
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
    color: gold;
}

.star {
    padding: 2px;
}


/* Ensure Close Button is on top and not affected */
.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    border: none;
    z-index: 1000; /* Makes sure it stays on top */
}

/* Ensure .gallery-content does not apply hover effects globally */
.gallery-content:hover {
    transform: none !important;
    box-shadow: none !important;
}



/* Navigation Buttons */
.gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 999999;
}

#gallery-prev {
    left: -40px;
}

#gallery-next {
    right: -40px;
}




/* Overlay (optional, if you want a slight background blur) */
.gallery-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
}



/* Hero Section */
.hero-section {
    position: relative;
    width: 100%;
    height: 95vh;
    display: flex;
    align-items:center;
    justify-content:left;
    text-align: center;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.hero-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
/* 
.hero-text {

    padding: 20px;
    display: flex;
    flex-direction: column;
  
    margin-left: 100px;
} */

.hero-text {
    position: absolute;
    top: 50%;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
}
.hero-text h1 {
    font-size: 9rem;
    /* margin-bottom: 10px; */
    margin-top: 30px;
    /* margin-right: 100px; */
    font-family: cabin;
    font-weight: 200;
}

/* Typing Animation Text */
.hero-text h3 {
    font-size: 1.8rem; /* Make it slightly smaller than H1 */
    font-weight: 500;
    display: inline-block;
    margin-top: 5px;
    white-space: nowrap; /* Prevents breaking */
}

/* Ensuring `.multiple-text` aligns properly */
.multiple-text {
    display: inline-block;
    vertical-align: middle;
}
/* .hero-text p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    margin-right: 250px;
    font-weight:lighter;
    font-family: cabin;
    
} */

.btn {
    display: block;
    padding: 20px 30px;
    background-color: #EC5C39;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight:100;
    font-family: cabin;
    border-radius: 10px;
    transition: 0.3s;
    width: 20vh;
    height: 8vh;
    margin-top: 130px;
    margin: auto;

}

.btn:hover {
    background-color:#952f10 ;
}

/* Responsive Design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        text-align: center;
    }

    .nav-links {
        flex-direction: column;
        padding: 10px 0;
    }

    .nav-links li {
        margin: 10px 0;
    }

    /* RESPONSIVE DESIGN FOR HERO SECTION */
@media (max-width: 1024px) {
    .hero-text h1 {
        font-size: 3rem; /* Reduce size for tablets */
    }

    .hero-text h3 {
        font-size: 1.5rem;
    }

    .btn {
        font-size: 1rem;
        padding: 10px 20px;
    }
}

@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 2.5rem; /* Reduce size for smaller tablets */
    }

    .hero-text h3 {
        font-size: 1.3rem;
    }

    .btn {
        font-size: 1rem;
        padding: 10px 18px;
    }
}

@media (max-width: 480px) {
    .hero-section {
        height: 80vh; /* Reduce height for small screens */
    }

    .hero-text h1 {
        font-size: 2rem; /* Adjust for mobile */
    }

    .hero-text h3 {
        font-size: 1.2rem;
    }

    .btn {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}
}






.about-us {
    background-color: #F4F4F3;
    /* position: absolute; */
    width: 100%;
    height: 75vh;
    /* display: flex; */
    /* align-items:center; */
    /* justify-content:left; */
    /* text-align: center; */
    color: black;
    overflow: hidden;
}
.about-container{
    /* display: flex; */
    /* flex-direction: column; */
    padding: 100px;
    text-align: center;
}
.about-text h2 {
    margin-bottom: 5vh;
    font-family: cabin;
    font-size: 3rem;
    font-weight:bold;
}
.about-text p {
    margin-top: 10vh;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
}

.bestsellers {
    background-color: white;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    /* display: flex; */
    /* align-items:center; */
    /* justify-content:left; */
    /* text-align: center; */
    color: black;
    overflow: hidden;
}
.bs-container{
    /* display: flex; */
    /* flex-direction: column; */
    padding: 100px;
    text-align: center;
}
.bs-text h2 {
    margin-bottom: 5vh;
    font-family: cabin;
    font-size: 3rem;
    font-weight:bold;
}
.bs-text p {
    margin-top: 5vh;
    font-family: Raleway;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
}
.bs-image {
    display: flex;
    justify-content: center; /* Center images */
    gap: 20px;
    flex-wrap: wrap; /* Allow images to wrap to the next line if needed */
    margin-bottom: 50px;
}

.bs-image img {
    width: 30%; /* Adjust width to fit 3 images */
    max-height: 60vh;
    object-fit: cover;
}
.bs-btn {
  
        background-color:#EC5C39;
        color: white;
        padding: 20px 45px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        font-family: cabin;
        cursor: pointer;
        width: 18vh; /* Only as wide as needed */
        text-align: left; /* Align text to the left */
        /* margin-top: 50px; */
}
.bs-btn:hover {
    background-color: #952f10;
}


/* Gallery Section */
.gallery {
    text-align: center;
    padding: 50px 0;
    background-color: #f9f9f9;
    height:100vh;
}

.gallery h2 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 50px;
}

/* Carousel Wrapper */
.carousel {
    position: relative;
    max-width: 80%;
    margin: auto;
    overflow: hidden; /* Hides extra images */
}

/* Track that holds images */
.carousel-images {
    display: flex;
    gap: 50px; /* Adds space between images */
    transition: transform 0.5s ease-in-out;
    /* width: 200%; Ensure smooth scroll */
}

/* Each Image */
.carousel img {
    width: calc(100% / 3.2); /* Show 3 full images + part of the next */
    flex: 0 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
}

/* Hover Effect - Make Images Pop */
.carousel img:hover {
    transform: scale(1.08);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

/* Arrow Buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    z-index: 999999;
}

.prev { left: 10px; }
.next { right: 10px; }

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
    .carousel img {
        width: calc(100% / 2.5); /* Show 2 images instead of 3 on mobile */
    }
}

@media (max-width: 480px) {
    .carousel img {
        width: calc(100% / 1.2); /* Show 1 image at a time on very small screens */
    }
}

/* Testimonials Section */
.testimonials {
    background-color: #F4F4F3;
    padding: 60px 20px;
    text-align: center;
}

/* Testimonials Container */
.test-container {
    /* max-width: 900px; */
    padding: 20px 50px ;
    height: 80vh;
    margin: 0 auto;
   margin-left: 50px;
}

/* Section Title */
.test-text h2 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
}



.test-text p {
    white-space: nowrap;  /* Prevents text from wrapping */
    display: inline-block;
    font-size: 1.2rem;  /* Adjust size as needed */
    animation: scrollText 10s linear infinite;
    font-weight: 500;
    font-family: Raleway;
    margin-bottom: 50px;
    margin-top: 10px;
}

.test-text {
    width: 100%;
    overflow: hidden;
    white-space: nowrap; /* Ensures text stays in one line */
    position: relative;
    /* background: linear-gradient(to right, rgba(255, 255, 255, 0),   rgba(255, 255, 255, 0)); Creates a fading effect at edges */
}

.scrolling-text-wrapper {
    display: flex;
    gap: 200px; /* Adjust the gap between the repeated quotes */
    animation: scrollText 10s linear infinite;
    width: max-content;
}

@keyframes scrollText {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

.scrolling-text {
    display: inline-block;
    /* font-size: 5px; Adjust size as needed */
    opacity: 0.8; 


}

/* 
.test-text p {
    font-size: 1.8rem;
    margin-bottom: 12vh;
} */
/* Quote Styling */
.test-text1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    position: relative;
}

/* First Quote - Aligned Left */
.test2 {
    max-width: 50%;
    text-align: left;
}

/* Second Quote - Zig-zag Effect */
.test3 {
    max-width: 50%;
    text-align: left;
    position: relative;
    left: 490px; /* Moves it slightly to the right */
}

/* Quote Source */
.test2 p,
.test3 p {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: Raleway;
    color: #EC5C39; /* Orangey-red */
    margin-bottom: 25px;
}

/* Quote Text */
.test2 h3,
.test3 h3 {
    font-size: 2rem;
    font-weight: normal;
    color: black;
    line-height: 1.4;
}

/* Contact Section Layout */
.contact-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align items at the top */
    padding: 100px;
    background-color: black;
    color:white;
    height: 75vh;
}

/* Left Side (Text) */
.contact-info {
    flex: 1;
    padding-right: 50px;
}

.contact-info h2 {
    font-family: cabin;
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 20px;
    color: #EC5C39;
}

.contact-info p {
    font-family: Raleway;
    font-size: 18px;
    line-height: 1.6;
}

/* Right Side (Form) */
.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    
}

/* Form Labels */
.contact-form label {
    font-family: cabin;
    font-size: 18px;
    margin-bottom: 8px;
}

/* Required Text in Light Grey */
.required {
    color: #b0b0b0; /* Light grey color */
    font-size: 14px;
}

/* Input and Textarea Styles */
.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: cabin;
}

/* Textarea Resizing */
.contact-form textarea {
    resize: none; /* Prevent resizing */
    height: 150px; /* Fixed height */
}

/* Submit Button (Left Aligned) */
.submit-btn {
    background-color:#EC5C39;
    color: white;
    padding: 15px 45px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-family: cabin;
    cursor: pointer;
    width: 18vh; /* Only as wide as needed */
    text-align: left; /* Align text to the left */
    margin-top: 10px;
}

/* Hover Effect on Button */
.submit-btn:hover {
    background-color: #952f10;
}


/* end Section */
.end-section {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items:center;
    justify-content:left;
    text-align: center;
    color: white;
    overflow: hidden;
}

.end-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(80%);
}

.end-text {
    /* background: rgba(0, 0, 0, 0.5); */
    /* padding: 20px; */
    text-align: left;
    /* border-radius: 10px; */
    margin-left: 80px;
}

.end-text h3 {
    font-size: 3rem;
    /* margin-bottom: 10px; */
    margin-top: 30px;
    /* margin-right: 100px; */
    font-family: cabin;
    font-weight: 200;
}



.end-btn {
    display: flex;
    padding: 20px 30px;
    background-color:#EC5C39;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight:100;
    font-family: cabin;
    border-radius: 10px;
    transition: 0.3s;
    width: 20vh;
    height: 8vh;
    margin-top: 50px;
    margin-left: 8px;

}

.end-btn:hover {
    background-color:#952f10 ;
}


/* Responsive Layout for Smaller Screens */
@media (max-width: 768px) {
    .contact-section {
        flex-direction: column; /* Stack on small screens */
    }

    .contact-info {
        padding-right: 0; /* Remove right padding */
        margin-bottom: 40px; /* Add space between text and form */
    }
}

/* Footer Section */
.footer {
    background-color: white;
    padding: 40px 100px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    height: 35vh;
}

.footer-column {
    flex: 1;
    text-align: center;
    margin-top: 50px;
}

.footer-column h3 {
    font-size: 2rem;
    font-family: cabin;
    font-weight: 200;
    margin-bottom: 30px;
}

.footer-column p {
    font-size: 1.2rem;
    font-family: Raleway;
    font-weight: 400;
    color:black;
}

.contact-link {
    color: #EC5C39 !important; /* A nice blue color like a link */
    text-decoration: underline;
    cursor: pointer; /* Makes it feel like a link */
    
}

/* Social Media Icons */
.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;  /* Circle size */
    height: 40px; /* Circle size */
    border-radius: 50%; /* Makes it a circle */
    background-color: black; /* Circle background */
    color: white; /* Icon color */
    font-size: 24px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    position: relative;
}

/* Hover Effect: Moves the icon inside the circle */
.social-icons a:hover {
    background-color: #952f10; /* Darker shade on hover */
    transform: translateY(-5px); /* Moves the circle up */
}

.social-icons a i {
    transition: transform 0.3s ease;
}

/* Moves the icon slightly within the circle */
.social-icons a:hover i {
    transform: rotate(15deg); /* Rotates the icon slightly */
}


/* Scrolling Ticker Styling */
.ticker-container {
    width: 100%;
    background-color:#d25731;
    overflow: hidden;
    white-space: nowrap;
    position:fixed;
    bottom: 0;
    left: 0;
    color: white;
    /* padding: 10px 0; */
}

.ticker {
    display: flex;
    width: 200%;
    animation: ticker-scroll 20s linear infinite;
    /* padding-left: 50%; */
     /* gap: 30px;  */
}
#ticker-text {
    letter-spacing: 1px; /* Slightly increase letter spacing */
    margin-right: 50px; /* Add spacing between repeated text */
}

@keyframes ticker-scroll {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
}

/* Site Map Section */
.site-map-section {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.site-map-section h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.site-map-list {
    list-style: none;
    padding: 0;
}

.site-map-list li {
    margin: 10px 0;
    font-size: 18px;
}

.site-map-list a {
    color: #007bff;
    text-decoration: none;
    transition: 0.3s;
}

.site-map-list a:hover {
    text-decoration: underline;
    color: #0056b3;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }
}
/* Make Hero Section Responsive */
@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 24px;
    }

    .hero-text p {
        font-size: 16px;
    }

    .btn {
        padding: 8px 16px;
    }
}

/* Adjust Footer Layout */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        text-align: center;
    }
}
