import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
          Dream Home is your reliable resource for locating the ideal house. Look through our premium listings to find the homes of your dreams. We make the process easy whether you're renting, selling, or buying. Together, let’s turn your dream into reality 
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: dreamhome@gmail.com</p>
          <p>Phone: +44 7877 111 111 </p>
          <p>Address: 221B, Baker Street,
                      London,
                      NW1 6XE,
                      United Kingdom</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dream Home Agency. All Rights Reserved.</p>  {/* &copy display copyright text */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
