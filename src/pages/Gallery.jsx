import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { src: "/img/Bhubaneswar.png", alt: "Bhubaneswar", title: "Bhubaneswar", description: "The Temple City of India" },
    { src: "/img/Puri.png", alt: "Puri Beach", title: "Puri Beach", description: "Golden sands and spiritual vibes" },
    { src: "/img/Konark.png", alt: "Konark Sun Temple", title: "Konark Sun Temple", description: "A marvel of ancient architecture" },
    { src: "/img/Chilika-Lake.png", alt: "Chilika Lake", title: "Chilika Lake", description: "Asia's largest brackish water lagoon" },
    { src: "/img/Simlipal-Wildlife-Sanctuary.png", alt: "Similipal National Park", title: "Similipal National Park", description: "Wildlife and natural beauty" },
    { src: "/img/Gopalpur.png", alt: "Gopalpur Beach", title: "Gopalpur Beach", description: "Serene coastal retreat" },
    { src: "/img/Bhitarkanika.png", alt: "Bhitarkanika National Park", title: "Bhitarkanika National Park", description: "Mangrove forests and wildlife" },
    { src: "/img/Khandagiri.png", alt: "Udayagiri Caves", title: "Udayagiri Caves", description: "Ancient rock-cut caves" },
    { src: "/img/Dhauli.png", alt: "Dhauli", title: "Dhauli", description: "Buddhist peace pagoda" },
    { src: "/img/Nandankanan.png", alt: "Nandankanan Zoological Park", title: "Nandankanan Zoological Park", description: "Home to diverse wildlife" },
    { src: "/img/Ratnagiri.png", alt: "Ratnagiri", title: "Ratnagiri", description: "Buddhist archaeological site" },
    { src: "/img/Taptapani.png", alt: "Taptapani", title: "Taptapani", description: "Hot sulphur spring resort" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Travel Gallery</h1>
          <p>Explore the beautiful destinations and experiences we offer through our captivating photo gallery.</p>
        </div>
      </section>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(item)}>
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
          <div className="modal-caption">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

