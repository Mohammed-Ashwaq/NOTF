// src/components/PartnerDirectory.jsx
import React, { useState } from 'react'

const PartnerDirectory = () => {
  const [filter, setFilter] = useState('all')
  
  const partners = [
    {
      id: 1,
      name: "Sustainable Cities Foundation",
      type: "anchor",
      expertise: ["Urban Planning", "Sustainability"],
      location: "Multiple Cities",
      projects: 12
    },
    {
      id: 2,
      name: "Mumbai Residents Welfare Association",
      type: "cso",
      expertise: ["Community Mobilization", "Local Governance"],
      location: "Mumbai",
      projects: 8
    }
  ]

  const filteredPartners = filter === 'all' 
    ? partners 
    : partners.filter(partner => partner.type === filter)

  return (
    <section className="partner-directory">
      <div className="container">
        <h2 className="section-title">Partner Directory</h2>
        <div className="directory-filters">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Partners
          </button>
          <button 
            className={filter === 'anchor' ? 'active' : ''}
            onClick={() => setFilter('anchor')}
          >
            Anchor Organizations
          </button>
          <button 
            className={filter === 'cso' ? 'active' : ''}
            onClick={() => setFilter('cso')}
          >
            CSO/RWA
          </button>
        </div>
        <div className="partners-grid">
          {filteredPartners.map(partner => (
            <div key={partner.id} className="partner-card">
              <h3>{partner.name}</h3>
              <div className="partner-type">{partner.type}</div>
              <div className="partner-expertise">
                {partner.expertise.map(skill => (
                  <span key={skill} className="expertise-tag">{skill}</span>
                ))}
              </div>
              <div className="partner-location">
                <i className="fas fa-map-marker-alt"></i>
                {partner.location}
              </div>
              <div className="partner-projects">
                {partner.projects} collaborative projects
              </div>
              <button className="connect-btn">Connect</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerDirectory