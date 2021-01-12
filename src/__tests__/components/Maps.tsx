import { shallow } from 'enzyme'
import React from 'react'
import Maps from '../../components/Maps'

describe('Maps component', () => {
  it('should render without crashing', () => {
    shallow(<Maps />)
  })
})
