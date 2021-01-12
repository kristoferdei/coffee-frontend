import React from 'react'
import { shallow } from 'enzyme'
import Faq from '../../pages/Faq'
import Nav from '../../components/Nav'
import Question from '../../components/Question'
import Footer from '../../components/Footer'

describe('Faq page', () => {
  it('should render without crashing', () => {
    shallow(<Faq />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Faq />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the question', () => {
    const wrapper = shallow(<Faq />)
    const question = <Question />
    expect(wrapper.contains(question)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Faq />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
