import React from 'react'
import { shallow } from 'enzyme'
import Shop from '../../pages/Shop'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

describe('Shop page', () => {
  it('should render without crashing', () => {
    shallow(<Shop />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Shop />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the card', () => {
    const wrapper = shallow(<Shop />)
    const card = <Card />
    expect(wrapper.contains(card)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Shop />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
