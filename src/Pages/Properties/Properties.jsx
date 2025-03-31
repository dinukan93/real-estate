import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Slider, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import './Properties.css';
import propertiesJson from '../../assets/Properties.json';

const propertyData = propertiesJson.properties;
const propertyTypes = [
  { value: 'any', label: 'Any' },
  { value: 'house', label: 'House' },
  { value: 'flat', label: 'Flat' },
];

const PropertyCard = ({ property, onFavoriteToggle, isFavorite }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PROPERTY',
    item: { property },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="property-card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img src={property.picture} alt={`${property.type} image`} />
      <div className="property-details">
        <h4>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</h4>
        <p>Price: ${property.price.toLocaleString()}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Location: {property.location}</p>
        <Button variant="contained" color={isFavorite ? 'error' : 'secondary'} onClick={() => onFavoriteToggle(property)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
        <Link to={`/property-details/${property.id}`}>
          <Button variant="contained" color="primary">View</Button>
        </Link>
      </div>
    </div>
  );
};

const Properties = () => {
  const [priceRange, setPriceRange] = useState([50000, 1500000]);
  const [bedrooms, setBedrooms] = useState([1, 10]);
  const [dateAdded, setDateAdded] = useState(null);
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState(null);
  const [postcode, setPostcode] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(propertyData);
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  const applyFilters = () => {
    const filtered = propertyData.filter((property) => {
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
      const matchesBedrooms = property.bedrooms >= bedrooms[0] && property.bedrooms <= bedrooms[1];
      const matchesType = propertyType && propertyType.value !== 'any' ? property.type.toLowerCase() === propertyType.value.toLowerCase() : true;
      const matchesSearchQuery = property.description.toLowerCase().includes(query.toLowerCase());
      const matchesPostcode = postcode === '' || property.location.toLowerCase().includes(postcode.toLowerCase());
      return matchesPrice && matchesBedrooms && matchesType && matchesSearchQuery && matchesPostcode;
    });
    setFilteredProperties(filtered);
  };

  const addToFavorites = (property) => {
    setFavoriteProperties((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === property.id)) {
        return [...prevFavorites, property];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (propertyId) => {
    setFavoriteProperties((prevFavorites) => prevFavorites.filter((fav) => fav.id !== propertyId));
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PROPERTY',
    drop: (item) => {
      console.log('Dropped item:', item.property); // Add logging for debugging
      addToFavorites(item.property);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="properties-container">
      <div className="search-container">
        <h2>Find Your Dream Property</h2>
        <div className="search-filters">
          {/* Property Type Dropdown */}
          <div className="filter">
              <label>Type</label>
              <Select
                options={propertyTypes}
                placeholder="Select Type"
                onChange={setPropertyType}
              />
            </div>
            {/* Price Range Slider */}
          <div className="filter">
            <label>
              Price Range <br /> ${priceRange[0]} - ${priceRange[1]}
            </label>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1500000}
              step={10000}
            />
          </div>
           {/* Bedroom Count Slider */}
           <div className="filter">
            <label>
              Bedrooms: {bedrooms[0]} - {bedrooms[1]}
            </label>
            <Slider
              value={bedrooms}
              onChange={(e, newValue) => setBedrooms(newValue)}
              valueLabelDisplay="auto"
              min={1}
              max={10}
            />
            </div>
          {/* Date Picker */}
          <div className="filter">
            <label>Date added</label>
            <DatePicker
              selected={dateAdded}
              onChange={(date) => setDateAdded(date)}
              placeholderText="Select Date"
              className="date-picker"
            />
          </div>
          
          {/* Postcode Area Filter */}
          <div className="filter">
            <label>Postcode Area</label>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter postcode area"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={applyFilters}>Search</Button>
      </div>

      <div className="properties-layout">
        <div className="properties-list">
          <h3>Properties</h3>
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onFavoriteToggle={addToFavorites} isFavorite={false} />
            ))}
          </div>
        </div>

        <div
          className="favorites-list"
          ref={drop}
          style={{
            backgroundColor: isOver ? '#f0f0f0' : 'transparent',
            border: isOver ? '2px dashed #00bcd4' : 'none',
          }}
        >
          <h3>Favorites</h3>
          <div className="favorites-grid">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onFavoriteToggle={() => removeFromFavorites(property.id)}
                isFavorite={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
