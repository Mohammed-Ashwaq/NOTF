import React, { useState } from 'react'

const Join = () => {
  const [formData, setFormData] = useState({
    geography: '',
    orgType: '',
    theme: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="join" id="join">
      <div className="container">
        <h2 className="section-title">Join The Movement</h2>
        <div className="join-content">
          <form className="join-form" onSubmit={handleSubmit}>
            <h3>Collaborate with us</h3>
            <div className="form-group">
              <label htmlFor="geography">Geography</label>
              <select 
                id="geography" 
                name="geography"
                value={formData.geography}
                onChange={handleChange}
              >
                <option value="">Select your city</option>
                <option value="mumbai">Bengaluru</option>
                <option value="bengaluru">Bhubaneshwar</option>
                <option value="ahmedabad">Chennai</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="org-type">Organization Type</label>
              <select 
                id="org-type" 
                name="orgType"
                value={formData.orgType}
                onChange={handleChange}
              >
                <option value="">Select your organization type</option>
                <option value="cso">CBO/RWA</option>
                <option value="anchor">Anchor/Expert Organization</option>
                <option value="anchor">Individual</option>
                <option value="anchor">Not Sure</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <select 
                id="theme" 
                name="theme"
                value={formData.theme}
                onChange={handleChange}
              >
                <option value="">Select your focus area</option>
                <option value="sustainability">Sustainability</option>
                <option value="housing">option</option>
                <option value="education">option</option>
                <option value="health">option</option>
              </select>
            </div>
            <button type="submit" className="form-btn">
              <i className="fas fa-arrow-right"></i>
              Explore Pilots
            </button>
          </form>
          <div className="join-info">
            <h3>Trust-based engagement</h3>
            <p>Participation is by invitation; every actor defines what they offer and what they need.</p>
            <p>Community-owned, not centrally controlled. Co-stewardship rotates responsibilities among trusted partners.</p>
            
            <h3>Current Pilot Cities</h3>
            <div className="pilots">
              <div className="pilot-card">
                <h4>Bengaluru</h4>
                <p>Content to be shred by sharanya</p>
              </div>
              <div className="pilot-card">
                <h4>Bhuvaneshwar</h4>
                <p>Content to be shred by sharanya</p>
              </div>
              <div className="pilot-card">
                <h4>City X</h4>
                <p>Content to be shred by sharanya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join