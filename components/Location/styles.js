import styled from 'styled-components'
import { Container, CenterContainer } from '../SharedStyles'

export const LocationContainer = styled(Container)`
  position: relative;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`
export const LocationCenterContainer = styled(CenterContainer)`
  position: relative;

  & .maps {
    position: relative !important;
  }
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media (min-width: 1100px) {
    align-items: center;
    flex-direction: row;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  width: 100%;
  @media (min-width: 1100px) {
    align-items: flex-end;
  }
`
export const DescriptionTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
`
export const Text = styled.span`
  text-align: right;
`
