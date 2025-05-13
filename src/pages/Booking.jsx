"use client"

import { useState } from "react"
import "./Booking.css"

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromCity: "",
    toCity: "",
    travelDate: "",
    travelTime: "",
    passengers: "",
    carType: "",
    specialRequests: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

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
Special Requests: ${formData.specialRequests}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/918280157284?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    // Show success message
    alert("Booking successful! Our team will contact you as soon as possible.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      fromCity: "",
      toCity: "",
      travelDate: "",
      travelTime: "",
      passengers: "",
      carType: "",
      specialRequests: "",
    })
  }

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
                <option value="rourkela">Rourkela</option>
                <option value="sambalpur">Sambalpur</option>
                <option value="berhampur">Berhampur</option>
                <option value="balasore">Balasore</option>
                <option value="baripada">Baripada</option>
                <option value="jeypore">Jeypore</option>
                <option value="koraput">Koraput</option>
                <option value="rayagada">Rayagada</option>
                <option value="jharsuguda">Jharsuguda</option>
                <option value="angul">Angul</option>
                <option value="dhenkanal">Dhenkanal</option>
                <option value="paradip">Paradip</option>
                <option value="kendrapara">Kendrapara</option>
                <option value="jajpur">Jajpur</option>
                <option value="bhadrak">Bhadrak</option>
                <option value="bargarh">Bargarh</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="toCity">To City</label>
              <select id="toCity" name="toCity" value={formData.toCity} onChange={handleChange} required>
                <option value="">Select To City</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="puri">Puri</option>
                <option value="cuttack">Cuttack</option>
                <option value="rourkela">Rourkela</option>
                <option value="sambalpur">Sambalpur</option>
                <option value="berhampur">Berhampur</option>
                <option value="balasore">Balasore</option>
                <option value="baripada">Baripada</option>
                <option value="jeypore">Jeypore</option>
                <option value="koraput">Koraput</option>
                <option value="rayagada">Rayagada</option>
                <option value="jharsuguda">Jharsuguda</option>
                <option value="angul">Angul</option>
                <option value="dhenkanal">Dhenkanal</option>
                <option value="paradip">Paradip</option>
                <option value="kendrapara">Kendrapara</option>
                <option value="jajpur">Jajpur</option>
                <option value="bhadrak">Bhadrak</option>
                <option value="bargarh">Bargarh</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="travelDate">Travel Date</label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="travelTime">Travel Time</label>
              <input
                type="time"
                id="travelTime"
                name="travelTime"
                value={formData.travelTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="passengers">Number of Passengers</label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                min="1"
                value={formData.passengers}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carType">Preferred Car Type</label>
              <select id="carType" name="carType" value={formData.carType} onChange={handleChange} required>
                <option value="">Select Car Type</option>
                <optgroup label="Sedan">
                  <option value="sedan-swift-dzire">Swift Dzire</option>
                  <option value="sedan-honda-city">Honda City</option>
                  <option value="sedan-hyundai-verna">Hyundai Verna</option>
                  <option value="sedan-toyota-etios">Toyota Etios</option>
                </optgroup>
                <optgroup label="SUV">
                  <option value="suv-toyota-innova-crysta">Toyota Innova Crysta</option>
                  <option value="suv-maruti-suzuki-ertiga">Maruti Suzuki Ertiga</option>
                  <option value="suv-mahindra-bolero">Mahindra Bolero</option>
                  
                </optgroup>
                <optgroup label="Luxury">
                  <option value="luxury-mercedes-benz">Mercedes Benz</option>
                  <option value="luxury-audi-a6">Audi A6</option>
                  <option value="luxury-bmw-5-series">BMW 5 Series</option>
                  <option value="luxury-toyota-camry">Toyota Camry</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="car-preview">
            <h3>Selected Car Preview</h3>
            <div className="car-images">
              {formData.carType.includes("sedan") && (
                <div className="car-card">
                  <img
                    src="/images/sedan.jpg"
                    alt="Sedan"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=Sedan")}
                  />
                  <div className="car-info">
                    <h4>
                      {formData.carType.includes("swift")
                        ? "Swift Dzire"
                        : formData.carType.includes("honda")
                          ? "Honda City"
                          : formData.carType.includes("verna")
                            ? "Hyundai Verna"
                            : formData.carType.includes("etios")
                              ? "Toyota Etios"
                              : "Sedan"}
                    </h4>
                    <p>Comfortable for 4 passengers with luggage</p>
                    <p>AC, Music System, Comfortable Seating</p>
                  </div>
                </div>
              )}
              {formData.carType.includes("suv") && (
                <div className="car-card">
                  <img
                    src="/images/suv.jpg"
                    alt="SUV"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=SUV")}
                  />
                  <div className="car-info">
                    <h4>
                      {formData.carType.includes("innova")
                        ? "Toyota Innova Crysta"
                          : formData.carType.includes("maruti suzuki")
                            ? "Maruti Suzuki Ertiga"
                            : formData.carType.includes("mahinda")
                              ? "Mahindra Bolero"
                              : "SUV"}
                    </h4>
                    <p>Spacious for 6-7 passengers with luggage</p>
                    <p>AC, Music System, Comfortable Seating, Extra Space</p>
                  </div>
                </div>
              )}
              {formData.carType.includes("luxury") && (
                <div className="car-card">
                  <img
                    src="/images/luxury.jpg"
                    alt="Luxury"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=Luxury")}
                  />
                  <div className="car-info">
                    <h4>
                      {formData.carType.includes("mercedes")
                        ? "Mercedes Benz"
                        : formData.carType.includes("audi")
                          ? "Audi A6"
                          : formData.carType.includes("bmw")
                            ? "BMW 5 Series"
                            : formData.carType.includes("camry")
                              ? "Toyota Camry"
                              : "Luxury Car"}
                    </h4>
                    <p>Premium experience for 4 passengers</p>
                    <p>Premium AC, Advanced Music System, Leather Seats, Extra Comfort</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="4"
              value={formData.specialRequests}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* {formData.fromCity && formData.toCity && formData.carType && (
            <div className="fare-estimate">
              <h3>Estimated Fare</h3>
              <div className="fare-details">
                <div className="fare-item">
                  <span>Base Fare:</span>
                  <span>
                    ₹{formData.carType.includes("sedan") ? "15" : formData.carType.includes("suv") ? "25" : "50"} per km
                  </span>
                </div>
                <div className="fare-item">
                  <span>Estimated Distance:</span>
                  <span>
                    {formData.fromCity === formData.toCity
                      ? "0"
                      : (formData.fromCity === "bhubaneswar" && formData.toCity === "puri") ||
                          (formData.fromCity === "puri" && formData.toCity === "bhubaneswar")
                        ? "120"
                        : (formData.fromCity === "bhubaneswar" && formData.toCity === "cuttack") ||
                            (formData.fromCity === "cuttack" && formData.toCity === "bhubaneswar")
                          ? "30"
                          : "100-500"}{" "}
                    km
                  </span>
                </div>
                <div className="fare-item total">
                  <span>Approximate Total:</span>
                  <span>
                    {formData.fromCity === formData.toCity
                      ? "₹0"
                      : (formData.fromCity === "bhubaneswar" && formData.toCity === "puri") ||
                          (formData.fromCity === "puri" && formData.toCity === "bhubaneswar")
                        ? `₹${formData.carType.includes("sedan") ? "720" : formData.carType.includes("suv") ? "900" : "1500"}`
                        : (formData.fromCity === "bhubaneswar" && formData.toCity === "cuttack") ||
                            (formData.fromCity === "cuttack" && formData.toCity === "bhubaneswar")
                          ? `₹${formData.carType.includes("sedan") ? "360" : formData.carType.includes("suv") ? "450" : "750"}`
                          : `₹${formData.carType.includes("sedan") ? "1200-3600" : formData.carType.includes("suv") ? "1500-4500" : "2500-7500"}`}
                  </span>
                </div>
              </div>
              <p className="fare-note">
                * Final fare may vary based on actual distance, waiting time, and additional services
              </p>
            </div>
          )} */}
          <button type="submit" className="submit-btn">
            Book Now
          </button>
        </form>
        {/* <div className="auth-links">
          <Link to="/register">Sign Up</Link>
          <span> | </span>
          <Link to="/login">Sign In</Link>
        </div> */}
      </div>
    </section>
  )
}

export default Booking

