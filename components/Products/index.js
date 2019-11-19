import React from 'react';
import { Link, Router } from '../../routes';

import {
	Title,
	Container,
	SubTitle,
	Img,
	Background,
	ProductContainer,
	ProductTitle,
	Text,
	ProductDescription,
	PlaceHolder,
	ImgPlaceholder
} from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { ProductsButton } from '../Buttons/styles';

export function Products() {
	const [
		show,
		element
	] = useNearScreen();

	return (
		<Background>
			<Container id='container'>
				<Title>Handpicked Mangoes</Title>
				<SubTitle>Always in season</SubTitle>
				<PlaceHolder ref={element} id='product'>
					<ProductContainer className={show && 'trigger'}>
						<ImgPlaceholder>
							<Img width='100%' src='/static/images/mango-medium.jpg' alt='mango kent' />
						</ImgPlaceholder>
						<ProductDescription>
							<ProductTitle>Mango Kent</ProductTitle>
							<Text>
								Mango kent is a fruit with an excelent flavor, very low on carbs and fibers, and the
								widest variety of escensial minerals and vitamins
							</Text>
							<Link route='/recipes'>
								<ProductsButton>See recipes</ProductsButton>
							</Link>
						</ProductDescription>
					</ProductContainer>
				</PlaceHolder>
			</Container>
		</Background>
	);
}
