import { shallow } from 'enzyme'
import React from 'react'
import Program from '../../components/Program'

describe('Program component', () => {
  it('should render without crashing', () => {
    shallow(<Program />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Program />)
    const title = <h2 className="font-bold text-2xl text-gray-800 pb-2 tracking-normal">About the program</h2>
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Program />)
    const description = (
      <p className="text-sm text-gray-700 px-2 mr-1 pb-2">
        On the client page I used HTML5, CSS3, JavaScript technologies with React. The TailwindCSS is responsible for the appearance of the web page. I use
        NodeJS on the server side and PostgreSQL technology on the database side. I used PostgreSQL with a framework called NestJS.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the image', () => {
    const wrapper = shallow(<Program />)
    const image = <img src="https://i.postimg.cc/CMsjcxJx/program.jpg" alt="program" className="w-full h-64 rounded-lg rounded-b-none" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the avatar', () => {
    const wrapper = shallow(<Program />)
    const avatar = <img className="w-12 h-12 object-cover rounded-full mx-4  shadow" src="https://i.postimg.cc/wvhh8qpF/me.jpg" alt="me" />
    expect(wrapper.contains(avatar)).toEqual(true)
  })

  it('should render the name', () => {
    const wrapper = shallow(<Program />)
    const name = (
      <a href="/aboutMe" className="pr-2 text-gray-800 hover:text-gray-900 hover:underline">
        Erdei Kristóf
      </a>
    )
    expect(wrapper.contains(name)).toEqual(true)
  })

  it('should render the date', () => {
    const wrapper = shallow(<Program />)
    const date = <span className="text-gray-600">2020</span>
    expect(wrapper.contains(date)).toEqual(true)
  })
})
