import { shallow } from 'enzyme'
import React from 'react'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

describe('Footer component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />)
  })

  it('should render the about', () => {
    const wrapper = shallow(<Footer />)
    const about = (
      <span id="rf" className="font-bold text-xl text-yellow-600 uppercase pb-2 cursor-default">
        About
      </span>
    )
    expect(wrapper.contains(about)).toEqual(true)
  })

  it('should render the about us', () => {
    const wrapper = shallow(<Footer />)
    const aboutUs = (
      <a href="/about" className="text-white text-lg hover:text-yellow-600 hover:underline">
        About us
      </a>
    )
    expect(wrapper.contains(aboutUs)).toEqual(true)
  })

  it('should render the aboutAuthor', () => {
    const wrapper = shallow(<Footer />)
    const aboutAuthor = (
      <a href="/aboutMe" className="text-white text-lg hover:text-yellow-600 hover:underline">
        About the author
      </a>
    )
    expect(wrapper.contains(aboutAuthor)).toEqual(true)
  })

  it('should render the aboutProgram', () => {
    const wrapper = shallow(<Footer />)
    const aboutProgram = (
      <a href="/aboutProgram" className="text-white text-lg hover:text-yellow-600 hover:underline">
        About the program
      </a>
    )
    expect(wrapper.contains(aboutProgram)).toEqual(true)
  })

  it('should render the socials', () => {
    const wrapper = shallow(<Footer />)
    const socials = (
      <span id="rf" className="font-bold text-yellow-600 text-xl uppercase mt-4 md:mt-0 pb-2 cursor-default">
        Socials
      </span>
    )
    expect(wrapper.contains(socials)).toEqual(true)
  })

  it('should render the instagram', () => {
    const wrapper = shallow(<Footer />)
    const instagram = (
      <a href="https://www.instagram.com/kristof_erdei/" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
    )
    expect(wrapper.contains(instagram)).toEqual(true)
  })

  it('should render the facebook', () => {
    const wrapper = shallow(<Footer />)
    const facebook = (
      <a href="https://www.facebook.com/erdeikristof98/" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </a>
    )
    expect(wrapper.contains(facebook)).toEqual(true)
  })

  it('should render the twitter', () => {
    const wrapper = shallow(<Footer />)
    const twitter = (
      <a href="https://twitter.com/KristofErdei" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </a>
    )
    expect(wrapper.contains(twitter)).toEqual(true)
  })

  it('should render the github', () => {
    const wrapper = shallow(<Footer />)
    const github = (
      <a href="https://github.com/kristoferdei" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
    )
    expect(wrapper.contains(github)).toEqual(true)
  })

  it('should render the information', () => {
    const wrapper = shallow(<Footer />)
    const github = (
      <a href="https://github.com/kristoferdei" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
    )
    expect(wrapper.contains(github)).toEqual(true)
  })

  it('should render the faq', () => {
    const wrapper = shallow(<Footer />)
    const faq = (
      <a href="/faq" className="text-white text-lg hover:text-yellow-600 hover:underline">
        FAQ
      </a>
    )
    expect(wrapper.contains(faq)).toEqual(true)
  })

  it('should render the places', () => {
    const wrapper = shallow(<Footer />)
    const places = (
      <a href="/places" className="text-white text-lg hover:text-yellow-600 hover:underline">
        Places
      </a>
    )
    expect(wrapper.contains(places)).toEqual(true)
  })

  it('should render the contact', () => {
    const wrapper = shallow(<Footer />)
    const contact = (
      <a href="/contact" className="text-white text-lg hover:text-yellow-600 hover:underline">
        Contact
      </a>
    )
    expect(wrapper.contains(contact)).toEqual(true)
  })

  it('should render the phone', () => {
    const wrapper = shallow(<Footer />)
    const phone = (
      <a href="tel: +36 30 123 4567" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faPhone} /> +36 1 301 80443
      </a>
    )
    expect(wrapper.contains(phone)).toEqual(true)
  })

  it('should render the email', () => {
    const wrapper = shallow(<Footer />)
    const email = (
      <a href="mailto: erdeikristof@t-online.hu" className="text-white text-lg hover:text-yellow-600 hover:underline">
        <FontAwesomeIcon icon={faEnvelope} /> edi@coffee.hu
      </a>
    )
    expect(wrapper.contains(email)).toEqual(true)
  })
})
