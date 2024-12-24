import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaCar, FaCalendarCheck, FaSmile, FaBus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('one-way');
  const carouselRef = useRef(null);
  const packagesGridRef = useRef(null);
  const fleetsGridRef = useRef(null);

  const carouselItems = [
    {
      title: "Experience Comfortable Travel",
      description: "Discover reliable and luxurious travel solutions across Odisha",
      buttonText: "Book Now",
      buttonLink: "/booking",
      image: "img/Dzire_car.png",
      alt: "Luxury Car"
    },
    {
      title: "Explore Odisha's Wonders",
      description: "Uncover the beauty of India's best-kept secret with our curated packages",
      buttonText: "View Packages",
      buttonLink: "/packages",
      image: "img/crysta.png",
      alt: "Odisha Landmark"
    },
    {
      title: "Group Travel Made Easy",
      description: "Perfect solutions for large groups and events with our spacious fleet",
      buttonText: "Our Cab Explorer",
      buttonLink: "/cab-explore",
      image: "img/Ertiga.png",
      alt: "Group Travel"
    },
    {
      title: "Comfortable Group Travel",
      description: "Spacious and comfortable options for larger groups",
      buttonText: "Book Now",
      buttonLink: "/booking",
      image: "img/Traveller.png",
      alt: "Group Travel"
    }
  ];

  const packages = [
    { name: "Bhubaneswar City Tour", price: "₹2300", image: "img/Bhubaneswar.png" },
    { name: "Puri Beach Getaway", price: "₹1499", image: "img/Puri.png" },
    { name: "Konark Sun Temple Visit", price: "₹1299", image: "img/Konark.png" },
    { name: "Chilika Lake Adventure", price: "₹1799", image: "img/Chilika-Lake.png" },
    { name: "Similipal National Park", price: "₹2499", image: "img/Simlipal-Wildlife-Sanctuary.png" },
    { name: "Gopalpur Beach Retreat", price: "₹1699", image: "img/Gopalpur.png" },
    { name: "Bhitarkanika Mangroves", price: "₹2299", image: "img/Bhitarkanika.png" },
    { name: "Daringbadi Hill Station", price: "₹2099", image: "img/Daringbadi.png" },
    { name: "Udayagiri and Khandagiri Caves", price: "₹1199", image: "img/Khandagiri.png" },
    { name: "Taptapani Hot Springs", price: "₹1899", image: "img/Taptapani.png" }
  ];

  const fleets = [
    { name: "Economy Sedan", seats: "4 Seater", features: "AC | Luggage Space", price: "₹800/day", image: "img/Wagnor.png" },
    { name: "Comfortable Sedan", seats: "4 Seater", features: "AC | Luggage Space", price: "₹1100/day", image: "img/Dzire_car.png" },
    { name: "Spacious SUV", seats: "6 Seater", features: "AC | Ample Luggage Space", price: "₹1800/day", image: "img/crysta.png" },
    { name: "Compact SUV", seats: "6 Seater", features: "AC | Comfortable Ride", price: "₹1300/day", image: "img/Ertiga.png" },
    { name: "Commercial Van", seats: "8 Seater", features: "Commercial Van | Perfect for Groups", price: "₹1800/day", image: "img/bolero.png" },
    { name: "Luxury Van", seats: "8 Seater", features: "Premium Amenities | Perfect for Groups", price: "₹2800/day", image: "img/Toyota-alphard.png" },
    { name: "13 Seater Traveller", seats: "13 Seater", features: "AC | Perfect for Small Groups", price: "₹2500/day", image: "img/Traveller.png" },
    { name: "17 Seater Traveller", seats: "17 Seater", features: "AC | Comfortable for Medium Groups", price: "₹2800/day", image: "img/traveller17.png" },
    { name: "26 Seater Mini Bus", seats: "26 Seater", features: "AC | Ideal for Large Groups", price: "₹3500/day", image: "img/traveller26.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const showSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  const scrollPackages = (direction) => {
    if (packagesGridRef.current) {
      const scrollAmount = packagesGridRef.current.offsetWidth;
      packagesGridRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollFleets = (direction) => {
    if (fleetsGridRef.current) {
      const scrollAmount = fleetsGridRef.current.offsetWidth;
      fleetsGridRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    const travelDate = document.getElementById('travelDate').value;
    const travelTime = document.getElementById('travelTime').value;

    if (!name || !phone || !fromCity || !toCity || !travelDate || !travelTime) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const message = `New Booking:
Name: ${name}
Phone: ${phone}
From: ${fromCity}
To: ${toCity}
Date: ${travelDate}
Time: ${travelTime}
Type: ${activeTab}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918658696065?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home">
      <Navbar />
      <section className="hero-section">
        <div className="carousel">
          <div className="carousel-inner" ref={carouselRef}>
            {carouselItems.map((item, index) => (
              <div className="carousel-item" key={index}>
                <div className="carousel-content">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Link to={item.buttonLink} className="btn btn-primary">{item.buttonText}</Link>
                </div>
                <div className="carousel-image" style={{backgroundImage: `url(${item.image})`}}></div>
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}><FaChevronLeft /></button>
          <button className="carousel-control next" onClick={nextSlide}><FaChevronRight /></button>
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-container">
            <div className="booking-tabs">
              <button className={`tab-btn ${activeTab === 'one-way' ? 'active' : ''}`} onClick={() => setActiveTab('one-way')}>ONE WAY</button>
              <button className={`tab-btn ${activeTab === 'round-trip' ? 'active' : ''}`} onClick={() => setActiveTab('round-trip')}>ROUND TRIP</button>
              <button className={`tab-btn ${activeTab === 'local' ? 'active' : ''}`} onClick={() => setActiveTab('local')}>LOCAL</button>
            </div>
            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select id="fromCity" required>
                  <option value="">From City</option>
                  <option value="bhubaneswar">Bhubaneswar</option>
                  <option value="puri">Puri</option>
                  <option value="cuttack">Cuttack</option>
                </select>
              </div>
              <div className="form-group">
                <select id="toCity" required>
                  <option value="">To City</option>
                  <option value="bhubaneswar">Bhubaneswar</option>
                  <option value="puri">Puri</option>
                  <option value="cuttack">Cuttack</option>
                </select>
              </div>
              <div className="form-group">
                <input type="date" id="travelDate" required />
              </div>
              <div className="form-group">
                <input type="time" id="travelTime" required />
              </div>
              <button type="submit" className="btn btn-secondary">Book Now</button>
              <Link to="/cab-explore" className="btn btn-outline">Our Cab Explore</Link>
              
            </form>
          </div>
        </div>
      </section>

      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Our Popular Packages</h2>
          <div className="packages-container">
            <button className="scroll-btn prev" onClick={() => scrollPackages('left')}>
              <FaChevronLeft />
            </button>
            <button className="scroll-btn next" onClick={() => scrollPackages('right')}>
              <FaChevronRight />
            </button>
            <div className="packages-grid" ref={packagesGridRef}>
              {packages.map((pkg, index) => (
                <div className="package-card" key={index}>
                  <div className="package-image" style={{backgroundImage: `url(${pkg.image})`}}></div>
                  <div className="package-info">
                    <h3>{pkg.name}</h3>
                    <p className="package-price">Starting from {pkg.price}</p>
                    <Link to="/booking" className="btn btn-outline">Book Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fleets-section">
        <div className="container">
          <h2 className="section-title">Our Fleet</h2>
          <div className="fleets-container">
            <button className="scroll-btn prev" onClick={() => scrollFleets('left')}>
              <FaChevronLeft />
            </button>
            <button className="scroll-btn next" onClick={() => scrollFleets('right')}>
              <FaChevronRight />
            </button>
            <div className="fleets-grid" ref={fleetsGridRef}>
              {fleets.map((fleet, index) => (
                <div className="fleet-card" key={index}>
                  <div className="fleet-image" style={{backgroundImage: `url(${fleet.image})`}}></div>
                  <div className="fleet-info">
                    <h3>{fleet.name}</h3>
                    <p>{fleet.seats} | {fleet.features}</p>
                    <p className="fleet-price">Starting from {fleet.price}</p>
                    <Link to="/booking" className="btn btn-outline">Book Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="steps">
              <div className="step">
                <div className="step-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Choose Destination</h3>
                <p>Select your travel destination</p>
              </div>
              <div className="step">
                <div className="step-icon">
                  <FaCar />
                </div>
                <h3>Select Vehicle</h3>
                <p>Choose from our wide range of vehicles</p>
              </div>
              <div className="step">
                <div className="step-icon">
                  <FaCalendarCheck />
                </div>
                <h3>Book Your Trip</h3>
                <p>Confirm your booking details</p>
              </div>
              <div className="step">
                <div className="step-icon">
                  <FaSmile />
                </div>
                <h3>Enjoy Your Ride</h3>
                <p>Have a comfortable and safe journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaBus className="service-icon" />
              <h3>Bus Rental</h3>
              <p>Comfortable buses for group travel</p>
            </div>
            <div className="service-card">
              <FaCar className="service-icon" />
              <h3>Car Rental</h3>
              <p>Wide range of cars for your journey</p>
            </div>
            <div className="service-card">
              <MdTour className="service-icon" />
              <h3>Tour Packages</h3>
              <p>Curated travel experiences</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed-contact">
        <a href="https://wa.me/8658696065" className="whatsapp-btn" aria-label="Contact us on WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:8658696065" className="call-btn" aria-label="Call us">
          <FaPhone />
        </a>
      </div>

      
    </div>
  );
};

export default Home;
