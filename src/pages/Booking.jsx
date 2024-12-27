import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromCity: '',
    toCity: '',
    travelDate: '',
    travelTime: '',
    passengers: '',
    carType: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to admin's WhatsApp
    const message = `New Booking:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
From: ${formData.fromCity}
To: ${formData.toCity}
Date: ${formData.travelDate}
Time: ${formData.travelTime}
Passengers: ${formData.passengers}
Car Type: ${formData.carType}
Special Requests: ${formData.specialRequests}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918658696065?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    alert('Booking successful! Our team will contact you as soon as possible.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      fromCity: '',
      toCity: '',
      travelDate: '',
      travelTime: '',
      passengers: '',
      carType: '',
      specialRequests: ''
    });
  };

  return (
    <section className="booking-page">
      <div className="container">
        <h1 className="section-title">Book Your Trip</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fromCity">From City</label>
              <select id="fromCity" name="fromCity" value={formData.fromCity} onChange={handleChange} required>
                <option value="">Select From City</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="puri">Puri</option>
                <option value="cuttack">Cuttack</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="toCity">To City</label>
              <select id="toCity" name="toCity" value={formData.toCity} onChange={handleChange} required>
                <option value="">Select To City</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="puri">Puri</option>
                <option value="cuttack">Cuttack</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="travelDate">Travel Date</label>
              <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="travelTime">Travel Time</label>
              <input type="time" id="travelTime" name="travelTime" value={formData.travelTime} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="passengers">Number of Passengers</label>
              <input type="number" id="passengers" name="passengers" min="1" value={formData.passengers} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="carType">Preferred Car Type</label>
              <select id="carType" name="carType" value={formData.carType} onChange={handleChange} required>
                <option value="">Select Car Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea id="specialRequests" name="specialRequests" rows="4" value={formData.specialRequests} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-btn">Book Now</button>
        </form>
        <div className="auth-links">
          <Link to="/register">Sign Up</Link>
          <span> | </span>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </section>
  );
}

export default Booking;

