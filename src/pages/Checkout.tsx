import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Checkout: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-screen w-screen flex flex-col">
      <Header />
      <div className="p-8 container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-lg text-black w-full">
          <h1 id="rf" className="pb-8 -mt-8 text-4xl font-medium text-center text-gray-800 cursor-default">
            Checkout
          </h1>
          <CheckoutForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
