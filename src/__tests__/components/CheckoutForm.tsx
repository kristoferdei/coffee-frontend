import { shallow } from 'enzyme'
import React from 'react'
import CheckoutForm from '../../components/CheckoutForm'

describe('CheckoutForm component', () => {
  it('should render without crashing', () => {
    shallow(<CheckoutForm />)
  })

  it('should render the costumer information label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const costumerInformation = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2 pb-2">
        Costumer information
      </label>
    )
    expect(wrapper.contains(costumerInformation)).toEqual(true)
  })

  it('should render the name label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const nameLabel = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        Name
      </label>
    )
    expect(wrapper.contains(nameLabel)).toEqual(true)
  })

  it('should render the email label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const email = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        E-mail
      </label>
    )
    expect(wrapper.contains(email)).toEqual(true)
  })

  it('should render the address label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const address = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        Address
      </label>
    )
    expect(wrapper.contains(address)).toEqual(true)
  })

  it('should render the payment information label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const paymentInformationLabel = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2 pb-2">
        Payment information
      </label>
    )
    expect(wrapper.contains(paymentInformationLabel)).toEqual(true)
  })

  it('should render the card label', () => {
    const wrapper = shallow(<CheckoutForm />)
    const card = (
      <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
        Card
      </label>
    )
    expect(wrapper.contains(card)).toEqual(true)
  })

  it('should render the pay button', () => {
    const wrapper = shallow(<CheckoutForm />)
    const button = (
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-yellow-600 text-white border border-yellow-600
                            hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 font-bold focus:outline-none"
      >
        Pay
      </button>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })
})
