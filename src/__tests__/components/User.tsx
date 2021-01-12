import { shallow } from 'enzyme'
import User from '../../components/User'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

describe('User component', () => {
  it('should render without crashing', () => {
    shallow(<User />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<User />)
    const title = (
      <h1 id="rf" className="mx-3 text-white font-black text-3xl lg:text-2xl cursor-default">
        Profile
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the user icon', () => {
    const wrapper = shallow(<User />)
    const userIcon = <FontAwesomeIcon icon={faUser} />
    expect(wrapper.contains(userIcon)).toEqual(true)
  })

  it('should render the username', () => {
    const wrapper = shallow(<User />)
    const username = <h2 className="px-2 text-xl text-gray-800 font-medium cursor-default">Username:</h2>
    expect(wrapper.contains(username)).toEqual(true)
  })

  it('should render the email icon', () => {
    const wrapper = shallow(<User />)
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    expect(wrapper.contains(emailIcon)).toEqual(true)
  })

  it('should render the email', () => {
    const wrapper = shallow(<User />)
    const email = <h2 className="px-2 text-xl text-gray-800 font-medium cursor-default">Email:</h2>
    expect(wrapper.contains(email)).toEqual(true)
  })

  it('should render the back hyperlink', () => {
    const wrapper = shallow(<User />)
    const back = (
      <a
        className="bg-yellow-600 border border-yellow-600 text-lg text-white
                        hover:text-yellow-600 hover:border-yellow-600 hover:bg-transparent font-medium py-2 px-4 rounded focus:outline-none"
        href="/shop"
      >
        Back
      </a>
    )
    expect(wrapper.contains(back)).toEqual(true)
  })
})
