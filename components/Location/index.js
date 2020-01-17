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
import MapGoogle from '../MapGoogle'

export class Location extends React.Component {
  render() {
    return (
      <LocationContainer color='#2e2d4d'>
        <LocationCenterContainer>
          <Title>Location</Title>
          <FlexContainer>
            <MapGoogle />

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
