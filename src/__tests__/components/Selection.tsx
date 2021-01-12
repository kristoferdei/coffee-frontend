import { shallow } from 'enzyme'
import React from 'react'
import Selection from '../../components/Selection'

describe('Selection component', () => {
  it('should render without crashing', () => {
    shallow(<Selection />)
  })

  it('should render the image', () => {
    const wrapper = shallow(<Selection />)
    const image = <img className="h-56 w-full object-cover object-center" src="https://i.postimg.cc/sx58Jp8S/AboutUs.jpg" alt="AboutUs" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the about us link', () => {
    const wrapper = shallow(<Selection />)
    const about = (
      <a id="rf" href="/about" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
        About us
      </a>
    )
    expect(wrapper.contains(about)).toEqual(true)
  })

  it('should render the about us description', () => {
    const wrapper = shallow(<Selection />)
    const description = (
      <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
        Get to know us. Find out where we started, where we are now and where we are going. Our story can be inspiring for everyone. Get closer to us by
        learning about our goals and mission.
      </div>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the places link', () => {
    const wrapper = shallow(<Selection />)
    const places = (
      <a id="rf" href="/places" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
        Places
      </a>
    )
    expect(wrapper.contains(places)).toEqual(true)
  })

  it('should render the places description', () => {
    const wrapper = shallow(<Selection />)
    const description = (
      <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
        Where can you find us? Check out our cafes and their opening hours. Come to us and try our coffee offer. Do not miss it. We look forward to seeing you!
      </div>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the menu', () => {
    const wrapper = shallow(<Selection />)
    const menu = (
      <a id="rf" href="/menu" className="block text-yellow-600 hover:text-yellow-700 hover:underline font-bold mb-2 pb-2 text-xl">
        Menu
      </a>
    )
    expect(wrapper.contains(menu)).toEqual(true)
  })

  it('should render the menu description', () => {
    const wrapper = shallow(<Selection />)
    const description = (
      <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm text-justify cursor-default">
        We cannot just serve coffee. If you hungry, we were prepared for that too. We try to prepare for any eventuality, so our offer is constantly expanding.
      </div>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })
})
