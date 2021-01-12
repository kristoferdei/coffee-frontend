import React from 'react'

const Selection: React.FunctionComponent = () => {
  return (
    <section className="w-screen p-4 pb-12">
      <div className="px-4">
        <div className="block md:flex justify-between md:-mx-2">
          <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <img className="h-56 w-full object-cover object-center" src="https://i.postimg.cc/sx58Jp8S/AboutUs.jpg" alt="AboutUs" />
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <a id="rf" href="/about" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
                  About us
                </a>
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
                  Get to know us. Find out where we started, where we are now and where we are going. Our story can be inspiring for everyone. Get closer to us
                  by learning about our goals and mission.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <img className="h-56 w-full object-cover object-center" src="https://i.postimg.cc/fTrXv6cc/Places.jpg" alt="Places" />
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <a id="rf" href="/places" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
                  Places
                </a>
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
                  Where can you find us? Check out our cafes and their opening hours. Come to us and try our coffee offer. Do not miss it. We look forward to
                  seeing you!
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <img className="h-56 w-full object-cover object-center" src="https://i.postimg.cc/T1kbFsZX/Menu.jpg" alt="Menu" />
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <a id="rf" href="/menu" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
                  Menu
                </a>
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
                  We cannot just serve coffee. If you hungry, we were prepared for that too. We try to prepare for any eventuality, so our offer is constantly
                  expanding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Selection
