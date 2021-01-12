import React from 'react'
import LoginForm from '../components/LoginForm'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Login: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-screen w-screen">
      <Nav />
      <div className="-my-8 flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg w-full sm:w-3/4 lg:w-1/2
                     bg-white sm:mx-0"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 id="rf" className="text-5xl text-gray-800 text-center font-medium cursor-default">
                Login
              </h1>
              <div className="w-full mt-4">
                <LoginForm />
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 border-4 border-yellow-600 rounded bg-cover bg-center"
            style={{ backgroundImage: 'url(https://i.postimg.cc/J4pn3ZWS/Login.jpg)' }}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
