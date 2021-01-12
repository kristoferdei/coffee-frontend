import React from 'react'
import Newsletter from './Newsletter'
import Selection from './Selection'

const Hero: React.FunctionComponent = () => {
  return (
    <section className="w-full pb-8">
      <div className="flex bg-white" style={{ height: 'calc(100vh - 82px)' }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h1 id="rf" className="text-3xl font-bold text-gray-800 md:text-4xl cursor-default">
              Coffee of <span className="text-yellow-600 cursor-default">Coffees</span>
            </h1>
            <p className="mt-2 text-sm text-gray-600 md:text-base text-justify cursor-default">
              Discover our coffees! We believe a cup of coffee is one of the most important, simple pleasures in life. Carefully selected beans roasted with
              love and care. This is what you have always been looking for.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                className="w-24 text-center px-4 py-3 bg-gray-700 text-white border border-gray-700 rounded hover:bg-transparent hover:border-gray-700 font-medium hover:text-gray-700 focus:outline:none"
                href="/coffee"
              >
                Discover
              </a>
              <a
                className="w-24 text-center mx-4 px-4 py-3 border border-gray-700 bg-transparent text-gray-700 font-medium rounded hover:bg-gray-700 hover:text-white focus:outline-none"
                href="/shop"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%' }}>
          <div
            className="h-full bg-cover"
            style={{
              backgroundImage: 'url(https://i.postimg.cc/ZKjDHKnW/Hero.jpg)',
            }}
          />
        </div>
      </div>
      <div className="pl-4">
        <Newsletter />
      </div>
      <Selection />
    </section>
  )
}

export default Hero
