import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="container header-container">
        <div className="logo">Neighbourhoods of the Future</div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#approach">APPROACH</a></li>
          <li><a href="#join">JOIN</a></li>
          <li><a href="partnerdirectory">PARTNERSHIPS</a></li>
          <li><a href="#principles">PRINCIPLES</a></li>
        </ul>
        <div className="language-selector">
          <i className="fas fa-globe"></i>
          <span>EN</span>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header