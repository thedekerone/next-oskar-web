import React, { useState, useEffect } from 'react';
import { Title, Container } from './styles';
import { Loading } from '../Loading';
import 'isomorphic-fetch';
import { RecipeCard } from '../RecipeCard';

export const Dishes = (props) => {
	const [
		recipes,
		setRecipes
	] = useState([]);
	const [
		base,
		setBase
	] = useState('');

	const [
		loading,
		setLoading
	] = useState(true);

	return (
		<div>
			{loading && <Loading />}
			<Container>
				{recipes.map((e) => {
					return <RecipeCard key={e.id} title={e.title} imageUrl={base + e.image} />;
				})}
			</Container>
		</div>
	);
};
Dishes.getInitialProps = async ({ req }) => {
	const res = await fetch(
		'https://api.spoonacular.com/recipes/search?query=mango&number=45&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1'
	);
	const data = await res.json();
	await setRecipes(data.results);
	await setBase(data.baseUri);
	await setLoading(false);
};
