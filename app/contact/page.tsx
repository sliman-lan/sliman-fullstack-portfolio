"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container" style={{ padding: "40px 20px 20px" }}>
      {submitted && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(46, 204, 113, 0.9)',
          color: 'white',
          padding: '20px 40px',
          borderRadius: '10px',
          backdropFilter: 'blur(20px)',
          zIndex: 10000,
          animation: 'fadeIn 0.3s ease'
        }}>
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      <section className="contact-grid">
        {/* CONTACT FORM */}
        <div className="contact-form glass">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="contact-info glass">
          <h2>Contact Information</h2>
          
          <div className="contact-item">
            <div className="contact-item-icon">📞</div>
            <div className="contact-item-text">
              <h4>Phone / WhatsApp</h4>
              <p>+963 986 832 772</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <div className="contact-item-text">
              <h4>Location</h4>
              <p>Latakia, Syria</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">🌐</div>
            <div className="contact-item-text">
              <h4>Availability</h4>
              <p>Freelance & Remote Full-Stack Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}