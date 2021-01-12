import React from 'react'
import { shallow } from 'enzyme'
import Profile from '../../pages/Profile'
import Header from '../../components/Header'
import User from '../../components/User'
import Footer from '../../components/Footer'

describe('Profile page', () => {
  it('should render without crashing', () => {
    shallow(<Profile />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Profile />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the user', () => {
    const wrapper = shallow(<Profile />)
    const user = <User />
    expect(wrapper.contains(user)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Profile />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
