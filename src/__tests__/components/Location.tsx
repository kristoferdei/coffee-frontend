import { shallow } from 'enzyme'
import React from 'react'
import Location from '../../components/Location'
import Maps from '../../components/Maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

describe('Location component', () => {
  it('should render without crashing', () => {
    shallow(<Location />)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Location />)
    const title = (
      <h1 id="rf" className="text-gray-800 text-4xl font-medium px-6 md:px-12 pb-4 cursor-default">
        Places
      </h1>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('should render the maps', () => {
    const wrapper = shallow(<Location />)
    const maps = <Maps />
    expect(wrapper.contains(maps)).toEqual(true)
  })

  it('should render the address', () => {
    const wrapper = shallow(<Location />)
    const address = (
      <h2 className="font-bold text-gray-800 text-xl cursor-default">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
      </h2>
    )
    expect(wrapper.contains(address)).toEqual(true)
  })

  it('should render the city', () => {
    const wrapper = shallow(<Location />)
    const city = <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Mátészalka</p>
    expect(wrapper.contains(city)).toEqual(true)
  })

  it('should render the street', () => {
    const wrapper = shallow(<Location />)
    const street = <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Bajcsy Zs. út 19.</p>
    expect(wrapper.contains(street)).toEqual(true)
  })

  it('should render the zip', () => {
    const wrapper = shallow(<Location />)
    const zip = <p className="font-medium text-base text-gray-700 pl-4 cursor-default">4700</p>
    expect(wrapper.contains(zip)).toEqual(true)
  })

  it('should render the country', () => {
    const wrapper = shallow(<Location />)
    const country = <p className="font-medium text-base text-gray-700 pl-4 cursor-default">Hungary</p>
    expect(wrapper.contains(country)).toEqual(true)
  })

  it('should render the opening', () => {
    const wrapper = shallow(<Location />)
    const opening = (
      <th className="font-bold text-gray-800 text-xl cursor-default">
        <FontAwesomeIcon icon={faClock} /> Opening hours
      </th>
    )
    expect(wrapper.contains(opening)).toEqual(true)
  })

  it('should render the monday', () => {
    const wrapper = shallow(<Location />)
    const monday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Monday</td>
    expect(wrapper.contains(monday)).toEqual(true)
  })

  it('should render the monday', () => {
    const wrapper = shallow(<Location />)
    const monday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(monday)).toEqual(true)
  })

  it('should render the tuesday', () => {
    const wrapper = shallow(<Location />)
    const tuesday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Tuesday</td>
    expect(wrapper.contains(tuesday)).toEqual(true)
  })

  it('should render the tuesday', () => {
    const wrapper = shallow(<Location />)
    const tuesday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(tuesday)).toEqual(true)
  })

  it('should render the wednesday', () => {
    const wrapper = shallow(<Location />)
    const wednesday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Wednesday</td>
    expect(wrapper.contains(wednesday)).toEqual(true)
  })

  it('should render the wednesday', () => {
    const wrapper = shallow(<Location />)
    const wednesday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(wednesday)).toEqual(true)
  })

  it('should render the thursday', () => {
    const wrapper = shallow(<Location />)
    const thursday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Thursday</td>
    expect(wrapper.contains(thursday)).toEqual(true)
  })

  it('should render the thursday', () => {
    const wrapper = shallow(<Location />)
    const thursday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(thursday)).toEqual(true)
  })

  it('should render the friday', () => {
    const wrapper = shallow(<Location />)
    const friday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Friday</td>
    expect(wrapper.contains(friday)).toEqual(true)
  })

  it('should render the friday', () => {
    const wrapper = shallow(<Location />)
    const friday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(friday)).toEqual(true)
  })

  it('should render the saturday', () => {
    const wrapper = shallow(<Location />)
    const saturday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Saturday</td>
    expect(wrapper.contains(saturday)).toEqual(true)
  })

  it('should render the saturday', () => {
    const wrapper = shallow(<Location />)
    const saturday = <td className="font-medium text-base text-gray-700 cursor-default">9:00 am - 8:00 pm</td>
    expect(wrapper.contains(saturday)).toEqual(true)
  })

  it('should render the sunday', () => {
    const wrapper = shallow(<Location />)
    const sunday = <td className="pl-4 font-bold text-base text-gray-700 cursor-default">Sunday</td>
    expect(wrapper.contains(sunday)).toEqual(true)
  })

  it('should render the sunday', () => {
    const wrapper = shallow(<Location />)
    const sunday = <td className="font-medium text-base text-gray-700 cursor-default">Closed</td>
    expect(wrapper.contains(sunday)).toEqual(true)
  })
})
