import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-path">
        <span>Home</span> / <span className="active">Contact</span>
      </div>
    <div className="contact-container">
      {/* Left Side - Contact Information */}
      <div className="contact-info">
        <h2 className="section-title">MAIN OFFICE</h2>
        <p><strong>Dream Home Agency</strong></p>
        <p>221B, Baker Street,
          London,
          NW1 6XE,
          United Kingdom</p>

        <div className="contact-details">
          <div>
            <strong>General Numbers</strong>
            <p>+44 7877 111 111</p>
          </div>
          <div>
            <strong>Hotline Numbers</strong>
            <p>+44 7877 111 111</p>
          </div>
        </div>

        <div className="contact-extra">
          <div>
            <strong>Email</strong>
            <p>dreamhome@gmail.com</p>
          </div>
          <div>
            <strong>Website</strong>
            <p><a href="https://dreamhomeweb.uk">www.dreamhome.uk</a></p>
          </div>
        </div>

        <div className="working-hours">
          <strong>Working Hours</strong>
          <p>Monday to Saturday: 8.30 AM to 5.30 PM</p>
        </div>
      </div>

      {/* Right Side - Inquiry Form */}
      <div className="inquiry-form">
        <h2 className="section-title light-text">Contact Information
        </h2>
        <p>Our professional sales team is ready to assist you.</p>

        <form>
          <div className="form-group">
            <div>
              <label>Name <span>*</span></label>
              <input type="text" placeholder="Name" required />
            </div>
            <div>
              <label>Phone Number <span>*</span></label>
              <input type="text" placeholder="Phone Number" required />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Email Address <span>*</span></label>
              <input type="email" placeholder="Email Address" required />
            </div>
            
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="send-button">SEND NOW</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
