import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaCar,
  FaCalendarCheck,
  FaSmile,
  FaBus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa"
import { MdTour } from "react-icons/md"
import Navbar from "../components/Navbar"
import "./Home.css"

const Home = () => {
  // Carousel state and functions
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselItems = [
    {
      title: "Welcome to our platform",
      description: "Experience comfortable and reliable travel solutions",
      image: "img/Dzire_cab.png",
      alt: "Bus Service",
      link: "/booking",
    },
    {
      title: "Explore Amazing Tour Packages",
      description: "Discover India's best destinations with us",
      image: "img/Ertiga1.png",
      alt: "Tour Packages",
      link: "/packages",
    },
    {
      title: "Luxury Travel Experience",
      description: "Travel in style and comfort",
      image: "img/crysta.png",
      alt: "Luxury Travel",
      link: "/booking",
    },
    {
      title: "Group Travel Made Easy",
      description: "Perfect solutions for large groups and events",
      image: "img/26Traveller.png",
      alt: "Group Travel",
      link: "/booking",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  // Booking form state and functions
  const [activeTab, setActiveTab] = useState("one-way")
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    travelDate: "",
    travelTime: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const submitBooking = (e) => {
    e.preventDefault()
    const formFields = e.target.elements
    const formData = {
      name: formFields.name.value,
      phone: formFields.phone.value,
      fromCity: formFields.fromCity.value,
      toCity: formFields.toCity.value,
      travelDate: formFields.travelDate.value,
      travelTime: formFields.travelTime.value,
    }

    if (Object.values(formData).every((value) => value.trim() !== "")) {
      const message = `Hello, I would like to book a ${activeTab} trip:
Name: ${formData.name}
Phone: ${formData.phone}
From: ${formData.fromCity}
To: ${formData.toCity}
Date: ${formData.travelDate}
Time: ${formData.travelTime}`

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/918280157284?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
    } else {
      alert("Please fill in all fields before submitting.")
    }
  }

  // Packages data
  const packages = [
    { name: "Temple City Bhubaneswar Tour", price: "₹2300", image: "img/Bhubaneswar.png" },
    { name: "Puri Jagannath Temple & Sea Beach ", price: "₹2800", image: "img/Puri.png" },
    { name: "Konark Sun Temple & Sunset Visit", price: "₹3300", image: "img/Konark.png" },
    { name: "Chilika Lake Boating Adventure", price: "₹2700", image: "img/Chilika-Lake.png" },
    { name: "Similipal National Park", price: "₹3999", image: "img/Simlipal-Wildlife-Sanctuary.png" },
    { name: "Gopalpur Beach Retreat", price: "₹3999", image: "img/Gopalpur.png" },
    { name: "Bhitarkanika Mangroves", price: "₹4599", image: "img/Bhitarkanika.png" },
    { name: "Daringbadi Hill Station", price: "₹6999", image: "img/Daringbadi.png" },
    { name: "Udayagiri and Khandagiri Caves", price: "₹2200", image: "img/Khandagiri.png" },
    { name: "Taptapani Hot Springs", price: "₹2899", image: "img/Taptapani.png" },
  ]

  // Fleets data
  const fleets = [
    {
      name: "Economy Sedan",
      seats: "4 Seater",
      features: "AC | Luggage Space",
      price: "₹1000/day",
      image: "img/Wagnor.png",
    },
    {
      name: "Comfortable Sedan",
      seats: "4 Seater",
      features: "AC | Luggage Space",
      price: "₹1200/day",
      image: "img/Dzire_cab.png",
    },
    {
      name: "Luxury Sedan",
      seats: "4 Seater",
      features: "AC | Luggage Space",
      price: "₹1300/day",
      image: "img/Etios2.png",
    },
    {
      name: "Premium Sedan",
      seats: "4 Seater",
      features: "AC | Luggage Space",
      price: "₹1400/day",
      image: "img/Verna.png",
    },
    {
      name: "Spacious SUV",
      seats: "6 Seater",
      features: "AC | Ample Luggage Space",
      price: "₹1800/day",
      image: "img/Crysta1.png",
    },
    {
      name: "Compact SUV",
      seats: "6 Seater",
      features: "AC | Comfortable Ride",
      price: "₹1400/day",
      image: "img/Ertiga1.png",
    },
    {
      name: "Commercial Van",
      seats: "8 Seater",
      features: "Commercial Van | Perfect for Groups",
      price: "₹1800/day",
      image: "img/bolero.png",
    },
    
    {
      name: "13 Seater Traveller",
      seats: "13 Seater",
      features: "AC | Perfect for Small Groups",
      price: "₹2500/day",
      image: "img/13Traveller.png",
    },
    {
      name: "17 Seater Traveller",
      seats: "17 Seater",
      features: "AC | Comfortable for Medium Groups",
      price: "₹2800/day",
      image: "img/Traveller.png",
    },
    {
      name: "26 Seater Mini Bus",
      seats: "26 Seater",
      features: "AC | Ideal for Large Groups",
      price: "₹3500/day",
      image: "img/26Traveller.png",
    },
  ]

  // Refs for horizontal scrolling
  const packagesGridRef = useRef(null)
  const fleetsGridRef = useRef(null)

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedFleet, setSelectedFleet] = useState(null)
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "", rating: 0 })

  const packageModalRef = useRef(null)
  const fleetModalRef = useRef(null)
  const feedbackModalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (packageModalRef.current && !packageModalRef.current.contains(event.target)) {
        setSelectedPackage(null)
      }
      if (fleetModalRef.current && !fleetModalRef.current.contains(event.target)) {
        setSelectedFleet(null)
      }
      if (feedbackModalRef.current && !feedbackModalRef.current.contains(event.target)) {
        setShowFeedbackForm(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg)
  }

  const handleFleetClick = (fleet) => {
    setSelectedFleet(fleet)
  }

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const message = `My current location: https://www.google.com/maps?q=${latitude},${longitude}`
          const whatsappUrl = `https://wa.me/918280157284?text=${encodeURIComponent(message)}`
          window.open(whatsappUrl, "_blank")
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to get your location. Please try again.")
        },
      )
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault()
    const message = `New Feedback:
Name: ${feedback.name}
Email: ${feedback.email}
Rating: ${feedback.rating} stars
Message: ${feedback.message}`
    const whatsappUrl = `https://wa.me/918280157284?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowFeedbackForm(false)
    setFeedback({ name: "", email: "", message: "", rating: 0 })
  }

  const handleRatingChange = (rating) => {
    setFeedback((prev) => ({ ...prev, rating }))
  }

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
                  <Link to={item.link} className="book-now-btn">
                    Book Now
                  </Link>
                </div>
                <img src={item.image || "/placeholder.svg"} alt={item.alt} />
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="booking-section">
        <div className="h-booking-container">
          <h1>Book Your Ride Now ...</h1>
          <div className="booking-tabs">
            <button
              className={`tab-btn ${activeTab === "one-way" ? "active" : ""}`}
              onClick={() => setActiveTab("one-way")}
            >
              ONE WAY
            </button>
            <button
              className={`tab-btn ${activeTab === "round-trip" ? "active" : ""}`}
              onClick={() => setActiveTab("round-trip")}
            >
              ROUND TRIP
            </button>
            <button
              className={`tab-btn ${activeTab === "local" ? "active" : ""}`}
              onClick={() => setActiveTab("local")}
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
              <input type="date" id="travelDate" name="travelDate" required />
            </div>
            <div className="form-group">
              <input type="time" id="travelTime" name="travelTime" required />
            </div>
            <div className="form-actions">
              <button type="submit" className="h-submit-btn">
                Submit
              </button>
              <Link to="/cab-explore" className="explore-btn">
                Explore Cabs
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* Packages Section */}
      <section className="h-package-section">
        <h2 className="section-title">Our Popular Packages</h2>
        <div className="package-container">
          <button className="scroll-btn prev" onClick={() => scrollHorizontally(packagesGridRef, "left")}>
            <FaChevronLeft />
          </button>
          <button className="scroll-btn next" onClick={() => scrollHorizontally(packagesGridRef, "right")}>
            <FaChevronRight />
          </button>
          <div className="package-grid" ref={packagesGridRef}>
            {packages.map((pkg, index) => (
              <div key={index} className="package-card" onClick={() => handlePackageClick(pkg)}>
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="package-image" />
                <div className="package-info">
                  <h3>{pkg.name}</h3>
                  <p>Starting from {pkg.price}</p>
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
          <button className="scroll-btn prev" onClick={() => scrollHorizontally(fleetsGridRef, "left")}>
            <FaChevronLeft />
          </button>
          <button className="scroll-btn next" onClick={() => scrollHorizontally(fleetsGridRef, "right")}>
            <FaChevronRight />
          </button>
          <div className="fleets-grid" ref={fleetsGridRef}>
            {fleets.map((fleet, index) => (
              <div key={index} className="fleet-card" onClick={() => handleFleetClick(fleet)}>
                <img src={fleet.image || "/placeholder.svg"} alt={fleet.name} className="fleet-image" />
                <div className="fleet-info">
                  <h3>{fleet.name}</h3>
                  <p>
                    {fleet.seats} | {fleet.features}
                  </p>
                  <p className="fleet-price">Starting from {fleet.price}</p>
                </div>
                <div className="fleet-features">
                  <div className="h-feature-icon">
                    <img src="/img/clean-cab-icon.png" alt="Clean cab" className="fleet-features-icon" />
                  </div>
                  <div className="h-feature-icon">
                    <img src="/img/sanitized-icon.png" alt="Sanitized" className="fleet-features-icon"/>
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
              <div className="step" onClick={handleShareLocation}>
                <div className="step-icon">
                  <FaMapMarkerAlt />
                </div>
                <p>Select Destination</p>
              </div>
              <Link to={"/cab-explore"} className="step">
                <div className="step-icon">
                  <FaCar />
                </div>
                <p>Choose Your Car</p>
              </Link>
              <Link to={"/booking"} className="step">
                <div className="step-icon">
                  <FaCalendarCheck />
                </div>
                <p>Make Reservation</p>
              </Link>
              <div className="step" onClick={() => setShowFeedbackForm(true)}>
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
        <a href="https://wa.me/8280157284" className="whatsapp-btn" aria-label="Contact us on WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:8658696065" className="call-btn" aria-label="Call us">
          <FaPhone />
        </a>
      </div>

      {/* Package Modal */}
      {selectedPackage && (
        <div className="modal-overlay">
          <div className="modal-content" ref={packageModalRef}>
            <button className="close-modal" onClick={() => setSelectedPackage(null)}>
              <FaTimes />
            </button>
            <img src={selectedPackage.image || "/placeholder.svg"} alt={selectedPackage.name} className="modal-image" />
            <h2>{selectedPackage.name}</h2>
            <p className="modal-price">Price: {selectedPackage.price}</p>
            <p className="modal-description">
              Experience the beauty of {selectedPackage.name}. This package includes transportation, guided tours, and
              accommodation.
            </p>
            <Link to="/booking" className="book-now-btn">
              Book Now
            </Link>
          </div>
        </div>
      )}

      {/* Fleet Modal */}
      {selectedFleet && (
        <div className="modal-overlay">
          <div className="modal-content" ref={fleetModalRef}>
            <button className="close-modal" onClick={() => setSelectedFleet(null)}>
              <FaTimes />
            </button>
            <img src={selectedFleet.image || "/placeholder.svg"} alt={selectedFleet.name} className="modal-image" />
            <h2>{selectedFleet.name}</h2>
            <p className="modal-price">Price: {selectedFleet.price}</p>
            <p>
              {selectedFleet.seats} | {selectedFleet.features}
            </p>
            <ul className="fleet-features-list">
              <li>Air Conditioning</li>
              <li>GPS Navigation</li>
              <li>24/7 Road Assistance</li>
              <li>Sanitized Interior</li>
            </ul>
            <Link to="/booking" className="book-now-btn">
              Book Now
            </Link>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackForm && (
        <div className="modal-overlay">
          <div className="modal-content feedback-modal" ref={feedbackModalRef}>
            <button className="close-modal" onClick={() => setShowFeedbackForm(false)}>
              <FaTimes />
            </button>
            <h2>We Value Your Feedback</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={feedback.name}
                onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={feedback.email}
                onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
              />
              <div className="rating">
                <p>Rate your experience:</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= feedback.rating ? "star active" : "star"}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <textarea
                placeholder="Your Feedback"
                required
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              ></textarea>
              <button type="submit" className="submit-feedback-btn">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

