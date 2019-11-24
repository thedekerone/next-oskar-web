import React from 'react';
import { Img, Title, ImgContainer } from './style';
import { Cards } from '../Cards';
import { Link, Router } from '../../routes';

export function RecipeCard({ imageUrl, title }) {
	return (
		<Cards size='17rem'>
			<ImgContainer>
				<Img src={imageUrl} alt='recipe image' />
			</ImgContainer>
			<Title>{title}</Title>
		</Cards>
	);
}
