import styled from 'styled-components'
import { Container, CenterContainer } from '../SharedStyles'

export const LocationContainer = styled(Container)`
  position: relative;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  color: #f2f2f2;
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

  /* 100% width for the map and description components*/
  /* map api can't be customized using styled components */

  & div {
    width: 100%;
  }

  @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  @media (min-width: 900px) {
    align-items: flex-end;
    margin-left: 9rem;
    margin-bottom: 0;
  }
`
export const DescriptionTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: #f2f2f2;
`
export const Text = styled.span`
  color: #f2f2f2;
  text-align: left;
  @media (min-width: 900px) {
    text-align: right;
  }
`
