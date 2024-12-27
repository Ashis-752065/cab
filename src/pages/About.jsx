import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Learn more about A1 Tour&Travels and our commitment to providing exceptional travel experiences.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Established in 2010, A1 Tour&Travels has been a leading car rental company in the beautiful city of Bhubaneswar for over a decade. We take pride in serving numerous corporate organizations, travel agencies, hotels, embassies, and individuals, making us one of the most trusted travel providers in Odisha.</p>
              <p>Our fleet of well-maintained vehicles is the cornerstone of our service. At A1 Tour&Travels, we value your time and offer flexible scheduling to meet your needs. Our experienced staff is always ready to help you overcome any logistical challenges that may arise during your travels.</p>
              <p>We specialize in car rental services from Bhubaneswar to various destinations across Odisha, offering competitive rates without compromising on quality. As a reputed transport provider, we ensure that all requirements of our valued customers are met through our well-maintained vehicles, trained staff, and optimal use of technology for communication and safety.</p>
            </div>
            <div className="about-images">
              <div className="about-image">
                <img src="./img/odisha-landmarks.png" alt="Odisha Tourism Landmarks" />
              </div>
              <div className="about-image">
                <img src="./img/Driver.png" alt="Car Rental Service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <img src='/img/Well-Maintained.png' className="fas fa-car feature-icon"/>
              <h3>Well-Maintained Fleet</h3>
              <p>Our vehicles are regularly serviced and kept in top condition for your comfort and safety.</p>
            </div>
            <div className="feature-item">
              <img src='/img/Flexible Timing.png' className="fas fa-clock feature-icon"/>
              <h3>Flexible Timings</h3>
              <p>We offer services at your convenience, adapting to your schedule and travel needs.</p>
            </div>
            <div className="feature-item">
              <img src='/img/Extensive Coverage1.png' className="fas fa-map-marked-alt feature-icon"/>
              <h3>Extensive Coverage</h3>
              <p>We provide services to various destinations across Odisha and beyond.</p>
            </div>
            <div className="feature-item">
              <img src='/img/Support.png' className="fas fa-headset feature-icon"/>
              <h3>24/7 Support</h3>
              <p>Our dedicated team is always available to assist you with any queries or concerns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
