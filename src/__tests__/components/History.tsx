import { shallow } from 'enzyme'
import React from 'react'
import History from '../../components/History'

describe('History component', () => {
  it('should render without crashing', () => {
    shallow(<History />)
  })

  it('should render the image', () => {
    const wrapper = shallow(<History />)
    const image = <div className="h-64 bg-cover lg:rounded lg:h-full" style={{ backgroundImage: `url(https://i.postimg.cc/CMJbRZd6/History.jpg)` }} />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<History />)
    const title = (
      <h1 id="rf" className="text-4xl text-gray-800 font-bold cursor-default">
        History of <span className="text-yellow-600">EdiCoffee</span>
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the past description', () => {
    const wrapper = shallow(<History />)
    const description = (
      <p className="mt-4 text-gray-700 text-justify cursor-default">
        Our goal is to lay a new foundation for the tradition of coffee in Hungary. We want to reform coffee drinking habits. To achieve this, we created the
        EdiCoffee project. We believe in our products. We work with the best technologies and have the greatest expertise in coffee roasting. We want to give
        quality out of conviction, passion.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })
})
