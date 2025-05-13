import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CabExplore.css';

function CabExplore() {
  const [cabType, setCabType] = useState('');
  const [cabCapacity, setCabCapacity] = useState('');
  const [filteredCabs, setFilteredCabs] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const popupRef = useRef(null);

  const cabs = [
    { id: 2, type: 'sedan', capacity: '4', name: 'Economy Sedan', image: '/img/Wagnor.png', price: '₹800/day', features: ['AC', 'Luggage Space', 'GPS Navigation'] },
    { id: 1, type: 'sedan', capacity: '4', name: 'Comfortable Sedan', image: '/img/Dzire_cab.png', price: '₹1200/day', features: ['AC', 'Luggage Space', 'GPS Navigation', 'Bluetooth Audio'] },
    { id: 3, type: 'sedan', capacity: '4', name: 'Luxury Sedan', image: '/img/Etios2.png', price: '₹1300/day', features: ['AC', 'Leather Seats', 'GPS Navigation', 'Premium Sound System'] },
    { id: 4, type: 'sedan', capacity: '4', name: 'Premium Sedan', image: '/img/Verna.png', price: '₹2500/day', features: ['AC', 'Sunroof', 'GPS Navigation', 'Premium Sound System', 'Leather Seats'] },
    { id: 5, type: 'suv', capacity: '6', name: 'Spacious SUV', image: '/img/Crysta1.png', price: '₹1800/day', features: ['AC', 'Ample Luggage Space', 'GPS Navigation', '3rd Row Seating'] },
    { id: 6, type: 'suv', capacity: '6', name: 'Compact SUV', image: '/img/Ertiga1.png', price: '₹1500/day', features: ['AC', 'Luggage Space', 'GPS Navigation', 'Fuel Efficient'] },
    { id: 7, type: 'minivan', capacity: '8', name: 'Luxury Van', image: '/img/alphard.png', price: '₹2800/day', features: ['AC', 'Leather Seats', 'GPS Navigation', 'Premium Sound System', 'Spacious Interior'] },
    { id: 8, type: 'minivan', capacity: '8', name: 'Commercial Van', image: '/img/bolero.png', price: '₹1800/day', features: ['AC', 'Ample Cargo Space', 'Durable Build', 'GPS Navigation'] },
    { id: 9, type: 'minivan', capacity: '13', name: 'Family Minivan', image: '/img/13Traveller.png', price: '₹2500/day', features: ['AC', 'Multiple Seating Configurations', 'GPS Navigation', 'Ample Luggage Space'] },
    { id: 10, type: 'minivan', capacity: '17', name: 'Large Family Minivan', image: '/img/Traveller.png', price: '₹2800/day', features: ['AC', 'Multiple Seating Configurations', 'GPS Navigation', 'Ample Luggage Space', 'Entertainment System'] },
    { id: 11, type: 'minivan', capacity: '26', name: 'Group Travel Minivan', image: '/img/26Traveller.png', price: '₹3500/day', features: ['AC', 'Spacious Seating', 'GPS Navigation', 'Luggage Compartment', 'PA System'] },
  ];

  useEffect(() => {
    filterCabs();
  }, [cabType, cabCapacity]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeCabDetails();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filterCabs = () => {
    let filtered = cabs;
    if (cabType) {
      filtered = filtered.filter(cab => cab.type === cabType);
    }
    if (cabCapacity) {
      filtered = filtered.filter(cab => cab.capacity === cabCapacity);
    }
    setFilteredCabs(filtered);
  };

  const openCabDetails = (cab) => {
    setSelectedCab(cab);
  };

  const closeCabDetails = () => {
    setSelectedCab(null);
  };

  return (
    <div className="ce-cab-explore-page">
      <section className="ce-cab-explore-hero">
        <div className="ce-cab-explore-hero-content">
          <h1>Explore Our Premium Fleet</h1>
          <p>Discover the perfect vehicle for your journey across Odisha</p>
        </div>
      </section>

      <section className="ce-cab-explore-section">
        <div className="ce-container">
          <div className="ce-cab-filters">
            <select value={cabType} onChange={(e) => setCabType(e.target.value)}>
              <option value="">All Types</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="minivan">Minivan</option>
            </select>
            <select value={cabCapacity} onChange={(e) => setCabCapacity(e.target.value)}>
              <option value="">All Capacities</option>
              <option value="4">4 Seater</option>
              <option value="6">6 Seater</option>
              <option value="8">8 Seater</option>
              <option value="13">13 Seater</option>
              <option value="17">17 Seater</option>
              <option value="26">26 Seater</option>
            </select>
          </div>
          <div className="ce-cab-grid">
            {filteredCabs.map(cab => (
              <div key={cab.id} className="ce-cab-card" onClick={() => openCabDetails(cab)}>
                <img src={cab.image} alt={cab.name} className="ce-cab-image" />
                <div className="ce-cab-info">
                  <h3>{cab.name}</h3>
                  <p>{cab.capacity} Seater</p>
                  <p className="ce-cab-price">From {cab.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCab && (
        <div className="ce-cab-details-popup">
          <div className="ce-cab-details-content" ref={popupRef}>
            <button className="ce-close-popup" onClick={closeCabDetails}>&times;</button>
            <h2>{selectedCab.name}</h2>
            <img src={selectedCab.image} alt={selectedCab.name} className="ce-cab-details-image" />
            <p className="ce-cab-details-price">Starting from {selectedCab.price}</p>
            <div className="ce-cab-details-info">
              <h3>Features:</h3>
              <ul>
                {selectedCab.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <Link to="/booking" className="ce-book-now-btn">Book Now</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CabExplore;

