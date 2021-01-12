import React from 'react'
import { shallow } from 'enzyme'
import Cart from '../../pages/Cart'
import Header from '../../components/Header'
import CartTable from '../../components/CartTable'
import Footer from '../../components/Footer'

describe('Cart page', () => {
  it('should render without crashing', () => {
    shallow(<Cart />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Cart />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the cart table', () => {
    const wrapper = shallow(<Cart />)
    const cartTable = <CartTable />
    expect(wrapper.contains(cartTable)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Cart />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
