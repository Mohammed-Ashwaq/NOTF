import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Neighbourhoods<span>of the Future</span></div>
            <p>Neighbourhoods of the Future connects community efforts, making them visible, adaptable, and actionable. We create a shared canvas for collaboration where actors contribute what they can and access what they need.</p>
            <p>Building sustainable urban futures together.</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#join">Join</a></li>
              <li><a href="#partnerships">Partnerships</a></li>
              <li><a href="#principles">Principles</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Directory & Atlas</a></li>
              <li><a href="#">Playbooks & Toolkits</a></li>
              <li><a href="#">Marketplace of Offerings</a></li>
              <li><a href="#">Cadence Calls</a></li>
              <li><a href="#">Convenings</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Neighbourhoods of the Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer