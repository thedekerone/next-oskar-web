import React from 'react';
import { Cards } from '../Cards';
import { Title, Description, Icon, Container } from './styles';
import { Agreement } from '../../static/icons';

export function AboutCard({ title = 'What we offer?', description = 'asdasd asads das dasads ads asd ads ad' }) {
	return (
		<Cards sizeW='22rem'>
			<Container>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Icon>
					<Agreement />
				</Icon>
			</Container>
		</Cards>
	);
}
