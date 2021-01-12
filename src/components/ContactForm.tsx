import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactForm: React.FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>()

  const onSubmit: (data: Inputs, e: any) => void = (data: Inputs, e: any) => {
    console.log('data', data)
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
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            First Name
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="First name"
            type="text"
            id="firstName"
            name="firstName"
            ref={register({ required: true })}
          />
          {errors.firstName && errors.firstName.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your first name.
            </label>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Last name"
            type="text"
            id="lastName"
            name="lastName"
            ref={register({ required: true })}
          />
          {errors.lastName && errors.lastName.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your last name.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            E-mail
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your email.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 h-48 resize-none"
            placeholder="Type your message..."
            id="message"
            name="message"
            ref={register({ required: true })}
          />
          {errors.message && errors.message.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter a message.
            </label>
          )}
        </div>
      </div>
      <div className="md:flex md:items-center">
        <button
          type="submit"
          className="w-full text-center py-3 font-medium rounded bg-yellow-600 text-white border border-yellow-600
                            hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 font-bold focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
