import React from 'react'
import { shallow } from 'enzyme'
import Coffees from '../../pages/Coffees'
import Nav from '../../components/Nav'
import Coffee from '../../components/Coffee'
import Footer from '../../components/Footer'

describe('Coffees page', () => {
  it('should render without crashing', () => {
    shallow(<Coffees />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Coffees />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the coffee', () => {
    const wrapper = shallow(<Coffees />)
    const coffee = <Coffee />
    expect(wrapper.contains(coffee)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Coffees />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
