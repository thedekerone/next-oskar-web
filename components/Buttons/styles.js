import styled from 'styled-components'
import { Link } from '../../routes'

const mainColor = '#FB4D3D'
const secColor = '#FB4D3D'
//

export const FilledButton = styled.a`
  display: inline-block;
  padding: 0.8rem 4rem;
  color: #fff;
  background: ${mainColor};
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
  text-align: center;
  //	border-radius: 10px;
  margin: 1rem 0;

  @media (min-width: 900px) {
    width: 18rem;
    margin: 1rem;
  }
`
export const Contact = styled.div`
  display: inline-block;
  padding: 0.8rem 4rem;
  background: ${mainColor};
  width: 100%;
  border-radius: 5px;
  color: #fff;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
  text-align: center;
  border: 0;
  //	border-radius: 10px;
  margin: 1rem 0;
  background: #fb4d3d;
  width: 100%;
  margin: 0%;
  margin-top: 3rem;
`
export const BorderButton = styled.a`
  display: inline-block;
  padding: 0.8rem 4rem;
  border: 1px solid ${secColor};
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  margin: 1rem 0;
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;
  color: ${secColor};
  //	border-radius: 10px;
  &:active {
    background: ${secColor};
    color: #fff;
  }
  @media (min-width: 900px) {
    margin: 1rem;
    width: 18rem;

    &:hover {
      background: ${secColor};
      color: #fff;
    }
  }
`
export const ProductsButton = styled.a`
  display: inline-block;
  padding: 0.8rem 4rem;
  border: 1.5px solid ${secColor};
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;
  color: ${secColor};
  //	border-radius: 10px;
  &:active {
    background: ${secColor};
    color: #fff;
  }
  @media (min-width: 900px) {
    width: 18rem;

    &:hover {
      background: ${secColor};
      color: #fff;
    }
  }
`

export const About = styled(FilledButton)`
  margin: 3rem 0 0 0 !important;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: grey;
  /* background: #09BC8A; */
`
