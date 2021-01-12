import React from 'react'
import { shallow } from 'enzyme'
import Places from '../../pages/Places'
import Nav from '../../components/Nav'
import Location from '../../components/Location'
import Footer from '../../components/Footer'

describe('Places page', () => {
  it('should render without crashing', () => {
    shallow(<Places />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<Places />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the location', () => {
    const wrapper = shallow(<Places />)
    const location = <Location />
    expect(wrapper.contains(location)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<Places />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
