import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Location from '../components/Location'

const Places: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-screen w-screen">
      <Nav />

      <Location />

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  )
}

export default Places
