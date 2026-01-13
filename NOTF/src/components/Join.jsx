import React, { useState } from "react";

const Join = () => {
  const [formData, setFormData] = useState({
    geography: "",
    orgType: "",
    theme: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="join" id="join">
      <div className="container">
        <h2 className="section-title">Join the Movement</h2>

        {/* WHY JOIN – simplified */}
        <div className="pilots" style={{ marginBottom: "50px" }}>
          <div className="pilot-card">
            <h4>Multiply Local Impact</h4>
            <p>
              Strengthen your work by aligning with other initiatives in the
              same neighbourhood.
            </p>
          </div>

          <div className="pilot-card">
            <h4>Place-Based Collaboration</h4>
            <p>
              Work in neighbourhoods where trust, momentum, and community
              engagement already exist.
            </p>
          </div>

          <div className="pilot-card">
            <h4>Community of Practice</h4>
            <p>
              Learn with others through shared experiences, tools, and on-ground
              insights.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="join-content">
          {/* FORM */}
          <form className="join-form" onSubmit={handleSubmit}>
            <h3>Collaborate with Us</h3>

            <div className="form-group">
              <label>Geography</label>
              <select name="geography" value={formData.geography} onChange={handleChange}>
                <option value="">Select your city</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

            <div className="form-group">
              <label>Organization Type</label>
              <select name="orgType" value={formData.orgType} onChange={handleChange}>
                <option value="">Select type</option>
                <option value="cbo">CBO / RWA</option>
                <option value="ngo">NGO / Expert Org</option>
                <option value="individual">Individual</option>
                <option value="unsure">Not Sure</option>
              </select>
            </div>

            <div className="form-group">
              <label>Theme</label>
              <select name="theme" value={formData.theme} onChange={handleChange}>
                <option value="">Select focus area</option>
                <option value="sustainability">Sustainability</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button className="form-btn" type="submit">
              Explore Pilots
            </button>
          </form>

          {/* TRUST INFO + CITIES */}
          <div className="join-info">
            <h3>How Participation Works</h3>
            <p>
              Participation is trust-based and by invitation. Each actor defines
              what they offer and what they seek.
            </p>

            <h3>Current Pilot Cities</h3>
            <div className="pilots">
              <div className="pilot-card">
                <h4>Bengaluru</h4>
                <p>Active neighbourhood collaborations</p>
              </div>
              <div className="pilot-card">
                <h4>Bhubaneswar</h4>
                <p>Emerging community partnerships</p>
              </div>
              <div className="pilot-card">
                <h4>City X</h4>
                <p>Launching soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
