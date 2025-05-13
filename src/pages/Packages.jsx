import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const packages = [
    {
      id: 1,
      name: "Bhubaneswar Heritage Tour",
      description: "Explore the rich history and culture of Odisha's capital city.",
      price: 2300,
      image: "/img/Bhubaneswar.png",
      content: "Discover the 'Temple City of India' with its exquisite Kalinga architecture. Visit the famous Lingaraj Temple, Nandankanan Zoological Park, and the ancient Udayagiri and Khandagiri Caves.",
      duration: "1 Days",
      highlights: ["Lingaraj Temple", "Nandankanan Zoo", "Udayagiri and Khandagiri Caves"]
    },
    {
      id: 2,
      name: "Puri Beach Retreat",
      description: "Relax on the golden sands of Puri and visit the famous Jagannath Temple.",
      price: 2800,
      image: "/img/Puri.png",
      content: "Experience the spiritual and coastal beauty of Puri. Witness the grand Jagannath Temple, enjoy the sun and sea at Puri Beach, and savor delicious seafood.",
      duration: "1 Days",
      highlights: ["Jagannath Temple", "Puri Beach", "Local Seafood Tasting"]
    },
    {
      id: 3,
      name: "Konark Sun Temple Explorer",
      description: "Marvel at the architectural wonder of the UNESCO World Heritage site.",
      price: 3300,
      image: "/img/Konark.png",
      content: "Witness the magnificent Konark Sun Temple, a 13th-century marvel dedicated to the Sun God. Explore the intricate carvings and learn about its historical significance.",
      duration: "1 Day",
      highlights: ["Konark Sun Temple", "Archaeological Museum", "Chandrabhaga Beach"]
    },
    {
      id: 4,
      name: "Chilika Lake Expedition",
      description: "Experience the beauty of Asia's largest brackish water lagoon.",
      price: 2700,
      image: "/img/Chilika-Lake.png",
      content: "Embark on a journey to Chilika Lake, a paradise for migratory birds and home to Irrawaddy dolphins. Enjoy boat rides, bird watching, and serene landscapes.",
      duration: "1 Days",
      highlights: ["Boat Safari", "Dolphin Spotting", "Kalijai Temple"]
    },
    {
      id: 5,
      name: "Similipal Wildlife Adventure",
      description: "Discover the diverse flora and fauna in one of India's largest tiger reserves.",
      price: 3999,
      image: "/img/Simlipal-Wildlife-Sanctuary.png",
      content: "Explore the lush Similipal National Park, home to tigers, elephants, and numerous bird species. Experience thrilling jeep safaris and nature walks.",
      duration: "1 Days",
      highlights: ["Jeep Safari", "Waterfall Visits", "Tribal Village Tour"]
    },
    {
      id: 6,
      name: "Gopalpur Beach Getaway",
      description: "Enjoy a serene escape to this picturesque beach town on the Bay of Bengal.",
      price: 3999,
      image: "/img/Gopalpur.png",
      content: "Relax at the charming Gopalpur beach, known for its golden sands and beautiful sunsets. Explore the old lighthouse and enjoy water sports activities.",
      duration: "1 Days",
      highlights: ["Beach Relaxation", "Water Sports", "Lighthouse Visit"]
    },
    {
      id: 7,
      name: "Bhitarkanika Mangrove Expedition",
      description: "Explore the rich biodiversity of one of India's largest mangrove ecosystems.",
      price: 4599,
      image: "/img/Bhitarkanika.png",
      content: "Discover the unique ecosystem of Bhitarkanika National Park. Spot saltwater crocodiles, diverse bird species, and explore dense mangrove forests.",
      duration: "2 Days",
      highlights: ["Mangrove Boat Tour", "Crocodile Spotting", "Bird Watching"]
    },
    {
      id: 8,
      name: "Daringbadi Hill Station Retreat",
      description: "Experience the 'Kashmir of Odisha' with its misty hills and coffee plantations.",
      price: 6999,
      image: "/img/Daringbadi.png",
      content: "Enjoy the cool climate of Daringbadi, surrounded by pine forests and waterfalls. Visit coffee plantations and experience the unique tribal culture.",
      duration: "2 Days",
      highlights: ["Pine Forest Walks", "Coffee Plantation Tour", "Tribal Village Visit"]
    }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closePackageDetails();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="odisha-packages-page">
      <section className="odisha-packages-hero">
        <div className="odisha-packages-hero-content">
          <h1>Discover Odisha's Wonders</h1>
          <p>Embark on unforgettable journeys across Odisha's most beautiful destinations</p>
        </div>
      </section>

      <section className="odisha-packages-main">
        <div className="odisha-container">
          <h2 className="odisha-section-title">Our Popular Tour Packages</h2>
          <div className="odisha-packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="odisha-package-card" onClick={() => openPackageDetails(pkg)}>
                <div className="odisha-package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="odisha-package-overlay">
                    <button className="odisha-details-btn">View Details</button>
                  </div>
                </div>
                <div className="odisha-package-info">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <div className="odisha-package-meta">
                    <span className="odisha-package-duration">{pkg.duration}</span>
                    <span className="odisha-package-price">Strating From ₹{pkg.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedPackage && (
        <div className="odisha-package-modal">
          <div className="odisha-package-modal-content" ref={modalRef}>
            <button className="odisha-close-modal" onClick={closePackageDetails}>&times;</button>
            <h2>{selectedPackage.name}</h2>
            <img src={selectedPackage.image} alt={selectedPackage.name} className="odisha-modal-image" />
            <p className="odisha-modal-description">{selectedPackage.content}</p>
            <div className="odisha-modal-details">
              <div className="odisha-modal-duration">
                <strong>Duration:</strong> {selectedPackage.duration}
              </div>
              <div className="odisha-modal-price">
                <strong>Price:</strong> From ₹{selectedPackage.price}
              </div>
            </div>
            <div className="odisha-modal-highlights">
              <h3>Highlights:</h3>
              <ul>
                {selectedPackage.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <Link to="/booking" className="odisha-book-btn">Book Now</Link>
          </div>
        </div>
      )}

      <section className="odisha-features">
        <div className="odisha-container">
          <h2 className="odisha-section-title">Why Choose Our Tour Packages</h2>
          <div className="odisha-features-grid">
            <div className="odisha-feature-item">
              <img src="/img/Expertly Crafted Itineraries.png" alt="Itineraries" className="odisha-feature-icon" />
              <h3>Expertly Crafted Itineraries</h3>
              <p>Our travel experts design each package to showcase the best of Odisha.</p>
            </div>
            <div className="odisha-feature-item">
              <img src="/img/Comfortable Vehicles.png" alt="Vehicles" className="odisha-feature-icon" />
              <h3>Comfortable Transportation</h3>
              <p>Travel in our well-maintained and comfortable fleet of vehicles.</p>
            </div>
            <div className="odisha-feature-item">
              <img src="/img/Experienced Drivers.png" alt="Guides" className="odisha-feature-icon" />
              <h3>Experienced Guides</h3>
              <p>Our knowledgeable guides ensure an enriching and pleasant journey.</p>
            </div>
            <div className="odisha-feature-item">
              <img src="./img/Best Price Guarantee.png" alt="Price Guarantee" className="odisha-feature-icon" />
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
