import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Approach from './components/Approach'
import Join from './components/Join'
import PartnerDirectory from './components/Partnerships'
import Principles from './components/Principles'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import NeighbourhoodMap from './components/NeighbourhoodMap'
import Events from './components/Events'
import Marketplace from './components/Marketplace'
import Stories from './components/Stories'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Dashboard />
      <About />
      <Approach />
      <NeighbourhoodMap />
      <Events />
      <Join />
      <Marketplace />
      <PartnerDirectory />
      <Principles />
      <Stories />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App