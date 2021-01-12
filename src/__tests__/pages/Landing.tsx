import React from 'react'
import { shallow } from 'enzyme'
import Landing from '../../pages/Landing'
import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

describe('Landing page', () => {
  it('should render without crashing', () => {
    shallow(<Landing />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Landing />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the hero', () => {
    const wrapper = shallow(<Landing />)
    const hero = <Hero />
    expect(wrapper.contains(hero)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Landing />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
