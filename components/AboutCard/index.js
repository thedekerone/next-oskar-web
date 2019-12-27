import React from 'react';
import { Cards } from '../Cards';
import { Title, Description, Icon, Container } from './styles';

export function AboutCard({ title = 'What we offer?', description = '', children }) {
	return (
		<Cards sizeW='22rem'>
			<Container>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Icon>{children}</Icon>
			</Container>
		</Cards>
	);
}
