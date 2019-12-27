import React from 'react';
import { CardContainer, Title, PlaceHolder } from './styles';
import { Container, CenterContainer } from '../SharedStyles';
import { AboutCard } from '../AboutCard';

import { AboutButton } from '../Buttons/index';

export function About() {
	return (
		<Container color='#2e2d4d' id='about'>
			<CenterContainer>
				<Title>About us</Title>
				<CardContainer>
					<AboutCard
						title='Commitment to Customers'
						description='We make sure that only the best products are delivered to you.'>
						<img src='static/icons/handshake.png' width='100px' alt='' />
					</AboutCard>
					<AboutCard
						title='Teamwork'
						description='We work together, across boundaries, to meet the needs of our customers and to help our Company win. '>
						<img src='static/icons/teamwork.png' width='100px' alt='' />
					</AboutCard>
					<AboutCard
						title='Make a Difference'
						description='We develop relationships that make a positive difference in our customers lives.'>
						<img src='static/icons/relas.png' width='100px' alt='' />
					</AboutCard>
				</CardContainer>

				{/* Needs Link */}
				{/* <AboutButton>
          Learn more <img src='/static/icons/arrow.svg' width='20px' alt='' />
        </AboutButton> */}
			</CenterContainer>
		</Container>
	);
}
