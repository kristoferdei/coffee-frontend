import React from 'react'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-screen w-screen flex flex-col">
      <Nav />

      <div className="p-8 container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-lg text-black w-full">
          <h1 id="rf" className="mb-8 -mt-8 text-center font-medium text-gray-800 text-5xl cursor-default">
            Contact us
          </h1>
          <p className="text-base text-gray-600 pb-10 text-center cursor-default">We welcome your questions and comments.</p>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
