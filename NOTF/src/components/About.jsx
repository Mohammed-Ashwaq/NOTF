import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">What is NEIGHBOURHOODS OF THE FUTURE(NOTF)?</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>What is NOTF?</h3>
            <p>Neighbourhoods of the Future (NOTF) is built on a simple principle: neighbourhoods already hold the knowledge, relationships, and initiatives needed for transformation.</p>
            <p>NOTF connects these efforts, making them visible, adaptable, and actionable. By bringing together community groups, local organizations, thematic experts, and institutions, NOTF creates a shared canvas for collaboration — where actors contribute what they can and access what they need.</p>
            <p>It is not a program but a platform for facilitation and alignment, enabling neighbourhoods to be self-directed, responsive, and resilient.</p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Neighbourhoods</h4>
              <h3>Community -owned, not centrally controlled</h3>
              <p>Co-stewardship rotates responsibilities among trusted parterns.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-hands-helping"></i>
              <h4>Cities</h4>
              <h3>Trust-based engagement</h3>
              <p>Participation is by invitation, every actor defines what they offer and what they need.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-comments"></i>
              <h4>Members</h4>
              <h3>Alignment over uniformity</h3>
              <p>Collaboration maintains coherence while respecting differences in approach, domain and scale</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-toolbox"></i>
              <h4>Initiatives</h4>
              <h3> Place-sensitive design</h3>
              <p>Practical resources for adaptation and implementation of successful approaches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About