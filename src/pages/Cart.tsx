import React from 'react'
import CartTable from '../components/CartTable'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Cart: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen">
      <Header />

      <CartTable />

      <Footer />
    </div>
  )
}

export default Cart
