// src/components/Marketplace.jsx
import React, { useState } from 'react'

const Marketplace = () => {
  const [resources] = useState([
    {
      id: 1,
      type: 'toolkit',
      title: 'Community Engagement Playbook',
      description: 'Step-by-step guide for neighborhood engagement',
      category: 'Community Building',
      downloadCount: 142
    },
    {
      id: 2,
      type: 'grant',
      title: 'Small Grants Program',
      description: 'Funding for community-led initiatives',
      category: 'Funding',
      deadline: '2024-03-15'
    },
    {
      id: 3,
      type: 'space',
      title: 'Community Center - Bandra',
      description: 'Shared workspace for neighborhood initiatives',
      category: 'Infrastructure',
      capacity: 50
    }
  ])

  return (
    <section className="marketplace">
      <div className="container">
        <h2 className="section-title">Marketplace of Offerings</h2>
        <div className="resource-filters">
          <button>All Resources</button>
          <button>Toolkits</button>
          <button>Grants</button>
          <button>Spaces</button>
          <button>Expertise</button>
        </div>
        <div className="resources-grid">
          {resources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-type">{resource.type}</div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div className="resource-meta">
                <span className="category">{resource.category}</span>
                {resource.downloadCount && (
                  <span className="downloads">{resource.downloadCount} downloads</span>
                )}
              </div>
              <button className="resource-btn">Access Resource</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marketplace