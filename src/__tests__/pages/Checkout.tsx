import React from 'react'
import { shallow } from 'enzyme'
import Checkout from '../../pages/Checkout'
import Header from '../../components/Header'
import CheckoutForm from '../../components/CheckoutForm'
import Footer from '../../components/Footer'

describe('Checkout page', () => {
  it('should render without crashing', () => {
    shallow(<Checkout />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Checkout />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Checkout />)
    const title = (
      <h1 id="rf" className="pb-8 -mt-8 text-4xl font-medium text-center text-gray-800 cursor-default">
        Checkout
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the checkout form', () => {
    const wrapper = shallow(<Checkout />)
    const checkoutForm = <CheckoutForm />
    expect(wrapper.contains(checkoutForm)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Checkout />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
