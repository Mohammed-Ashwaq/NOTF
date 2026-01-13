import React, { useState, useEffect } from "react";

const NeighborhoodMap = () => {
  const [selectedCity, setSelectedCity] = useState("bengaluru");

  const cities = {
    bengaluru: { initiatives: 38, partners: 31 },
    mumbai: { initiatives: 45, partners: 23 },
    ahmedabad: { initiatives: 27, partners: 18 }
  };

  return (
    <section className="neighborhood-map" id="map">
      <div className="container">
        <h2 className="section-title">Where We’re Active</h2>
        <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 30px" }}>
          Explore neighbourhoods where community-led initiatives are already taking shape.
        </p>

        <div className="city-selector">
          {Object.keys(cities).map((city) => (
            <button
              key={city}
              className={`city-btn ${selectedCity === city ? "active" : ""}`}
              onClick={() => setSelectedCity(city)}
            >
              {city.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="city-details">
          <h3>{selectedCity.toUpperCase()}</h3>
          <p>{cities[selectedCity].initiatives} active initiatives</p>
          <p>{cities[selectedCity].partners} partner organizations</p>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodMap;
