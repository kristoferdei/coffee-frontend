import React from 'react'
import { shallow } from 'enzyme'
import Register from '../../pages/Register'
import Nav from '../../components/Nav'
import RegisterForm from '../../components/RegisterForm'
import Footer from '../../components/Footer'

describe('Register page', () => {
  it('should render without crashing', () => {
    shallow(<Register />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Register />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Register />)
    const title = (
      <h1 id="rf" className="mb-8 -mt-8 text-5xl text-center text-medium text-gray-800 cursor-default">
        Registration
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the register form', () => {
    const wrapper = shallow(<Register />)
    const registerForm = <RegisterForm />
    expect(wrapper.contains(registerForm)).toEqual(true)
  })

  it('should render the login hyperlink', () => {
    const wrapper = shallow(<Register />)
    const login = (
      <a
        className="no-underline border-b border-yellow-600
                            hover:border-yellow-700 text-yellow-600 hover:text-yellow-700 ml-2"
        href="/login"
      >
        Log in
      </a>
    )
    expect(wrapper.contains(login)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Register />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
