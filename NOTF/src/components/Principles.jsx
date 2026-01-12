import React from 'react'

const Principles = () => {
  return (
    <section className="principles" id="principles">
      <div className="container">
        <h2 className="section-title">OUR PRINCIPLES</h2>
        <div className="principles-content">
          <div className="principle-card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Trust-based engagement</h3>
            <p>Participation is by invitation; every actor defines what they offer and what they need. We prioritize relationships and mutual respect in all collaborations.</p>
          </div>
          <div className="principle-card">
            <i className="fas fa-users-cog"></i>
            <h3>Community-owned, not centrally controlled</h3>
            <p>Co-stewardship rotates responsibilities among trusted partners. Decision-making power remains with the community.</p>
          </div>
          <div className="principle-card">
            <i className="fas fa-puzzle-piece"></i>
            <h3>Alignment over uniformity</h3>
            <p>Collaboration maintains coherence while respecting differences in approach, domain, and scale. We value diverse perspectives and methods.</p>
          </div>
          <div className="principle-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Place-sensitive design</h3>
            <p>Interventions respond to local knowledge, aspirations, and cultural patterns. We honor the unique character of each neighborhood.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Principles