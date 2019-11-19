import React from 'react';
import { NavbarContainer, List, Title, ListItem, NavbarContent } from './styles';
import { useShowOnScroll } from '../../hooks/useShowOnScroll';
import { Link, Router } from '../../routes';

export function Navbar({ position, color = '#f2f2f2', background = 'transparent' }) {
	const [
		show
	] = useShowOnScroll(position);

	return (
		<NavbarContainer background={background} color={color} filled={show ? true : false}>
			<NavbarContent>
				<Link route='/'>
					<Title>Fundo Oskar</Title>
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
	);
}
