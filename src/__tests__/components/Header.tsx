import { shallow } from 'enzyme'
import React from 'react'
import Header from '../../components/Header'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Header component', () => {
  it('should render without crashing', () => {
    shallow(<Header />)
  })

  it('should render the cart icon', () => {
    const wrapper = shallow(<Header />)
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    expect(wrapper.contains(icon)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Header />)
    const title = (
      <div id="rf" className="w-full text-gray-700 md:text-center text-3xl font-bold cursor-default">
        EdiCoffee <span className="text-yellow-600">Shop</span>
      </div>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render home hyperlink', () => {
    const wrapper = shallow(<Header />)
    const home = (
      <a
        href="/"
        className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
      >
        Home
      </a>
    )
    expect(wrapper.contains(home)).toEqual(true)
  })

  it('should render products hyperlink', () => {
    const wrapper = shallow(<Header />)
    const products = (
      <a
        href="/shop"
        className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
      >
        Products
      </a>
    )
    expect(wrapper.contains(products)).toEqual(true)
  })

  it('should render cart hyperlink', () => {
    const wrapper = shallow(<Header />)
    const cart = (
      <a
        href="/cart"
        className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
      >
        Cart
      </a>
    )
    expect(wrapper.contains(cart)).toEqual(true)
  })
})
