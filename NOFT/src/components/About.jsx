import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT NEIGHBOURHOODS OF THE FUTURE</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Build the Shared Canvas</h3>
            <p>Neighbourhoods of the Future (NOTF) is built on a simple principle: neighbourhoods already hold the knowledge, relationships, and initiatives needed for transformation.</p>
            <p>NOTF connects these efforts, making them visible, adaptable, and actionable. By bringing together community groups, local organizations, thematic experts, and institutions, NOTF creates a shared canvas for collaboration — where actors contribute what they can and access what they need.</p>
            <p>It is not a program but a platform for facilitation and alignment, enabling neighbourhoods to be self-directed, responsive, and resilient.</p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Directory & Atlas</h4>
              <p>Mapping people, initiatives, and resources to create transparency and collaboration opportunities.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-hands-helping"></i>
              <h4>Intermediary Support</h4>
              <p>Aligning offers and asks between actors to facilitate meaningful collaboration.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-comments"></i>
              <h4>Cadence Calls & Convenings</h4>
              <p>Monthly discussions and quarterly in-person meetings to maintain momentum.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-toolbox"></i>
              <h4>Playbooks & Toolkits</h4>
              <p>Practical resources for adaptation and implementation of successful approaches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About