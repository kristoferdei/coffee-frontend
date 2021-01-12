import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../../pages/Menu'
import Nav from '../../components/Nav'
import Offer from '../../components/Offer'
import Footer from '../../components/Footer'

describe('Menu page', () => {
  it('should render without crashing', () => {
    shallow(<Menu />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Menu />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the offer', () => {
    const wrapper = shallow(<Menu />)
    const offer = <Offer />
    expect(wrapper.contains(offer)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Menu />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
