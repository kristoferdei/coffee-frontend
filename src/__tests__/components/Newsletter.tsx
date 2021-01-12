import { shallow } from 'enzyme'
import React from 'react'
import Newsletter from '../../components/Newsletter'

describe('Newsletter component', () => {
  it('should render without crashing', () => {
    shallow(<Newsletter />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Newsletter />)
    const title = (
      <h2 id="rf" className="text-xl text-left inline-block font-bold text-gray-800 cursor-default pb-1">
        Join Our Newsletter
      </h2>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Newsletter />)
    const description = <p className="text-gray-700 text-xs pl-px cursor-default">Latest news, articles and updates monthly delivered to your inbox.</p>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the input', () => {
    const wrapper = shallow(<Newsletter />)
    const input = (
      <input
        type="email"
        className="w-full px-2 py-4 mr-2 border border-gray-400 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
        required
        name="email"
      />
    )
    expect(wrapper.contains(input)).toEqual(true)
  })

  it('should render the button', () => {
    const wrapper = shallow(<Newsletter />)
    const button = (
      <button
        type="submit"
        value="Send"
        className="bg-yellow-600 text-white border border-yellow-600 px-5 py-2 font-medium rounded hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 focus:outline-none"
        style={{ marginLeft: '-7rem' }}
      >
        Sign Up
      </button>
    )
    expect(wrapper.contains(button)).toEqual(true)
  })
})
