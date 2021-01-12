import { shallow } from 'enzyme'
import React from 'react'
import Success from '../../components/Success'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Success component', () => {
  it('should render without crashing', () => {
    shallow(<Success />)
  })

  it('should render the icon', () => {
    const wrapper = shallow(<Success />)
    const icon = <FontAwesomeIcon size="2x" icon={faCheckCircle} />
    expect(wrapper.contains(icon)).toEqual(true)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Success />)
    const title = (
      <h2 id="rf" className="text-2xl font-bold text-white pb-4 cursor-default">
        Successful purchase!
      </h2>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the description', () => {
    const wrapper = shallow(<Success />)
    const description = (
      <p className="leading-tight pt-8 text-white text-justify cursor-default">
        Your order has been placed and we will contact you shortly. Thank you for choosing us. We look forward to seeing you again next time!
      </p>
    )
    expect(wrapper.contains(description)).toEqual(true)
  })
})
