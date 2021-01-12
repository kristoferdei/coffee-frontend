import React from 'react'
import Program from '../components/Program'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const AboutProgram: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen">
      <Nav />

      <Program />

      <Footer />
    </div>
  )
}

export default AboutProgram
