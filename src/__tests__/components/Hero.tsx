import { shallow } from 'enzyme'
import React from 'react'
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import Selection from '../../components/Selection'

describe('Hero component', () => {
  it('should render without crashing', () => {
    shallow(<Hero />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Hero />)
    const title = (
      <h1 id="rf" className="text-3xl font-bold text-gray-800 md:text-4xl cursor-default">
        Coffee of <span className="text-yellow-600 cursor-default">Coffees</span>
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Hero />)
    const description = (
      <p className="mt-2 text-sm text-gray-600 md:text-base text-justify cursor-default">
        Discover our coffees! We believe a cup of coffee is one of the most important, simple pleasures in life. Carefully selected beans roasted with love and
        care. This is what you have always been looking for.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the discover', () => {
    const wrapper = shallow(<Hero />)
    const discover = (
      <a
        className="w-24 text-center px-4 py-3 bg-gray-700 text-white border border-gray-700 rounded hover:bg-transparent hover:border-gray-700 font-medium hover:text-gray-700 focus:outline:none"
        href="/coffee"
      >
        Discover
      </a>
    )
    expect(wrapper.contains(discover)).toEqual(true)
  })

  it('should render the buy', () => {
    const wrapper = shallow(<Hero />)
    const buy = (
      <a
        className="w-24 text-center mx-4 px-4 py-3 border border-gray-700 bg-transparent text-gray-700 font-medium rounded hover:bg-gray-700 hover:text-white focus:outline-none"
        href="/shop"
      >
        Buy
      </a>
    )
    expect(wrapper.contains(buy)).toEqual(true)
  })

  it('should render the image', () => {
    const wrapper = shallow(<Hero />)
    const image = (
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/ZKjDHKnW/Hero.jpg)',
        }}
      />
    )
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the newsletter', () => {
    const wrapper = shallow(<Hero />)
    const newsletter = <Newsletter />
    expect(wrapper.contains(newsletter)).toEqual(true)
  })

  it('should render the selection', () => {
    const wrapper = shallow(<Hero />)
    const selection = <Selection />
    expect(wrapper.contains(selection)).toEqual(true)
  })
})
