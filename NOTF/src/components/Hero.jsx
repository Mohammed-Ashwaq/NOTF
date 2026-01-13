import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Neighbourhoods as ecosystems of possibility
        </h1>

        <p>
          A shared platform to map, connect, and strengthen
          community-led initiatives across cities.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#map" className="hero-btn">Explore Neighbourhoods</a>
          <a href="#join" className="hero-btn" style={{ background: "transparent", border: "2px solid white" }}>
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
