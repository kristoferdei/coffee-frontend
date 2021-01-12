import React from 'react'
import { shallow } from 'enzyme'
import Login from '../../pages/Login'
import Nav from '../../components/Nav'
import LoginForm from '../../components/LoginForm'
import Footer from '../../components/Footer'

describe('Login page', () => {
  it('should render without crashing', () => {
    shallow(<Login />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Login />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Login />)
    const title = (
      <h1 id="rf" className="text-5xl text-gray-800 text-center font-medium cursor-default">
        Login
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the login form', () => {
    const wrapper = shallow(<Login />)
    const loginForm = <LoginForm />
    expect(wrapper.contains(loginForm)).toEqual(true)
  })

  it('should render the login image', () => {
    const wrapper = shallow(<Login />)
    const image = (
      <div
        className="hidden md:block md:w-1/2 border-4 border-yellow-600 rounded bg-cover bg-center"
        style={{ backgroundImage: 'url(https://i.postimg.cc/J4pn3ZWS/Login.jpg)' }}
      />
    )
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Login />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
