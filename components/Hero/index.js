import React from 'react';
import { HeroContainer, Img, Container, ImgContainer, MainText, SecondatyText } from './styles';
import { MainButton, SecondaryButton } from '../Buttons';

export function Hero() {
	return (
		<HeroContainer>
			<ImgContainer>
				<Img src='/static/images/mango-kent.jpg' alt='hero image' />
			</ImgContainer>
			<Container>
				<MainText>We bring you the fresher mangoes of the region</MainText>
				<SecondatyText>
					Enjoy the most delicious fruit of the market and learn all the delicious dishes you can make with
					them
				</SecondatyText>
				<div>
					<MainButton href='#contact'>Contact us</MainButton>
					<SecondaryButton href='#products'>See products</SecondaryButton>
				</div>
			</Container>
		</HeroContainer>
	);
}
