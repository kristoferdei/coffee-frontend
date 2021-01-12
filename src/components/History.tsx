import React from 'react'

const History: React.FunctionComponent = () => {
  return (
    <section className="bg-white lg:py-12 lg:flex lg:justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:rounded">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:rounded lg:h-full" style={{ backgroundImage: `url(https://i.postimg.cc/CMJbRZd6/History.jpg)` }} />
        </div>
        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h1 id="rf" className="text-4xl text-gray-800 font-bold cursor-default">
            History of <span className="text-yellow-600">EdiCoffee</span>
          </h1>
          <p className="mt-4 text-gray-700 text-justify cursor-default">
            Our goal is to lay a new foundation for the tradition of coffee in Hungary. We want to reform coffee drinking habits. To achieve this, we created
            the EdiCoffee project. We believe in our products. We work with the best technologies and have the greatest expertise in coffee roasting. We want to
            give quality out of conviction, passion.
          </p>
        </div>
      </div>
    </section>
  )
}

export default History
