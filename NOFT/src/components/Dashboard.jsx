// src/components/Dashboard.jsx
import React from 'react'

const Dashboard = () => {
  const metrics = [
    { label: "Neighborhoods Activated", value: "12", change: "+3" },
    { label: "Community Initiatives", value: "87", change: "+15" },
    { label: "Partner Organizations", value: "45", change: "+8" },
    { label: "Resources Shared", value: "234", change: "+42" }
  ]

  return (
    <section className="dashboard">
      <div className="container">
        <h2 className="section-title">Our Collective Impact</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-change positive">{metric.change} this quarter</div>
            </div>
          ))}
        </div>
        <div className="impact-stories">
          <h3>Recent Success Stories</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Green Corridor Project</h4>
              <p>Transformed 2km of urban space with community gardens</p>
              <span className="impact-location">Mumbai</span>
            </div>
            <div className="impact-item">
              <h4>Digital Literacy Program</h4>
              <p>Trained 500+ residents in digital skills</p>
              <span className="impact-location">Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard