import React, { useState, useEffect } from 'react';
import './HeaderHome.css';
import img1 from "../../assets/14567.jpg";
import img2 from "../../assets/shop.jpg";
import img3 from "../../assets/house.jpg";
import img4 from "../../assets/warehouse.jpg";

//Array of images
const IMG = [img1, img2, img3, img4];

const HeaderHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Automatically change next background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMG.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="header-home"
      style={{ backgroundImage: `url(${IMG[currentIndex]})` }}
    >
      <div className="overlay">
        <h1>Welcome</h1> 
        <p>Explore Your Dream Property</p>
      </div>
    </div>
  );
};

export default HeaderHome;
