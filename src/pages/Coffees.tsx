import React from 'react'
import '../App.css'
import Nav from '../components/Nav'
import Coffee from '../components/Coffee'
import Footer from '../components/Footer'

const Coffees: React.FunctionComponent = () => {
  return (
    <div className="bg-white">
      <Nav />

      <Coffee />

      <Footer />
    </div>
  )
}

export default Coffees
