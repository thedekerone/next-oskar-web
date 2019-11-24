import React from 'react';
import { HeroContainer, Img, Container, ImgContainer, MainText, SecondatyText, Source } from './styles';
import { MainButton, SecondaryButton } from '../Buttons';
import { useNearScreen } from '../../hooks/useNearScreen';

export function Hero() {
	const [
		show,
		element
	] = useNearScreen();
	return (
		<HeroContainer>
			<ImgContainer ref={element}>
				{show ? (
					<Source srcSet={require('../../static/images/mango-kent.jpg?webp')} width='100%' />
				) : (
					<Source srcSet={require('../../static/images/mango-kent.jpg?lqip')} width='100%' />
				)}

				<Img src={require('../../static/images/mango-kent.jpg')} alt='hero image' />
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
