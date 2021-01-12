import React from 'react'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User: React.FunctionComponent = () => {
  const username = localStorage.getItem('user_key')
  const fullName = localStorage.getItem('name_key')
  const email = localStorage.getItem('email_key')

  return (
    <main className="relative w-3/4 lg:w-1/2 bg-white shadow rounded overflow-hidden my-4" style={{ height: '500px' }}>
      <div className="flex items-center h-20 px-6 py-3 bg-gray-600">
        <h1 id="rf" className="mx-3 text-white font-black text-3xl lg:text-2xl cursor-default">
          Profile
        </h1>
      </div>
      <div className="pt-16 px-6">
        <h1 className="px-2 text-3xl text-gray-800 cursor-default">{fullName}</h1>
        <div className="flex text-gray-800 items-center pt-8 pl-4 mt-4">
          <FontAwesomeIcon icon={faUser} />
          <h2 className="px-2 text-xl text-gray-800 font-medium cursor-default">Username:</h2>
          <h3 className="px-2 text-xl text-gray-700 cursor-default">{username}</h3>
        </div>
        <div className="flex items-center text-gray-800 pl-4 mt-4">
          <FontAwesomeIcon icon={faEnvelope} />
          <h2 className="px-2 text-xl text-gray-800 font-medium cursor-default">Email:</h2>
          <h3 className="px-2 text-xl text-gray-700 cursor-default">{email}</h3>
        </div>
        <div className="absolute bottom-0 left-0 flex items-center mt-4 text-gray-700 pl-4 pb-4">
          <a
            className="bg-yellow-600 border border-yellow-600 text-lg text-white
                        hover:text-yellow-600 hover:border-yellow-600 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
            href="/shop"
          >
            Back
          </a>
        </div>
      </div>
    </main>
  )
}

export default User
