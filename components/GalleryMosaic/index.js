import React from 'react'
import { MosaicContainer, Image, ImageContainer } from './styles'

import path from 'path'

const testImages = [
  'IMG_20200102_124444.jpg',
  'IMG_20200102_124510.jpg',
  'IMG_20200102_124730.jpg',
  'IMG_20200102_125225.jpg',
  'IMG_20200102_125439.jpg',
  'IMG_20200102_125502.jpg',
  'IMG_20200102_125558.jpg',
  'IMG_20200102_125609.jpg',
  'IMG_20200102_125700.jpg',
  'IMG_20200102_125502.jpg',
  'IMG_20200102_125854.jpg',
  'IMG_20200102_125935.jpg'
]

export const GalleryMosaic = () => {
  console.log(path.resolve(__dirname + 'gallery'))
  return (
    <MosaicContainer>
      {testImages.map((element, index) => {
        return (
          <ImageContainer key={index}>
            <Image src={'static/gallery/' + element}></Image>
          </ImageContainer>
        )
      })}
    </MosaicContainer>
  )
}
