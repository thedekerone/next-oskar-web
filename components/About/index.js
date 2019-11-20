import React from 'react';
import { AboutContainer, CardContainer, Container, Title, PlaceHolder } from './styles';
import { AboutCard } from '../AboutCard';
import { AboutButton } from '../Buttons/index';

export function About() {
	return (
		<AboutContainer id='about'>
			<Container>
				<Title>Our values</Title>
				<CardContainer>
					<AboutCard
						title='Commitment to Customers'
						description='We make sure that only the best products are delivered to you'
					/>
					<AboutCard
						title='Teamwork'
						description='We work together, across boundaries, to meet the needs of our customers and to help our Company win. '
					/>
					<AboutCard
						title='Customer Commitment'
						description='We develop relationships that make a positive difference in our customers lives'
					/>
				</CardContainer>
				<AboutButton>
					Learn more <img src='/static/icons/arrow.svg' width='20px' alt='' />
				</AboutButton>
			</Container>
		</AboutContainer>
	);
}
