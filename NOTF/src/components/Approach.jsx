import React from 'react'

const Approach = () => {
  return (
    <section className="approach" id="approach">
      <div className="container">
        <h2 className="section-title">OUR APPROACH</h2>
        <div className="approach-content">
          <div className="approach-card">
            <i className="fas fa-sitemap"></i>
            <h3>Build the Shared Canvas</h3>
            <p>We map who is working where, in what domain, and with which resources. This living directory creates transparency, reduces duplication, and surfaces collaboration opportunities.</p>
          </div>
          <div className="approach-card">
            <i className="fas fa-users"></i>
            <h3>Swarm the System</h3>
            <p>When diverse actors converge in a neighborhood — each contributing from their entry point — energy compounds. Patterns of possibility emerge, local institutions take notice, and resistant systems begin to shift.</p>
          </div>
          <div className="approach-card">
            <i className="fas fa-handshake"></i>
            <h3>Facilitate Practical Collaboration</h3>
            <p>We provide tools, support, and forums to enable meaningful interaction between community stakeholders, creating a marketplace of offerings including shared spaces, small grants, tools, and social capital.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach