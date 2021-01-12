import React from 'react'
import Maps from './Maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Location: React.FunctionComponent = () => {
  return (
    <section className="pt-4 pb-12">
      <div className="container mx-auto">
        <div>
          <h1 id="rf" className="text-gray-800 text-4xl font-medium px-6 md:px-12 pb-4 cursor-default">
            Places
          </h1>
        </div>
        <div className="flex flex-wrap px-6">
          <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5 pb-48">
            <div className="bg-black hover:shadow-xl">
              <div className="absolute justify-center">
                <Maps />
              </div>
            </div>
          </div>
          <div className="lg:-ml-32 lg:mt-10 w-full lg:w-1/2 md:px-4 lg:px-6 relative pt-48">
            <div className="sm:absolute sm:inset-x-0 sm:bottom-0">
              <div className="h-56 w-full border-white border-8">
                <h2 className="font-bold text-gray-800 text-xl cursor-default">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </h2>
                <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Mátészalka</p>
                <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Bajcsy Zs. út 19.</p>
                <p className="font-medium text-base text-gray-700 pl-4 cursor-default">4700</p>
                <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Hungary</p>
                <table className="mt-4">
                  <thead>
                    <th className="font-bold text-gray-800 text-xl cursor-default">
                      <FontAwesomeIcon icon={faClock} /> Opening hours
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Monday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Tuesday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Wednesday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Thursday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Friday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Saturday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
                    </tr>
                    <tr>
                      <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Sunday</td>
                      <td className="font-medium text-base text-gray-700 cursor-default">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
