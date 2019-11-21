import React from 'react'
import { Container, CenterContainer } from '../SharedStyles'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { LocationContainer, LocationCenterContainer } from './styles'

export class Location extends React.Component {
  render() {
    return (
      <LocationContainer color='#f3e2a2'>
        <LocationCenterContainer>
          <h1> this is a location</h1>
          <Map
            google={this.props.google}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              maxWidth: '700px',
              boxSizing: 'border-box'
            }}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>aea </h1>
              </div>
            </InfoWindow>
          </Map>
        </LocationCenterContainer>
      </LocationContainer>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn9p-JMbMC-QUIKA6k1A3hTsYz7GjJO6w'
})(Location)
