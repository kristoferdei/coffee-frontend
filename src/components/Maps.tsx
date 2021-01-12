import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React, { Component } from 'react'

const mapStyles = {
  width: 350,
  height: 350,
  position: 'relative',
  border: 'solid #d69e2e',
}

export class MapContainer extends Component<{ google: any }> {
  render(): any {
    return (
      <Map google={this.props.google} style={mapStyles} initialCenter={{ lat: 47.95497, lng: 22.3261 }}>
        <Marker />
      </Map>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'API_KEY' })(MapContainer)
