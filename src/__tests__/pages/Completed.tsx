import React from 'react'
import { shallow } from 'enzyme'
import Completed from '../../pages/Completed'
import Header from '../../components/Header'
import Success from '../../components/Success'
import Footer from '../../components/Footer'

describe('Completed page', () => {
  it('should render without crashing', () => {
    shallow(<Completed />)
  })

  it('should render the header', () => {
    const wrapper = shallow(<Completed />)
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('should render the success', () => {
    const wrapper = shallow(<Completed />)
    const success = <Success />
    expect(wrapper.contains(success)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Completed />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
