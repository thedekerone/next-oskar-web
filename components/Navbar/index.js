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
import { slideIn } from '../../static/animation'

export function Navbar({
  position,
  color = '#f2f2f2',
  background = 'transparent'
}) {
  const [show] = useShowOnScroll(position)

  return (
    <>
      <NavbarContainerFixed show={show}>
        <NavbarContent>
          <Link route='/'>
            <Title>Agricola Oskar</Title>
          </Link>
          <List>
            <Link route='/'>
              <ListItem>Home</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>Contact</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>About</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>Products</ListItem>
            </Link>
          </List>
        </NavbarContent>
      </NavbarContainerFixed>

      <NavbarContainer background={background} color={color}>
        <NavbarContent>
          <Link route='/'>
            <Title>Agricola Oskar</Title>
          </Link>
          <List>
            <Link route='/'>
              <ListItem>Home</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>Contact</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>About</ListItem>
            </Link>
            <Link route='/'>
              <ListItem>Products</ListItem>
            </Link>
          </List>
        </NavbarContent>
      </NavbarContainer>
    </>
  )
}
