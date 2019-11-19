import React from 'react';
import { Cards } from '../Cards';
import { Title, Description, Icon, Container } from './styles';
import { Agreement } from '../../static/icons';

export function AboutCard() {
	return (
		<Cards sizeW='22rem'>
			<Container>
				<Title>What we offer?</Title>
				<Description>asdasd asads das dasads ads asd ads ads</Description>
				<Icon>
					<Agreement />
				</Icon>
			</Container>
		</Cards>
	);
}
