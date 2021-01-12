import React from 'react'
import RegisterForm from '../components/RegisterForm'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Register: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-screen w-screen flex flex-col">
      <Nav />
      <div className="p-8 container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-lg text-black w-full">
          <h1 id="rf" className="mb-8 -mt-8 text-5xl text-center text-medium text-gray-800 cursor-default">
            Registration
          </h1>
          <p className="text-base text-gray-600 pb-10 text-center cursor-default">We welcome your questions and comments.</p>
          <RegisterForm />
          <div className="text-gray-700 mt-6 text-center cursor-default">
            Already have an account?
            <a
              className="no-underline border-b border-yellow-600
                            hover:border-yellow-700 text-yellow-600 hover:text-yellow-700 ml-2"
              href="/login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
