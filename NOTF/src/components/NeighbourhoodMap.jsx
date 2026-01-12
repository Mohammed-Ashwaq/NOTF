// src/components/NeighborhoodMap.jsx
import React, { useState } from 'react'

const NeighborhoodMap = () => {
  const [selectedCity, setSelectedCity] = useState(null)
  
  const cities = {
    mumbai: { lat: 19.0760, lng: 72.8777, initiatives: 45, partners: 23 },
    bengaluru: { lat: 12.9716, lng: 77.5946, initiatives: 38, partners: 31 },
    ahmedabad: { lat: 23.0225, lng: 72.5714, initiatives: 27, partners: 18 }
  }

  return (
    <section className="neighborhood-map">
      <div className="container">
        <h2 className="section-title">Explore Our Neighborhoods</h2>
        <div className="map-container">
          {/* Interactive SVG map or integration with Mapbox/Google Maps */}
          <div className="city-selector">
            {Object.keys(cities).map(city => (
              <button 
                key={city}
                className={`city-btn ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city.toUpperCase()}
              </button>
            ))}
          </div>
          {selectedCity && (
            <div className="city-details">
              <h3>{selectedCity.toUpperCase()} Initiatives</h3>
              <p>{cities[selectedCity].initiatives} active projects</p>
              <p>{cities[selectedCity].partners} partner organizations</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default NeighborhoodMap