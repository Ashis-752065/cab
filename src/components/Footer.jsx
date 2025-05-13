import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaYoutube,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa"
import "./Footer.css"
import { FaX } from "react-icons/fa6"

function Footer() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "", rating: 0, journey: "" })
  const feedbackModalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (feedbackModalRef.current && !feedbackModalRef.current.contains(event.target)) {
        setShowFeedbackForm(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleFeedbackSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(
      `New Feedback:\nName: ${feedback.name}\nEmail: ${feedback.email}\nRating: ${feedback.rating} stars\nJourney: ${feedback.journey}\nMessage: ${feedback.message}`,
    )
    window.open(`https://wa.me/8280157284?text=${whatsappMessage}`, "_blank")
    setShowFeedbackForm(false)
    setFeedback({ name: "", email: "", message: "", rating: 0, journey: "" })
  }

  const handleRatingChange = (rating) => {
    setFeedback((prev) => ({ ...prev, rating }))
  }

  const handleSmoothScroll = (e, target) => {
    e.preventDefault()
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section about">
              <h3>About A1 Tours & Travels</h3>
              <p>
                Your trusted travel partner since 2010, offering comfortable and reliable transportation solutions
                across Odisha. Experience the best of travel with us.
              </p>
              <div className="contact-info">
                <p>
                  <FaPhone /> <a href="tel:8658696065">8658696065</a>
                  <FaPhone /> <a href="tel:8280157284">8280157284</a>
                  <FaPhone /> <a href="tel:7735143796">7735143796</a>
                </p>
                <p>
                  <FaEnvelope /> <a href="mailto:info@a1tourstravels.com">info@a1tourstravels.com</a>
                </p>
                <p>
                  <FaMapMarkerAlt /> Near F32, Rental Colony, IRC Village, Bhubaneswar-751015, Odisha
                </p>
              </div>
            </div>

            <div className="footer-section links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/packages">Tour Packages</Link>
                </li>
                <li>
                  <Link to="/cab-explore"> Cab Services</Link>
                </li>
                <li>
                  <Link to="/contact" >Contact Us</Link>
                </li>
                <li>
                  <Link to="/tc">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/pp">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://wa.me/8280157284" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com/people/A1-Tour-Travels/61576151250766/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/a1_tourandtravels_2010/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@a1tourtravels_2010" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <FaYoutube />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <FaTwitter />
                </a>
              </div>
              <div className="feedback-button">
                <button onClick={() => setShowFeedbackForm(true)}>Share Your Experience</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2010 A1 Tours & Travels. All rights reserved.</p>
        </div>
      </div>
      {showFeedbackForm && (
        <div className="feedback-modal">
          <div className="feedback-content" ref={feedbackModalRef}>
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
                  <FaStar
                    key={star}
                    className={star <= feedback.rating ? "star active" : "star"}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
              <select
                value={feedback.journey}
                onChange={(e) => setFeedback({ ...feedback, journey: e.target.value })}
                required
              >
                <option value="" disabled>
                  How was your journey?
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
              <textarea
                placeholder="Say Something....."
                required
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              ></textarea>
              <div className="feedback-actions">
                <button type="submit">Submit Feedback</button>
                <button type="button" onClick={() => setShowFeedbackForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer

