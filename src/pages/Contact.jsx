import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      // Prepare WhatsApp message
      const message = `Hello Rajesh Jii !A New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Subject: ${formData.subject}
Message: ${formData.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp API URL (replace with your admin's number)
      const whatsappUrl = `https://wa.me/918280157284?text=${encodedMessage}`;

      // Show success alert
      alert('Your form submitted successfully!');

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <div className="form-container">
          <div className="form-section">
            <form id="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div className="row">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className='contact-btn'>Contact Us</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>ADDRESS</h2>
            <p>Rental Colony, IRC Vilage <br />Bhubaneswar, Odisha,<br /> 751015</p>
            <h2>PHONE</h2>
            <p>+91-8658696065<br />+91-8280157284 <br />8144575719</p>
            <h2>EMAIL</h2>
            <p><a href="info@a1tourstravels.com">info@a1tourstravels.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

