import React from 'react'
import '../App.css'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Shop: React.FunctionComponent = () => {
  return (
    <div className="bg-white">
      <Header />

      <Card />

      <Footer />
    </div>
  )
}

export default Shop
