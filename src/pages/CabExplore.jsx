import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CabExplore.css';

function CabExplore() {
  const [cabType, setCabType] = useState('');
  const [cabCapacity, setCabCapacity] = useState('');
  const [filteredCabs, setFilteredCabs] = useState([]);

  const cabs = [
    { id: 2, type: 'sedan', capacity: '4', name: 'Economy Sedan', image: '/img/Wagnor.png', price: '₹800/day' },
    { id: 1, type: 'sedan', capacity: '4', name: 'Comfortable Sedan', image: '/img/dzire.png', price: '₹1000/day' },
    { id: 3, type: 'seden', capacity: '4', name: 'Luxury Sedan', image: '/img/Etios.png', price: '₹1300/day' },
    { id: 4, type: 'seden', capacity: '4', name: 'Premium Sedan', image: '/img/Verna.png', price: '₹2500/day' },
    { id: 5, type: 'suv', capacity: '6', name: 'Spacious SUV', image: '/img/crysta.png', price: '₹1800/day' },
    { id: 6, type: 'suv', capacity: '6', name: 'Compact SUV', image: '/img/Ertiga3.png', price: '₹1300/day' },
    { id: 7, type: 'minivan', capacity: '8', name: 'Luxury Van', image: '/img/alphard.png', price: '₹2800/day' },
    { id: 8, type: 'minivan', capacity: '8', name: 'Commercial Van', image: '/img/bolero.png', price: '₹1800/day' },
    { id: 9, type: 'minivan', capacity: '13', name: 'Family Minivan', image: '/img/13Traveller.png', price: '₹2500/day' },
    { id: 10, type: 'minivan', capacity: '17', name: 'Family Minivan', image: '/img/Traveller.png', price: '₹2800/day' },
    { id: 11, type: 'minivan', capacity: '26', name: 'Family Minivan', image: '/img/26Traveller.png', price: '₹3500/day' },

  ];

  useEffect(() => {
    filterCabs();
  }, [cabType, cabCapacity]);

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

  return (
    <div className="cab-explore-page">
      <section className="CabExplore-hero">
        <div className="cab-explore-hero-content">
          <h1>Explore Our Cabs</h1>
          <p>Find the perfect vehicle for your journey across Odisha.</p>
        </div>
      </section>

      <section className="cab-explore-section">
        <div className="container">
          <div className="cab-filters">
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
          <div className="cab-grid">
            {filteredCabs.map(cab => (
              <div key={cab.id} className="cab-card">
                <img src={cab.image} alt={cab.name} className="cab-image" />
                <div className="cab-info">
                  <h3>{cab.name}</h3>
                  <p>{cab.capacity} Seater | AC | Luggage Space</p>
                  <p className="cab-price">Starting from {cab.price}</p>
                  <Link to="/booking" className="book-now-btn">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CabExplore;

