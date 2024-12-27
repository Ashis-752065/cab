import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

function Packages() {
  const packages = [
    {
      id: 1,
      name: "Bhubaneswar Local Visit",
      description: "Explore the rich history and culture of Odisha's capital city.",
      price: 999,
      image: "/img/Bhubaneswar.png"
    },
    {
      id: 2,
      name: "Puri Beach Tour",
      description: "Relax on the golden sands of Puri and visit the famous Jagannath Temple.",
      price: 1499,
      image: "/img/Puri.png"
    },
    {
      id: 3,
      name: "Konark Sun Temple Visit",
      description: "Marvel at the architectural wonder of the UNESCO World Heritage site.",
      price: 1299,
      image: "/img/Konark.png"
    },
    {
      id: 4,
      name: "Chilika Lake Tour",
      description: "Experience the beauty of Asia's largest brackish water lagoon.",
      price: 1799,
      image: "/img/Chilika-Lake.png"
    },
    {
      id: 5,
      name: "Similipal National Park",
      description: "Discover the diverse wildlife in one of India's largest tiger reserves.",
      price: 2499,
      image: "/img/Simlipal-Wildlife-Sanctuary.png"
    },
    {
      id: 6,
      name: "Gopalpur Beach Getaway",
      description: "Enjoy a serene escape to this picturesque beach town on the Bay of Bengal.",
      price: 1699,
      image: "/img/Gopalpur.png"
    },
    {
      id: 7,
      name: "Bhitarkanika Mangroves",
      description: "Explore the rich biodiversity of one of India's largest mangrove ecosystems.",
      price: 2299,
      image: "/img/Bhitarkanika.png"
    }
  ];

  return (
    <div className="packages-page">
      <section className="package-hero">
        <div className="hero-content">
          <h1>Discover Odisha's Wonders</h1>
          <p>Explore our curated travel packages and embark on unforgettable journeys across Odisha's most beautiful destinations.</p>
        </div>
      </section>

      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Our Popular Cab Packages</h2>
          <div className="package-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="package-overlay">
                    <Link to="/booking" className="book-now-btn">Book Now</Link>
                  </div>
                </div>
                <div className="package-info">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <div className="package-price">Starting from ₹{pkg.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Cab Packages</h2>
          <div className="features-grid">
            <div className="feature-item">
              <img src="/img/Expertly Crafted Itineraries.png" alt="Company Logo" className="feature-logo" />
              <h3>Expertly Crafted Itineraries</h3>
              <p>Our travel experts design each package to showcase the best of Odisha.</p>
            </div>
            <div className="feature-item">
              <img src="/img/Comfortable Vehicles.png" alt="Company Logo" className="feature-logo" />
              <h3>Comfortable Vehicles</h3>
              <p>Travel in our well-maintained and comfortable fleet of cars.</p>
            </div>
            <div className="feature-item">
              <img src="/img/Experienced Drivers.png" alt="Company Logo" className="feature-logo" />
              <h3>Experienced Drivers</h3>
              <p>Our knowledgeable drivers ensure a safe and pleasant journey.</p>
            </div>
            <div className="feature-item">
              <img src="/img/Best Price Guarantee.png" alt="Company Logo" className="feature-logo" />
              <h3>Best Price Guarantee</h3>
              <p>We offer competitive prices without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;

