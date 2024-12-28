import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaCar, FaCalendarCheck, FaSmile, FaBus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  // Carousel state and functions
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      title: "Welcome to our platform",
      description: "Experience comfortable and reliable travel solutions",
      image: "img/dzire.png",
      alt: "Bus Service",
      link: "/booking"
    },
    {
      title: "Explore Amazing Tour Packages",
      description: "Discover India's best destinations with us",
      image: "img/Ertiga3.png",
      alt: "Tour Packages",
      link: "/packages"
    },
    {
      title: "Luxury Travel Experience",
      description: "Travel in style and comfort",
      image: "img/crysta.png",
      alt: "Luxury Travel",
      link: "/booking"
    },
    {
      title: "Group Travel Made Easy",
      description: "Perfect solutions for large groups and events",
      image: "img/26Traveller.png",
      alt: "Group Travel",
      link: "/booking"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  // Booking form state and functions
  const [activeTab, setActiveTab] = useState('one-way');
  const [formData, setFormData] = useState({
    fromCity: '',
    toCity: '',
    travelDate: '',
    travelTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const formFields = e.target.elements;
    const formData = {
      name: formFields.name.value,
      phone: formFields.phone.value,
      fromCity: formFields.fromCity.value,
      toCity: formFields.toCity.value,
      travelDate: formFields.travelDate.value,
      travelTime: formFields.travelTime.value
    };

    if (Object.values(formData).every(value => value.trim() !== '')) {
      const message = `Hello, I would like to book a ${activeTab} trip:
Name: ${formData.name}
Phone: ${formData.phone}
From: ${formData.fromCity}
To: ${formData.toCity}
Date: ${formData.travelDate}
Time: ${formData.travelTime}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918658696065?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  // Packages data
  const packages = [
    { name: "Temple City Bhubaneswar Tour", price: "₹2300", image: "img/Bhubaneswar.png" },
    { name: "Puri Jagannath Temple & Sea Beach ", price: "₹1499", image: "img/Puri.png" },
    { name: "Konark Sun Temple & Sunset Visit", price: "₹1299", image: "img/Konark.png" },
    { name: "Chilika Lake Boating Adventure", price: "₹1799", image: "img/Chilika-Lake.png" },
    { name: "Similipal National Park", price: "₹2499", image: "img/Simlipal-Wildlife-Sanctuary.png" },
    { name: "Gopalpur Beach Retreat", price: "₹1699", image: "img/Gopalpur.png" },
    { name: "Bhitarkanika Mangroves", price: "₹2299", image: "img/Bhitarkanika.png" },
    { name: "Daringbadi Hill Station", price: "₹2099", image: "img/Daringbadi.png" },
    { name: "Udayagiri and Khandagiri Caves", price: "₹1199", image: "img/Khandagiri.png" },
    { name: "Taptapani Hot Springs", price: "₹1899", image: "img/Taptapani.png" }
  ];

  // Fleets data
  const fleets = [
    { name: "Economy Sedan", seats: "4 Seater", features: "AC | Luggage Space", price: "₹800/day", image: "img/Wagnor.png" },
    { name: "Comfortable Sedan", seats: "4 Seater", features: "AC | Luggage Space", price: "₹1100/day", image: "img/dzire.png" },
    { name: "Spacious SUV", seats: "6 Seater", features: "AC | Ample Luggage Space", price: "₹1800/day", image: "img/crysta.png" },
    { name: "Compact SUV", seats: "6 Seater", features: "AC | Comfortable Ride", price: "₹1300/day", image: "img/Ertiga3.png" },
    { name: "Commercial Van", seats: "8 Seater", features: "Commercial Van | Perfect for Groups", price: "₹1800/day", image: "img/bolero.png" },
    { name: "Luxury Van", seats: "8 Seater", features: "Premium Amenities | Perfect for Groups", price: "₹2800/day", image: "img/Toyota-alphard.png" },
    { name: "13 Seater Traveller", seats: "13 Seater", features: "AC | Perfect for Small Groups", price: "₹2500/day", image: "img/13Traveller.png" },
    { name: "17 Seater Traveller", seats: "17 Seater", features: "AC | Comfortable for Medium Groups", price: "₹2800/day", image: "img/Traveller.png" },
    { name: "26 Seater Mini Bus", seats: "26 Seater", features: "AC | Ideal for Large Groups", price: "₹3500/day", image: "img/26Traveller.png" }
  ];

  // Refs for horizontal scrolling
  const packagesGridRef = useRef(null);
  const fleetsGridRef = useRef(null);

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth;
      ref.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="home">
      {/* Carousel Section */}
      <Navbar />
      <section className="hero-section">
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-content">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Link to={item.link} className="book-now-btn">Book Now</Link>
                </div>
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}><FaChevronLeft /></button>
          <button className="carousel-control next" onClick={nextSlide}><FaChevronRight /></button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="booking-section">
        <div className="booking-container">
          <div className="booking-tabs">
            <button 
              className={`tab-btn ${activeTab === 'one-way' ? 'active' : ''}`} 
              onClick={() => setActiveTab('one-way')}
            >
              ONE WAY
            </button>
            <button 
              className={`tab-btn ${activeTab === 'round-trip' ? 'active' : ''}`} 
              onClick={() => setActiveTab('round-trip')}
            >
              ROUND TRIP
            </button>
            <button 
              className={`tab-btn ${activeTab === 'local' ? 'active' : ''}`} 
              onClick={() => setActiveTab('local')}
            >
              LOCAL
            </button>
          </div>
          <form className="book-form" onSubmit={submitBooking}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required />
            </div>
            <div className="form-group">
              <input type="text" id="fromCity" name="fromCity" placeholder="Enter Your Pick Up Location" required />
            </div>
            <div className="form-group">
              <input type="text" id="toCity" name="toCity" placeholder="Enter Your Drop Location" required />
            </div>
            <div className="form-group">
              <input 
                type="date" 
                id="travelDate"
                name="travelDate" 
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="time" 
                id="travelTime"
                name="travelTime" 
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="h-submit-btn">Submit</button>
              <Link to="/cab-explore" className="explore-btn">Explore Cabs</Link>
            </div>
          </form>
        </div>
      </section>

      {/* Packages Section */}
      <section className="h-packages-section">
        <h2 className="section-title">Our Popular Packages</h2>
        <div className="packages-container">
          <button className="scroll-btn prev" onClick={() => scrollHorizontally(packagesGridRef, 'left')}>
            <FaChevronLeft />
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn next" onClick={() => scrollHorizontally(packagesGridRef, 'right')}>
          <FaChevronRight />
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="packages-grid" ref={packagesGridRef}>
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <img src={pkg.image} alt={pkg.name} className="package-image" />
                <div className="package-info">
                  <h3>{pkg.name}</h3>
                  <p>Starting from {pkg.price}</p>
                  <Link to="/booking" className="book-now-btn">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleets Section */}
      <section className="fleets-section">
        <h2 className="section-title">Our Fleets</h2>
        <div className="fleets-container">
          <button className="scroll-btn prev" onClick={() => scrollHorizontally(fleetsGridRef, 'left')}>
          <FaChevronLeft />
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn next" onClick={() => scrollHorizontally(fleetsGridRef, 'right')}>
          <FaChevronRight />
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="fleets-grid" ref={fleetsGridRef}>
            {fleets.map((fleet, index) => (
              <div key={index} className="fleet-card">
                <img src={fleet.image} alt={fleet.name} className="fleet-image" />
                <div className="fleet-info">
                  <h3>{fleet.name}</h3>
                  <p>{fleet.seats} | {fleet.features}</p>
                  <p className="fleet-price">Starting from {fleet.price}</p>
                  <Link to="/booking" className="book-now-btn">Book Now</Link>
                </div>
                <div className="fleet-features">
                  <div className="feature-icon">
                    <img src='/img/Santize_cab.png' className="fas fa-spray-can"/>
                  </div>
                  <div className="feature-icon">
                    <img src='\img\Clean_cab.png' className="fas fa-broom"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <h3 className="steps-subtitle">4 Simple Steps to Book Your Car</h3>
          <div className="steps-flow">
            <div className="step-connector"></div>
            <div className="steps">
              <div className="step">
                <div className="step-icon">
                <FaMapMarkerAlt />
                </div>
                <p>Select Destination</p>
              </div>
              <div className="step">
                <div className="step-icon">
                <FaCar />
                </div>
                <p>Choose Your Car</p>
              </div>
              <div className="step">
                <div className="step-icon">
                <FaCalendarCheck />
                </div>
                <p>Make Reservation</p>
              </div>
              <div className="step">
                <div className="step-icon">
                <FaSmile />
                </div>
                <p>Enjoy Your Trip</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Fixed Contact Buttons */}
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

