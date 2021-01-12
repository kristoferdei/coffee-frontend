import { shallow } from 'enzyme'
import React from 'react'
import RegisterForm from '../../components/RegisterForm'

describe('RegisterForm component', () => {
  it('should render without crashing', () => {
    shallow(<RegisterForm />)
  })

  it('should render the username label', () => {
    const wrapper = shallow(<RegisterForm />)
    const username = (
      <label id="rf" htmlFor="username" className="pb-2 block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Username
      </label>
    )
    expect(wrapper.contains(username)).toEqual(true)
  })

  it('should render the name label', () => {
    const wrapper = shallow(<RegisterForm />)
    const name = (
      <label id="rf" htmlFor="fullName" className="pb-2 block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Full Name
      </label>
    )
    expect(wrapper.contains(name)).toEqual(true)
  })

  it('should render the email label', () => {
    const wrapper = shallow(<RegisterForm />)
    const email = (
      <label id="rf" htmlFor="fullName" className="pb-2 block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Full Name
      </label>
    )
    expect(wrapper.contains(email)).toEqual(true)
  })

  it('should render the password label', () => {
    const wrapper = shallow(<RegisterForm />)
    const password = (
      <label id="rf" htmlFor="password" className="pb-2 block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2">
        Password
      </label>
    )
    expect(wrapper.contains(password)).toEqual(true)
  })

  it('should render the create account button', () => {
    const wrapper = shallow(<RegisterForm />)
    const button = (
      <button
        type="submit"
        className="mt-4 w-full text-center py-3 rounded bg-gray-700 text-white border border-gray-700
                            hover:bg-transparent hover:border-gray-700 hover:text-gray-900 focus:outline-none font-medium"
      >
        Create Account
      </button>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })
})
