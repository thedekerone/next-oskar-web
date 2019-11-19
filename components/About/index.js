import React from 'react';
import { AboutContainer, CardContainer, Container, Title, PlaceHolder } from './styles';
import { AboutCard } from '../AboutCard';

export function About() {
	return (
		<AboutContainer>
			<Container>
				<Title>Our mission</Title>
				<CardContainer>
					<AboutCard />
					<AboutCard />
					<AboutCard />
				</CardContainer>
			</Container>
		</AboutContainer>
	);
}
