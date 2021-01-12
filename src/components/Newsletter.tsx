import React from 'react'
import emailjs from 'emailjs-com'

const Newsletter: React.FunctionComponent = () => {
  function sendEmail(e: any): any {
    e.preventDefault()

    emailjs.sendForm('service_id', 'template_id', e.target, 'user_id').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <section className="w-screen px-4 py-12 -mx-4">
      <div className="max-w-sm lg:max-w-xl mx-auto">
        <h2 id="rf" className="text-xl text-left inline-block font-bold text-gray-800 cursor-default pb-1">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 text-xs pl-px cursor-default">Latest news, articles and updates monthly delivered to your inbox.</p>
        <form className="contact-form mt-2" onSubmit={sendEmail}>
          <div className="flex items-center">
            <input
              type="email"
              className="w-full px-2 py-4 mr-2 border border-gray-400 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              required
              name="email"
            />
            <button
              type="submit"
              value="Send"
              className="bg-yellow-600 text-white border border-yellow-600 px-5 py-2 font-medium rounded hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 focus:outline-none"
              style={{ marginLeft: '-7rem' }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
