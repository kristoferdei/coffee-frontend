import { shallow } from 'enzyme'
import React from 'react'
import Timeline from '../../components/Timeline'

describe('Timeline component', () => {
  it('should render without crashing', () => {
    shallow(<Timeline />)
  })

  it('should render the one', () => {
    const wrapper = shallow(<Timeline />)
    const one = <h1 className="mx-auto font-bold text-lg text-white cursor-default">1</h1>
    expect(wrapper.contains(one)).toEqual(true)
  })

  it('should render the past', () => {
    const wrapper = shallow(<Timeline />)
    const past = (
      <h2 id="rf" className="mb-3 pb-3 font-bold text-gray-800 text-2xl cursor-default">
        Past
      </h2>
    )
    expect(wrapper.contains(past)).toEqual(true)
  })

  it('should render the past description', () => {
    const wrapper = shallow(<Timeline />)
    const pastDescription = (
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify cursor-default">
        We were just coffee-loving young people. Unfortunately, we did not find the quality we wanted. That’s why we took matters into our own hands and
        invented the concept of the perfect cafe. Then we mastered the right knowledge and created our own coffee.
      </p>
    )
    expect(wrapper.contains(pastDescription)).toEqual(true)
  })

  it('should render the two', () => {
    const wrapper = shallow(<Timeline />)
    const two = <h1 className="mx-auto text-white font-bold text-lg cursor-default">2</h1>
    expect(wrapper.contains(two)).toEqual(true)
  })

  it('should render the beginnings', () => {
    const wrapper = shallow(<Timeline />)
    const beginnings = (
      <h2 id="rf" className="mb-3 pb-3 font-bold text-white text-2xl cursor-default">
        Beginnings
      </h2>
    )
    expect(wrapper.contains(beginnings)).toEqual(true)
  })

  it('should render the beginnings description', () => {
    const wrapper = shallow(<Timeline />)
    const beginningsDescription = (
      <p className="text-sm font-medium leading-snug tracking-wide text-white text-justify text-opacity-100 cursor-default">
        Once we had the right knowledge and excellent coffee, we wanted to make it available to people. That’s why we wanted to open our first cafe. We came up
        with the concept, the design and worked out the plans. Thanks to that, we were able to open it.
      </p>
    )
    expect(wrapper.contains(beginningsDescription)).toEqual(true)
  })

  it('should render the three', () => {
    const wrapper = shallow(<Timeline />)
    const three = <h1 className="mx-auto font-bold text-lg text-white cursor-default">3</h1>
    expect(wrapper.contains(three)).toEqual(true)
  })

  it('should render the present', () => {
    const wrapper = shallow(<Timeline />)
    const present = (
      <h2 id="rf" className="mb-3 pb-3 font-bold text-gray-800 text-2xl cursor-default">
        Present
      </h2>
    )
    expect(wrapper.contains(present)).toEqual(true)
  })

  it('should render the present description', () => {
    const wrapper = shallow(<Timeline />)
    const presentDescription = (
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-justify text-opacity-100 cursor-default">
        Opening the cafe was the first big step. And our newly launched web store is the second. We also wanted to get our coffees to people’s homes. Not
        everyone has the opportunity to get to us, so we go to them. We are very proud to have gotten this far.
      </p>
    )
    expect(wrapper.contains(presentDescription)).toEqual(true)
  })

  it('should render the four', () => {
    const wrapper = shallow(<Timeline />)
    const four = <h1 className="mx-auto text-white font-bold text-lg cursor-default">4</h1>
    expect(wrapper.contains(four)).toEqual(true)
  })

  it('should render the future', () => {
    const wrapper = shallow(<Timeline />)
    const future = (
      <h2 id="rf" className="mb-3 pb-3 font-bold text-white text-2xl cursor-default">
        Future
      </h2>
    )
    expect(wrapper.contains(future)).toEqual(true)
  })

  it('should render the future description', () => {
    const wrapper = shallow(<Timeline />)
    const futureDescription = (
      <p className="text-sm font-medium leading-snug tracking-wide text-white text-justify text-opacity-100 cursor-default">
        However, that is not all. Our next cafe will open soon and we are already working on the third. It is no secret our goal to network the country. Then
        not only the country but the whole world. In addition, we would like to further develop and expand our offer.
      </p>
    )
    expect(wrapper.contains(futureDescription)).toEqual(true)
  })
})
