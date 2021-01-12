import React from 'react'

const Timeline: React.FunctionComponent = () => {
  return (
    <section className="container bg-white mx-auto w-full h-full pb-8">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }} />
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12" />
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-bold text-lg text-white cursor-default">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded shadow w-5/12 px-6 py-4">
            <h2 id="rf" className="mb-3 pb-3 font-bold text-gray-800 text-2xl cursor-default">
              Past
            </h2>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify cursor-default">
              We were just coffee-loving young people. Unfortunately, we did not find the quality we wanted. That’s why we took matters into our own hands and
              invented the concept of the perfect cafe. Then we mastered the right knowledge and created our own coffee.
            </p>
          </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12" />
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-bold text-lg cursor-default">2</h1>
          </div>
          <div className="order-1 bg-yellow-600 rounded shadow w-5/12 px-6 py-4">
            <h2 id="rf" className="mb-3 pb-3 font-bold text-white text-2xl cursor-default">
              Beginnings
            </h2>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-justify text-opacity-100 cursor-default">
              Once we had the right knowledge and excellent coffee, we wanted to make it available to people. That’s why we wanted to open our first cafe. We
              came up with the concept, the design and worked out the plans. Thanks to that, we were able to open it.
            </p>
          </div>
        </div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12" />
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-bold text-lg text-white cursor-default">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded shadow w-5/12 px-6 py-4">
            <h2 id="rf" className="mb-3 pb-3 font-bold text-gray-800 text-2xl cursor-default">
              Present
            </h2>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-justify text-opacity-100 cursor-default">
              Opening the cafe was the first big step. And our newly launched web store is the second. We also wanted to get our coffees to people’s homes. Not
              everyone has the opportunity to get to us, so we go to them. We are very proud to have gotten this far.
            </p>
          </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12" />
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-bold text-lg cursor-default">4</h1>
          </div>
          <div className="order-1 bg-yellow-600 rounded shadow w-5/12 px-6 py-4">
            <h2 id="rf" className="mb-3 pb-3 font-bold text-white text-2xl cursor-default">
              Future
            </h2>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-justify text-opacity-100 cursor-default">
              However, that is not all. Our next cafe will open soon and we are already working on the third. It is no secret our goal to network the country.
              Then not only the country but the whole world. In addition, we would like to further develop and expand our offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
