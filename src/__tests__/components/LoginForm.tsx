import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../../components/LoginForm'

describe('LoginForm component', () => {
  it('should render without crashing', () => {
    shallow(<LoginForm />)
  })

  it('should render the username label', () => {
    const wrapper = shallow(<LoginForm />)
    const usernameLabel = (
      <label id="rf" htmlFor="username" className="pb-2 block uppercase tracking-wide text-gray-700 text-base font-medium mb-4">
        Username
      </label>
    )
    expect(wrapper.contains(usernameLabel)).toEqual(true)
  })

  it('should render the password label', () => {
    const wrapper = shallow(<LoginForm />)
    const passwordLabel = (
      <label id="rf" htmlFor="password" className="pt-2 pb-2 block uppercase tracking-wide text-gray-700 text-base font-medium mb-4">
        Password
      </label>
    )
    expect(wrapper.contains(passwordLabel)).toEqual(true)
  })

  it('should render the login button', () => {
    const wrapper = shallow(<LoginForm />)
    const loginButton = (
      <button
        className="mt-4 bg-gray-700 border border-gray-700 text-lg text-white
                        hover:text-gray-900 hover:border-gray-700 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
      >
        Login
      </button>
    )
    expect(wrapper.contains(loginButton)).toEqual(true)
  })

  it('should render the register hyperlink', () => {
    const wrapper = shallow(<LoginForm />)
    const registerHyperlink = (
      <a
        className="text-center mt-4 border border-gray-700 bg-transparent hover:bg-gray-700
                              text-lg text-gray-900 hover:text-white font-medium py-2 px-4 rounded focus:outline-none"
        href="/register"
      >
        Register
      </a>
    )
    expect(wrapper.contains(registerHyperlink)).toEqual(true)
  })
})
