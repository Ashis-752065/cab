// [V0_FILE]javascriptreact:file="src/App.jsx" isMerged="true"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import CabExplore from './pages/CabExplore';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cab-explore" element={<CabExplore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// [V0_FILE]css:file="src/App.css" isFixed="true" isEdit="true" isQuickEdit="true" isMerged="true"
// /* Global Styles */
// :root {
//   --primary-color: #00acc1;
//   --secondary-color: #e53935;
//   --text-color: #333;
//   --background-color: #f4f4f4;
//   --white: #ffffff;
// }

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   font-family: 'Arial', sans-serif;
//   line-height: 1.6;
//   color: var(--text-color);
//   background-color: var(--background-color);
// }

// .container {
//   width: 90%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// }

// /* Header Styles */
// .header {
//   background-color: var(--white);
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   position: fixed;
//   width: 100%;
//   z-index: 1000;
//   transition: background-color 0.3s ease;
// }

// .header.scrolled {
//   background-color: rgba(255, 255, 255, 0.9);
// }

// .header .container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
// }

// .logo {
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: var(--primary-color);
//   text-decoration: none;
// }

// .nav {
//   display: flex;
// }

// .nav a {
//   color: var(--text-color);
//   text-decoration: none;
//   padding: 10px 15px;
//   transition: color 0.3s ease;
// }

// .nav a:hover {
//   color: var(--primary-color);
// }

// .menu-toggle {
//   display: none;
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// }

// /* Hero Section Styles */
// .hero {
//   background-image: url('/images/hero-bg.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: var(--white);
//   position: relative;
// }

// .hero-title {
//   font-size: 3rem;
//   margin-bottom: 20px;
// }

// .hero-subtitle {
//   font-size: 1.5rem;
//   margin-bottom: 30px;
// }

// .cta-button {
//   display: inline-block;
//   background-color: var(--primary-color);
//   color: var(--white);
//   padding: 12px 30px;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;
// }

// .cta-button:hover {
//   background-color: #2980b9;
// }

// .scroll-down {
//   position: absolute;
//   bottom: 30px;
//   left: 50%;
//   transform: translateX(-50%);
//   color: var(--white);
//   font-size: 2rem;
//   animation: bounce 2s infinite;
// }

// @keyframes bounce {
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-30px);
//   }
//   60% {
//     transform: translateY(-15px);
//   }
// }

// /* Features Section Styles */
// .features {
//   padding: 80px 0;
//   background-color: var(--white);
// }

// .features h2 {
//   text-align: center;
//   margin-bottom: 40px;
// }

// .feature-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
// }

// .feature-item {
//   text-align: center;
//   padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 5px;
//   transition: transform 0.3s ease;
// }

// .feature-item:hover {
//   transform: translateY(-5px);
// }

// .feature-item h3 {
//   margin-bottom: 10px;
// }

// /* About Page Styles */
// .about-hero {
//   background-image: url('/images/about-hero.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
// }

// .about-content {
//   padding: 80px 0;
// }

// .about-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 40px;
//   align-items: center;
// }

// .about-text h2 {
//   margin-bottom: 20px;
// }

// .about-image img {
//   width: 100%;
//   border-radius: 5px;
// }

// /* Services Page Styles */
// .services-hero {
//   background-image: url('/images/services-hero.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
// }

// .services-grid {
//   padding: 80px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
// }

// .service-item {
//   background-color: var(--white);
//   padding: 30px;
//   border-radius: 5px;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
// }

// .service-item:hover {
//   transform: translateY(-5px);
// }

// .service-icon {
//   font-size: 3rem;
//   margin-bottom: 20px;
// }

// /* Gallery Page Styles */
// .gallery-hero {
//   background-image: url('/images/gallery-hero.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
// }

// .gallery-grid {
//   padding: 80px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
// }

// .gallery-item {
//   overflow: hidden;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .gallery-item img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;
// }

// .gallery-item:hover img {
//   transform: scale(1.1);
// }

// .lightbox {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1001;
// }

// .lightbox-content {
//   max-width: 90%;
//   max-height: 90%;
// }

// .lightbox-content img {
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: contain;
// }

// .lightbox button {
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: none;
//   border: none;
//   color: var(--white);
//   font-size: 1.5rem;
//   cursor: pointer;
// }

// /* Packages Page Styles */
// .packages-hero {
//   background-image: url('/images/packages-hero.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
// }

// .packages-grid {
//   padding: 80px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
// }

// .package-item {
//   background-color: var(--white);
//   padding: 30px;
//   border-radius: 5px;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
// }

// .package-item:hover {
//   transform: translateY(-5px);
// }

// .package-price {
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: var(--primary-color);
//   margin: 20px 0;
// }

// .package-features {
//   list-style-type: none;
//   margin-bottom: 20px;
// }

// .package-features li {
//   margin-bottom: 10px;
// }

// .book-now {
//   display: inline-block;
//   background-color: var(--primary-color);
//   color: var(--white);
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;
// }

// .book-now:hover {
//   background-color: #2980b9;
// }

// /* Contact Page Styles */
// .contact-hero {
//   background-image: url('/images/contact-hero.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
// }

// .contact-form {
//   padding: 80px 0;
// }

// form {
//   max-width: 600px;
//   margin: 0 auto;
//   background-color: var(--white);
//   padding: 40px;
//   border-radius: 5px;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
// }

// .form-group {
//   margin-bottom: 20px;
// }

// label {
//   display: block;
//   margin-bottom: 5px;
// }

// input,
// textarea {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// }

// textarea {
//   height: 150px;
// }

// .submit-button {
//   display: inline-block;
//   background-color: var(--primary-color);
//   color: var(--white);
//   padding: 12px 30px;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;
//   border: none;
//   cursor: pointer;
// }

// .submit-button:hover {
//   background-color: #2980b9;
// }

// /* Footer Styles */
// .footer {
//   background-color: var(--secondary-color);
//   color: var(--white);
//   padding: 40px 0;
// }

// .footer-content {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 40px;
// }

// .footer-section h3 {
//   margin-bottom: 20px;
// }

// .footer-section ul {
//   list-style-type: none;
// }

// .footer-section ul li {
//   margin-bottom: 10px;
// }

// .footer-section ul li a {
//   color: var(--white);
//   text-decoration: none;
// }

// .social-icons {
//   display: flex;
//   gap: 10px;
// }

// .social-icons a {
//   color: var(--white);
//   font-size: 1.5rem;
// }

// .footer-bottom {
//   margin-top: 40px;
//   text-align: center;
// }

// /* Responsive Styles */
// @media (max-width: 768px) {
//   .header .container {
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .nav {
//     display: none;
//     width: 100%;
//     flex-direction: column;
//     margin-top: 20px;
//   }

//   .nav.open {
//     display: flex;
//   }

//   .menu-toggle {
//     display: block;
//   }

//   .hero-title {
//     font-size: 2rem;
//   }

//   .hero-subtitle {
//     font-size: 1rem;
//   }

//   .about-grid,
//   .services-grid,
//   .packages-grid {
//     grid-template-columns: 1fr;
//   }

//   .about-image {
//     order: -1;
//   }

//   .lightbox-content {
//     width: 90%;
//   }
// }

// @media (max-width: 480px) {
//   .container {
//     padding: 0 10px;
//   }

//   .hero {
//     height: 70vh;
//   }

//   .feature-grid {
//     grid-template-columns: 1fr;
//   }

//   .gallery-grid {
//     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   }

//   form {
//     padding: 20px;
//   }
// }

// /* Animations */
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// .fade-in {
//   animation: fadeIn 1s ease-in;
// }

// @keyframes slideIn {
//   from {
//     transform: translateY(50px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// .slide-in {
//   animation: slideIn 0.5s ease-out;
// }

// /* Accessibility */
// .sr-only {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// }

// :focus {
//   outline: 2px solid var(--primary-color);
//   outline-offset: 2px;
// }

// /* Print styles */
// @media print {
//   .header,
//   .footer,
//   .cta-button,
//   .book-now,
//   .submit-button {
//     display: none;
//   }

//   body {
//     font-size: 12pt;
//     line-height: 1.5;
//   }

//   h1, h2, h3 {
//     page-break-after: avoid;
//   }

//   img {
//     max-width: 100% !important;
//   }

//   @page {
//     margin: 2cm;
//   }
// }

// [V0_FILE]javascriptreact:file="src/components/Navbar.jsx" isMerged="true"
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [isMenuActive, setIsMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <Link to="/">
//             <img src="/img/a1_tour_logo.png" alt="A1 Tour&Travels Logo" />
//           </Link>
//         </div>
//         <div className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
//           <ul className="nav-links">
//             <li><Link to="/" className="active">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/packages">Packages</Link></li>
//             <li><Link to="/gallery">Gallery</Link></li>
//             <li><Link to="/booking">Book Now</Link></li>
//             <li><Link to="/cab-explore">Explore Cabs</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/contact" className="contact-btn">Contact Us</Link></li>
//           </ul>
//         </div>
//         <div className="nav-toggle" onClick={toggleMenu}>
//           <i className="fas fa-bars"></i>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// [V0_FILE]css:file="src/components/Navbar.css" isMerged="true"
// .navbar {
//   background: rgba(255, 255, 255, 0.95);
//   backdrop-filter: blur(10px);
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
//   transition: all 0.3s ease;
//   border-radius: 30px;
//   margin-top: 15px;
// }

// .nav-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 5%;
// }

// .nav-logo img {
//   height: 25px;
// }

// .nav-links {
//   display: flex;
//   list-style: none;
//   gap: 25px;
// }

// .nav-links a {
//   color: var(--text-color);
//   text-decoration: none;
//   transition: color 0.3s;
//   font-weight: 500;
// }

// .nav-links a:hover, .nav-links a.active {
//   color: var(--primary-color);
// }

// .contact-btn {
//   background: var(--secondary-color);
//   color: var(--white) !important;
//   padding: 8px 20px;
//   border-radius: 4px;
//   transition: background-color 0.3s;
// }

// .contact-btn:hover {
//   background: #c62828;
// }

// .nav-toggle {
//   display: none;
//   font-size: 24px;
//   cursor: pointer;
// }

// @media (max-width: 768px) {
//   .nav-menu {
//     display: none;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: var(--white);
//     box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//   }

//   .nav-menu.active {
//     display: block;
//   }

//   .nav-links {
//     flex-direction: column;
//     padding: 20px;
//   }

//   .nav-toggle {
//     display: block;
//   }
// }

// [V0_FILE]javascriptreact:file="src/pages/Home.jsx" isFixed="true" isEdit="true" isQuickEdit="true" isMerged="true"
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <div className="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item">
//               <div className="carousel-content">
//                 <h1>Welcome to our platform</h1>
//                 <p>Experience comfortable and reliable travel solutions</p>
//                 <Link to="/booking" className="book-now-btn">Book Now</Link>
//               </div>
//               <img src="/img/Dzire 1.png" alt="Bus Service" />
//             </div>
//             {/* Add more carousel items here */}
//           </div>
//           <button className="carousel-control prev">&lt;</button>
//           <button className="carousel-control next">&gt;</button>
//         </div>
//       </section>

//       <section id="booking" className="booking-section">
//         {/* Add booking form here */}
//       </section>

//       <section className="packages-section">
//         <h2 className="section-title">Our Popular Packages</h2>
//         <div className="packages-container">
//           {/* Add package cards here */}
//         </div>
//       </section>

//       <section className="fleets-section">
//         <h2 className="section-title">Our Fleets</h2>
//         <div className="fleets-container">
//           {/* Add fleet cards here */}
//         </div>
//       </section>

//       <section className="how-it-works">
//         <h2 className="section-title">How It Works</h2>
//         {/* Add how it works content here */}
//       </section>

//       <section className="services-section">
//         <div className="container">
//           <h2 className="section-title">Our Services</h2>
//           <div className="services-grid">
//             {/* Add service cards here */}
//           </div>
//         </div>
//       </section>

//       <div className="fixed-contact">
//         <a href="https://wa.me/8658696065" className="whatsapp-btn" aria-label="Contact us on WhatsApp">
//           <i className="fab fa-whatsapp"></i>
//         </a>
//         <a href="tel:8658696065" className="call-btn" aria-label="Call us">
//           <i className="fas fa-phone"></i>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Home;

// [V0_FILE]css:file="src/pages/Home.css" isMerged="true"
// .hero-section {
//   background: linear-gradient(180deg, #73199b, #08d181), url('/img/travel-background.jpg');
//   background-size: cover;
//   background-position: center;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// }

// .carousel {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: relative;
// }

// .carousel-inner {
//   height: 100%;
//   display: flex;
//   transition: transform 0.5s ease-in-out;
// }

// .carousel-item {
//   min-width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 5%;
//   flex-direction: row;
//   text-align: center;
// }

// .carousel-content {
//   color: var(--white);
//   text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//   max-width: 800px;
//   margin-bottom: 20px;
// }

// .carousel-content h1 {
//   font-size: 2.5em;
//   margin-bottom: 20px;
// }

// .carousel-content p {
//   font-size: 1.2em;
//   margin-bottom: 30px;
// }

// .carousel-item img {
//   max-width: 100%;
//   height: auto;
//   object-fit: contain;
//   margin-top: 20px;
// }

// .book-now-btn {
//   background: var(--primary-color);
//   color: var(--white);
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background 0.3s;
//   font-weight: bold;
// }

// .book-now-btn:hover {
//   background: #007c91;
// }

// .carousel-control {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0,0,0,0.5);
//   color: var(--white);
//   padding: 10px 15px;
//   border: none;
//   cursor: pointer;
//   font-size: 18px;
//   transition: background 0.3s;
// }

// .carousel-control:hover {
//   background: rgba(0,0,0,0.7);
// }

// .prev {
//   left: 10px;
// }

// .next {
//   right: 10px;
// }

// /* Add styles for other sections (booking, packages, fleets, etc.) here */

// .fixed-contact {
//   position: fixed;
//   right: 20px;
//   bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   z-index: 1000;
// }

// .whatsapp-btn, .call-btn {
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--white);
//   text-decoration: none;
//   font-size: 24px;
//   transition: transform 0.3s, box-shadow 0.3s;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.2);
// }

// .whatsapp-btn:hover, .call-btn:hover {
//   transform: scale(1.1);
//   box-shadow: 0 4px 15px rgba(0,0,0,0.3);
// }

// .whatsapp-btn {
//   background: #25D366;
// }

// .call-btn {
//   background: var(--secondary-color);
// }

// /* Add responsive styles here */
