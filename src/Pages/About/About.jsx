import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="about-path">
        <span>Home</span> / <span className="active">About</span>
      </div>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        At Dream Home, we believe that finding the perfect home is more than just a transaction—it’s a journey toward comfort, security, and happiness. With a commitment to excellence and a passion for real estate, we strive to connect individuals and families with properties that truly feel like home.
      </p>
      <p>
        Our experienced team is committed to providing exceptional service, 
        market insights, and expert guidance throughout your real estate journey.
      </p>
      <div className="about-info">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><b>Extensive Listings –</b> A wide range of carefully selected properties to match every lifestyle and budget.</li>
          <li><b>Expert Guidance –</b> A team of real estate professionals dedicated to assisting you every step of the way.</li>
          <li><b>Innovation & Technology –</b> Advanced search tools and an intuitive platform for a seamless property search experience.</li>
          <li><b>Customer-Centric Approach –</b> Personalized service tailored to meet your specific real estate goals.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default About;
