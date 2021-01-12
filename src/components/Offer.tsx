import React from 'react'

const Offer: React.FunctionComponent = () => {
  return (
    <section id="menu" className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h1 id="rf" className="text-5xl text-gray-800 font-bold cursor-default">
            Menu
          </h1>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600 cursor-default">
            Our dishes are always freshly prepared at any time of the day. You will definitely find the right choice.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
          <div className="col-span-2 sm:col-span-1 xl:col-span-1">
            <img alt="ScrambledEggs" src="https://i.postimg.cc/d1jrm363/Scrambled-Eggs.jpg" className="h-24 w-24 rounded  mx-auto" />
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
              Scrambled eggs
            </h2>
            <p className="text-gray-700 cursor-default">For breakfast, scrambled eggs can be the perfect choice.</p>
          </div>
          <div className="text-lg col-span-2 sm:col-span-1 xl:col-span-1 italic cursor-default">1250 Ft</div>
          <div className="col-span-2 sm:col-span-1 xl:col-span-1">
            <img alt="Croissant" src="https://i.postimg.cc/Pxp0CGQS/Croissant.jpg" className="h-24 w-24 rounded  mx-auto" />
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
              Croissant
            </h2>
            <p className="text-gray-700 cursor-default">If you just want something light to eat.</p>
          </div>
          <div className="text-lg col-span-2 sm:col-span-1 xl:col-span-1 italic cursor-default">230 Ft</div>
          <div className="col-span-2 sm:col-span-1 xl:col-span-1">
            <img alt="Cake" src="https://i.postimg.cc/V6xpM77m/Cake.jpg" className="h-24 w-24 rounded  mx-auto" />
          </div>
          <div className="col-span-2 sm:col-span-4 xl:col-span-4">
            <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
              Cake
            </h2>
            <p className="text-gray-700 cursor-default">Do you want something sweet? Here you go!</p>
          </div>
          <div className="text-lg col-span-2 sm:col-span-1 xl:col-span-1 italic cursor-default">480 Ft</div>
        </div>
      </div>
    </section>
  )
}

export default Offer
