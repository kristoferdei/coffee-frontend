import { shallow } from 'enzyme'
import React from 'react'
import Question from '../../components/Question'

describe('Question component', () => {
  it('should render without crashing', () => {
    shallow(<Question />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Question />)
    const title = (
      <h1 id="rf" className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-800 mb-4 cursor-default">
        Frequently Asked Question
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <p className="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto cursor-default">
        The most common questions about how our business works and what can do for you.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the first question', () => {
    const wrapper = shallow(<Question />)
    const question = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">What are your shipping options?</summary>
    )
    expect(wrapper.contains(question)).toEqual(true)
  })

  it('should render the first question description', () => {
    const wrapper = shallow(<Question />)
    const description = <span className="cursor-default text-justify">Shipping items are made based on orders placed Monday through Friday.</span>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the second question', () => {
    const wrapper = shallow(<Question />)
    const question = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">What are the shipping costs?</summary>
    )
    expect(wrapper.contains(question)).toEqual(true)
  })

  it('should render the second question description', () => {
    const wrapper = shallow(<Question />)
    const description = <span className="cursor-default text-justify">The delivery fee is uniformly 690 Ft. There is currently no personal pick-up.</span>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the third question', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">How long until I get my order?</summary>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the third question description', () => {
    const wrapper = shallow(<Question />)
    const description = <span className="cursor-default text-justify">Packages arrives 2-3 business days after order processing.</span>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the fourth question', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">Are my payment details secure?</summary>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the fourth question description', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <span className="cursor-default text-justify">
        Yes, your payment information are in safe. We care a lot about safety, always store the data encrypted.
      </span>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the fifth question', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">
        What about environmental protection?
      </summary>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the fifth question description', () => {
    const wrapper = shallow(<Question />)
    const description = <span className="cursor-default">Of course, we pay attention to the protection of our nature. We are completely carbon neutral.</span>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the sixth question', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <summary className="font-medium bg-yellow-600 text-white rounded-md py-2 px-4 focus:outline-none cursor-pointer">How can I communicate with you?</summary>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the sixth question description', () => {
    const wrapper = shallow(<Question />)
    const description = (
      <span className="cursor-default text-justify">
        You can contact us directly on the contact page and can also find our contact details in the footnote of our page.
      </span>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })
})
