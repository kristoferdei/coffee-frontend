import React from 'react'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const AboutAuthor: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen">
      <Nav />

      <Author />

      <Footer />
    </div>
  )
}

export default AboutAuthor
