import React from 'react';
import './Contact.css';
import Title from '../Title/Title'; // Adjust path if needed

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        {/* Section Title */}
        <Title 
          subtitle="Get in Touch" 
          title="Visit Our Campus or Contact Us Today" 
        />

        <div className="contact-wrapper">
          
          {/* Left: Contact Info + Map */}
          <div className="contact-left">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Our Location</h3>
                  <p>123 University Avenue,<br />Education City, EC 10001</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone Number</h3>
                  <p>(+1) 234 567 8900<br />(+1) 234 567 8901</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email Address</h3>
                  <p>info@eduuniversity.com<br />admissions@eduuniversity.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="contact-map">
              <iframe
                title="University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.771389520345!2d-0.127676085237!3d51.507350879636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI3LjIiTiAwMdAwJzM5LjQiVwo!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
         <div className="contact-right">
    <form className="contact-form" method="POST" action="https://api.web3forms.com/submit">
        
        <input type="hidden" name="access_key" value="fa3739f1-5e78-4db4-ae9c-e7a2cc285f1a" />
        
        <input type="text" placeholder="Your Name" name="name" required />
        
        <input type="email" placeholder="Your Email" name="email" required />
        
        <input type="text" placeholder="Subject" name="subject" required />
        
        <textarea rows="6" placeholder="Your Message" name="message" required></textarea>
        
        <button type="submit" className="btn contact-btn" href="#contact">
            Send Message 🚀
        </button>
        
    </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;