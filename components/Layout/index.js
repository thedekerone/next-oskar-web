import React from 'react';
import { Navbar } from '../Navbar';
import { GlobalStyles } from '../../GlobalStyles';

export function Layout(props) {
	return (
		<div>
			<GlobalStyles />
			<Navbar background={props.background} color={props.color} />
			{props.children}
		</div>
	);
}
