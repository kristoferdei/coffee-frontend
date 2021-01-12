import { shallow } from 'enzyme'
import React from 'react'
import ContactForm from '../../components/ContactForm'

describe('ContactForm component', () => {
  it('should render without crashing', () => {
    shallow(<ContactForm />)
  })

  it('should render the first name label', () => {
    const wrapper = shallow(<ContactForm />)
    const firstNameLabel = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        First Name
      </label>
    )
    expect(wrapper.contains(firstNameLabel)).toEqual(true)
  })

  it('should render the last name label', () => {
    const wrapper = shallow(<ContactForm />)
    const lastNameLabel = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        Last Name
      </label>
    )
    expect(wrapper.contains(lastNameLabel)).toEqual(true)
  })

  it('should render the email label', () => {
    const wrapper = shallow(<ContactForm />)
    const email = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        E-mail
      </label>
    )
    expect(wrapper.contains(email)).toEqual(true)
  })

  it('should render the message label', () => {
    const wrapper = shallow(<ContactForm />)
    const message = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        Message
      </label>
    )
    expect(wrapper.contains(message)).toEqual(true)
  })

  it('should render the send button', () => {
    const wrapper = shallow(<ContactForm />)
    const button = (
      <button
        type="submit"
        className="w-full text-center py-3 font-medium rounded bg-yellow-600 text-white border border-yellow-600
                            hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 font-bold focus:outline-none"
      >
        Send
      </button>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })
})
