import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Your trusted travel partner providing quality travel services since 2010. We offer comfortable and reliable transportation solutions across Odisha.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/cab-explore">Cab Explore</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <p>
                <FaPhone className="footer-icon" /> <a href="tel:8658696065">8658696065</a><br />
                <FaEnvelope className="footer-icon" /> <a href="mailto:info@a1tourstravels.com">info@a1tourstravels.com</a><br />
                <FaMapMarkerAlt className="footer-icon" /> Khandagiri, Bhubaneswar, Odisha, 752065
              </p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://wa.me/8658696065" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 A1 Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

