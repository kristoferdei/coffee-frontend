import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../../pages/Contact'
import Nav from '../../components/Nav'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'

describe('Contact page', () => {
  it('should render without crashing', () => {
    shallow(<Contact />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Contact />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Contact />)
    const title = (
      <h1 id="rf" className="mb-8 -mt-8 text-center font-medium text-gray-800 text-5xl cursor-default">
        Contact us
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Contact />)
    const description = <p className="text-base text-gray-600 pb-10 text-center cursor-default">We welcome your questions and comments.</p>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the contact form', () => {
    const wrapper = shallow(<Contact />)
    const contactForm = <ContactForm />
    expect(wrapper.contains(contactForm)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Contact />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
