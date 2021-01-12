import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Landing: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <Nav />

      <Hero />

      <Footer />
    </div>
  )
}

export default Landing
