import React from 'react'
import User from '../components/User'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <div className="py-8 flex items-center justify-center bg-white">
        <User />
      </div>
      <Footer />
    </div>
  )
}

export default Login
