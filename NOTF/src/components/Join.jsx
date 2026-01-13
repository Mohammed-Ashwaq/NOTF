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
        <div className="join-impact">
            <h2>Multiply Your Impact at the Local Level </h2>
            <h4> For a community organisation or a neighbourhood champion</h4>
            <h5> Build Momentum</h5>
            <p> Your participation in NoTF helps generate momentum that spreads beyond a single project, creating ripple effects across the neighbourhood.</p>

            <h5>Amplify Local Impact </h5>
            <p> By bringing multiple initiatives into the same area, you can strengthen existing efforts. Projects reinforce each other, making your impact deeper and more meaningful. </p>

            <h5> Join a Community of Practice</h5>
            <p> Become part of a vibrant learning circle where implementers share experiences, troubleshoot challenges, and improve together.</p>
          
            <h5> Gain Grounded Validation</h5>
            <p>NoTF provides real-world visibility your work is seen, tested, and validated directly by residents and fellow practitioners.</p>
          
          </div>

        <div className="join-for-you">
          <h2> WHAT’S IN IT FOR YOU?</h2>
          <h4> Spark ripple effects across communities</h4>
          <p> Your participation helps create momentum that spreads beyond one project or partner.</p>

          <h4>Place-Based Synergy-</h4>
          <p>When your projects come together in the same neighbourhoods, they reinforce each other and your impact goes deeper.</p>

          <h4>Spark ripple effects across communities</h4>
          <p>Build on existing efforts by bringing your projects to communities that are already active and engaged.</p>

          <h4>Geographical Alignment-</h4>
          <p> Your participation helps create momentum that spreads beyond one project or partner.</p>

          <h4>Thematic Contribution</h4>
          <p>Add depth to your program by plugging in your focus areas be it health, education, gender, or something else.</p>

          <h4>Community of Practice</h4>
          <p>A Join a circle of implementers who are sharing insights, learning by doing, and solving problems together.</p>
        </div>
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