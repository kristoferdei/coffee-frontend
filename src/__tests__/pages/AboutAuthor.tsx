import React from 'react'
import { shallow } from 'enzyme'
import AboutAuthor from '../../pages/AboutAuthor'
import Nav from '../../components/Nav'
import Author from '../../components/Author'
import Footer from '../../components/Footer'

describe('AboutAuthor page', () => {
  it('should render without crashing', () => {
    shallow(<AboutAuthor />)
  })

  it('should render the navigation', () => {
    const wrapper = shallow(<AboutAuthor />)
    const navigation = <Nav />
    expect(wrapper.contains(navigation)).toEqual(true)
  })

  it('should render the author', () => {
    const wrapper = shallow(<AboutAuthor />)
    const author = <Author />
    expect(wrapper.contains(author)).toEqual(true)
  })

  it('should render the footer', () => {
    const wrapper = shallow(<AboutAuthor />)
    const footer = <Footer />
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
