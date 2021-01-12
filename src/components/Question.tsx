import React from 'react'

const Question: React.FunctionComponent = () => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 id="rf" className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-800 mb-4 cursor-default">
            Frequently Asked Question
          </h1>
          <p className="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto cursor-default">
            The most common questions about how our business works and what can do for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                What are your shipping options?
              </summary>
              <span className="cursor-default text-justify">Shipping items are made based on orders placed Monday through Friday.</span>
            </details>
            <details className="mb-4">
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                What are the shipping costs?
              </summary>
              <span className="cursor-default text-justify">The delivery fee is uniformly 690 Ft. There is currently no personal pick-up.</span>
            </details>
            <details>
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                How long until I get my order?
              </summary>
              <span className="cursor-default text-justify">Packages arrives 2-3 business days after order processing.</span>
            </details>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                Are my payment details secure?
              </summary>
              <span className="cursor-default text-justify">
                Yes, your payment information are in safe. We care a lot about safety, always store the data encrypted.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                What about environmental protection?
              </summary>
              <span className="cursor-default">Of course, we pay attention to the protection of our nature. We are completely carbon neutral.</span>
            </details>
            <details className="mb-4">
              <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
                How can I communicate with you?
              </summary>
              <span className="cursor-default text-justify">
                You can contact us directly on the contact page and can also find our contact details in the footnote of our page.
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Question
