import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesJson from '../../assets/Properties.json';
import './PropertyDetails.css'; // Import the CSS file

const PropertyDetails = () => {
  const { id } = useParams(); // Access property ID from URL
  console.log('Property ID:', id);

  const property = propertiesJson.properties.find((property) => property.id === id);
  console.log('Property:', property);

  if (!property) {
    return <p>Property not found.</p>;
  }

  const [activeTab, setActiveTab] = useState('gallery'); // Default active tab is 'gallery'

  const renderTabContent = () => {
    switch (activeTab) {
      case 'gallery':
        return (
          <div className="gallery-images">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={`/${image}`} // Display additional images
                alt={`${property.type} gallery ${index + 1}`}
              />
            ))}
          </div>
        );
      case 'floorPlan':
        return (
          <div>
            <img
              src={`/${property.floorPlan}`} // Floor Plan image
              alt="Floor Plan"
              className="floor-plan-img"
            />
          </div>
        );
      case 'location':
        return (
          <div>
            <iframe
              src={property.locationMap} // Google Map Embed URL
              className="google-map"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="property-details-container">
      {/* Main Property Image */}
      <img
        src={`/${property.picture}`} // Display main image
        alt={`${property.type} image`}
        className="property-main-image"
      />

      {/* Property Details */}
      <h1>{property.type} Details</h1>
      <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p><strong>Description:</strong> {property.description}</p>
      <p><strong>Added:</strong> {property.added.month} {property.added.day}, {property.added.year}</p>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          onClick={() => setActiveTab('gallery')}
          className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
        >
          Gallery
        </button>
        <button
          onClick={() => setActiveTab('floorPlan')}
          className={`tab-button ${activeTab === 'floorPlan' ? 'active' : ''}`}
        >
          Floor Plan
        </button>
        <button
          onClick={() => setActiveTab('location')}
          className={`tab-button ${activeTab === 'location' ? 'active' : ''}`}
        >
          Location
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default PropertyDetails;
