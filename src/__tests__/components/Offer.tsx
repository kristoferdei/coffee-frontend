import { shallow } from 'enzyme'
import React from 'react'
import Offer from '../../components/Offer'

describe('Offer component', () => {
  it('should render without crashing', () => {
    shallow(<Offer />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Offer />)
    const title = (
      <h1 id="rf" className="text-5xl text-gray-800 font-bold cursor-default">
        Menu
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Offer />)
    const description = (
      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600 cursor-default">
        Our dishes are always freshly prepared at any time of the day. You will definitely find the right choice.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the scrambled eggs image', () => {
    const wrapper = shallow(<Offer />)
    const image = <img alt="ScrambledEggs" src="https://i.postimg.cc/d1jrm363/Scrambled-Eggs.jpg" className="h-24 w-24 rounded  mx-auto" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the scrambled eggs', () => {
    const wrapper = shallow(<Offer />)
    const menu = (
      <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
        Scrambled eggs
      </h2>
    )
    expect(wrapper.contains(menu)).toEqual(true)
  })

  it('should render the scrambled eggs description', () => {
    const wrapper = shallow(<Offer />)
    const description = <p className="text-gray-700 cursor-default">For breakfast, scrambled eggs can be the perfect choice.</p>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the croissant image', () => {
    const wrapper = shallow(<Offer />)
    const image = <img alt="Croissant" src="https://i.postimg.cc/Pxp0CGQS/Croissant.jpg" className="h-24 w-24 rounded  mx-auto" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the croissant', () => {
    const wrapper = shallow(<Offer />)
    const croissant = (
      <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
        Croissant
      </h2>
    )
    expect(wrapper.contains(croissant)).toEqual(true)
  })

  it('should render the croissant description', () => {
    const wrapper = shallow(<Offer />)
    const description = <p className="text-gray-700 cursor-default">If you just want something light to eat.</p>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the cake image', () => {
    const wrapper = shallow(<Offer />)
    const image = <img alt="Cake" src="https://i.postimg.cc/V6xpM77m/Cake.jpg" className="h-24 w-24 rounded  mx-auto" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the cake', () => {
    const wrapper = shallow(<Offer />)
    const cake = (
      <h2 id="rf" className="font-bold text-gray-800 text-xl cursor-default">
        Cake
      </h2>
    )
    expect(wrapper.contains(cake)).toEqual(true)
  })

  it('should render the cake description', () => {
    const wrapper = shallow(<Offer />)
    const description = <p className="text-gray-700 cursor-default">Do you want something sweet? Here you go!</p>
    expect(wrapper.contains(description)).toEqual(true)
  })
})
