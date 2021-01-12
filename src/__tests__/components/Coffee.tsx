import { shallow } from 'enzyme'
import Coffee from '../../components/Coffee'
import React from 'react'

describe('Coffee component', () => {
  it('should render without crashing', () => {
    shallow(<Coffee />)
  })
})
