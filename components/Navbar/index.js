import React from 'react'
import {
  NavbarContainer,
  List,
  Title,
  ListItem,
  NavbarContent,
  NavbarContainerFixed
} from './styles'
import { useShowOnScroll } from '../../hooks/useShowOnScroll'
import { Link, Router } from '../../routes'



export function Navbar({
  position,
  color = '#f2f2f2',
  background = 'transparent',
  fixed=false
}) {
  const [show] = useShowOnScroll(position)

  return (
    <>
    {!fixed&&<NavbarContainerFixed show={show}>
        <NavbarContent>
          <Link route='/'>
            <Title>Agricola Oskar</Title>
          </Link>
          <List>
            <Link route='/'>
              <ListItem>Home</ListItem>
            </Link>
            <Link route='/#products'>
              <ListItem>Products</ListItem>
            </Link>
            <Link route='/#about'>
              <ListItem>About</ListItem>
            </Link>
            <Link route='/#contact'>
              <ListItem>Contact</ListItem>
            </Link>
          </List>
        </NavbarContent>
      </NavbarContainerFixed>}
      

      <NavbarContainer background={background} fixed={fixed} color={color}>
        <NavbarContent>
        <Link route='/'>
            <Title>Agricola Oskar</Title>
          </Link>
          <List>
            <Link route='/'>
              <ListItem>Home</ListItem>
            </Link>
            <Link route='/#products'>
              <ListItem>Products</ListItem>
            </Link>
            <Link route='/#about'>
              <ListItem>About</ListItem>
            </Link>
            <Link route='/#contact'>
              <ListItem>Contact</ListItem>
            </Link>
          </List>
        </NavbarContent>
      </NavbarContainer>
    </>
  )
}
