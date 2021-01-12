import { shallow } from 'enzyme'
import React from 'react'
import Author from '../../components/Author'

describe('Author component', () => {
  it('should render without crashing', () => {
    shallow(<Author />)
  })

  it('should render the image', () => {
    const wrapper = shallow(<Author />)
    const image = <img className="w-full" src="https://i.postimg.cc/wvhh8qpF/me.jpg" alt="Author" />
    expect(wrapper.contains(image)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Author />)
    const title = <h2>Erdei Kristóf</h2>
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Author />)
    const description = <p className="text-sm text-gray-700">University of Debrecen</p>
    expect(wrapper.contains(description)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Author />)
    const description = (
      <p className="text-gray-700 text-sm text-justify pt-2 mx-8">
        I am Erdei Kristóf. I grow up in Mátészalka and here finished high school then I continue my studies at the University of Debrecen. I learn Computer
        Science in here.
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })
})
