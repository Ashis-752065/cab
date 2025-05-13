import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="pp-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className='p-content'>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
        </section>

        <section className='p-content'>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your bookings, communicate with you, and to comply with legal obligations.</p>
        </section>

        <section className='p-content'>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>We may share your information with third-party service providers who perform services on our behalf, such as payment processing and data analysis. We may also share information if required by law or to protect our rights.</p>
        </section>

        <section className='p-content'>
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section className='p-content'>
          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.</p>
        </section>

        <section className='p-content'>
          <h2>6. Cookies and Similar Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section className='p-content'>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
        </section>

        <section className='p-content'>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: info@a1tourstravels.com</p>
          <p>Phone: 8658696065</p>
          <p>Phone: 8280157284</p>
          <p>Phone: 7735143796</p>
        </section>

        <div className="related-links">
          <Link to="/tc">Terms & Conditions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

