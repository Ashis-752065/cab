import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

function TermsAndConditions() {
  return (
    <div className="terms-and-conditions">
      <div className="tc-container">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className='t-content'>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using A1 Tours & Travels' cab booking services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.</p>
        </section>

        <section className='t-content'>
          <h2>2. Use of Service</h2>
          <p>Our cab booking service is provided "as is" and "as available" basis. A1 Tours & Travels reserves the right to modify, suspend, or discontinue the service at any time without notice.</p>
        </section>

        <section className='t-content'>
          <h2>3. Booking and Cancellation</h2>
          <p>Bookings are subject to availability. Cancellation policies may apply and vary depending on the type of service booked. Please refer to the specific booking terms provided at the time of reservation.</p>
        </section>

        <section className='t-content'>
          <h2>4. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </section>

        <section className='t-content'>
          <h2>5. Limitation of Liability</h2>
          <p>A1 Tours & Travels shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
        </section>

        <section className='t-content'>
          <h2>6. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
        </section>

        <section className='t-content'>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check our Terms periodically for changes.</p>
        </section>

        <section className='t-content'>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>Email: info@a1tourstravels.com</p>
          <p>Phone: 8658696065</p>
          <p>Phone: 8280157284</p>
          <p>Phone: 7735143796</p>
        </section>

        <div className="related-links">
          <Link to="/pp">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;

