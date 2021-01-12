import React from 'react'
import { shallow } from 'enzyme'
import AboutProgram from '../../pages/AboutProgram'
import Nav from '../../components/Nav'
import Program from '../../components/Program'
import Footer from '../../components/Footer'

describe('AboutProgram page', () => {
  it('should render without crashing', () => {
    shallow(<AboutProgram />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<AboutProgram />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the program', () => {
    const wrapper = shallow(<AboutProgram />)
    const program = <Program />
    expect(wrapper.contains(program)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<AboutProgram />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
