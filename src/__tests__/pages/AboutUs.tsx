import React from 'react'
import { shallow } from 'enzyme'
import AboutUs from '../../pages/AboutUs'
import Nav from '../../components/Nav'
import History from '../../components/History'
import Timeline from '../../components/Timeline'
import Footer from '../../components/Footer'

describe('AboutUs page', () => {
  it('should render without crashing', () => {
    shallow(<AboutUs />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<AboutUs />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the history', () => {
    const wrapper = shallow(<AboutUs />)
    const history = <History />
    expect(wrapper.contains(history)).toEqual(true)
  })

  it('should render the timeline', () => {
    const wrapper = shallow(<AboutUs />)
    const timeline = <Timeline />
    expect(wrapper.contains(timeline)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<AboutUs />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
