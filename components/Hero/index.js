import React from 'react';
import { HeroContainer, Img, Container, ImgContainer, MainText, SecondatyText } from './styles';
import { MainButton, SecondaryButton } from '../Buttons';

export function Hero() {
	return (
		<HeroContainer>
			<ImgContainer>
				<Img src={require('../../static/images/mango-kent.jpg?webp')} alt='hero image' />
			</ImgContainer>
			<Container>
				<MainText>We bring you the fresher mangoes of the region</MainText>
				<SecondatyText>
					Enjoy the most delicious fruit of the market and learn all the delicious dishes you can make with
					them
				</SecondatyText>
				<div>
					<MainButton>Contact us</MainButton>
					<SecondaryButton>See gallery</SecondaryButton>
				</div>
			</Container>
		</HeroContainer>
	);
}
