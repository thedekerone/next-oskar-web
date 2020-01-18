import styled from 'styled-components'

export const MosaicContainer = styled.div`
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  cursor: pointer;

  &:hover img {
    transform: scale(1.3);
    filter: brightness(60%);
  }
`

export const Image = styled.img`
  width: 100%;
  transition-duration: 0.7s;
  will-change: transform;
`
