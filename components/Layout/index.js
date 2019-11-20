import React from 'react';
import { Navbar } from '../Navbar';
import { GlobalStyles } from '../../GlobalStyles';

export function Layout({ background, color, children, position, fixed }) {
	return (
		<div>
			<GlobalStyles />
			<Navbar background={background} color={color} fixed={fixed} position={position} />
			{children}
		</div>
	);
}
