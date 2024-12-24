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
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a server
      alert('Form submitted successfully!');
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
              <button type="submit">Contact Us</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>ADDRESS</h2>
            <p>Nakagate, Khandagiri, <br />Bhubaneswar, Odisha,<br /> 751030</p>
            <h2>PHONE</h2>
            <p>+91-8658696065<br />+91-8658696065</p>
            <h2>EMAIL</h2>
            <p><a href="mailto:info@example.com">info@example.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

