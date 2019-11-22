import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import {
  LocationContainer,
  LocationCenterContainer,
  Title,
  FlexContainer,
  Description,
  DescriptionTitle,
  Text
} from './styles'
import { MainButton, AboutButton } from '../Buttons'

export class Location extends React.Component {
  render() {
    return (
      <LocationContainer color='#C5C4F2'>
        <LocationCenterContainer>
          <Title>Location</Title>
          <FlexContainer>
            <Map
              google={this.props.google}
              style={{
                width: '100%',
                height: '400px',
                position: 'relative',
                maxWidth: '700px',
                boxSizing: 'border-box'
              }}
              initialCenter={{
                lat: -9.509646,
                lng: -77.995859
              }}
              zoom={15}
              className={'maps'}
              onClick={this.onMapClicked}
            >
              <Marker onClick={this.onMarkerClick} name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>Yautan</h1>
                </div>
              </InfoWindow>
            </Map>
            <Description>
              <DescriptionTitle>Yautan</DescriptionTitle>

              <Text>
                The Yaután District is one of four belonging to the Province of
                Casma, in the Department of Ancash in Peru. The capital of the
                town of Yaután with a population of 3042 inhabitants, is located
                about 42 km southeast of the city of Casma and 806 meters above
                sea level. It is the highest district in the province. Yaután is
                a town hidden among the mountains, full of valleys and varied
                fruit trees (it is famous producer of avocados and mangoes).
              </Text>
              <AboutButton>Learn more</AboutButton>
            </Description>
          </FlexContainer>
        </LocationCenterContainer>
      </LocationContainer>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn9p-JMbMC-QUIKA6k1A3hTsYz7GjJO6w'
})(Location)
