import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { RecipeCard } from '../components/RecipeCard';
import { Loading } from '../components/Loading';
import { Layout } from '../components/Layout';
import { Link } from '../routes';
import styled from 'styled-components';
import 'isomorphic-fetch';

export const Title = styled.h1`
	color: black;
	font-size: 2.5rem;
`;
export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	max-width: 1400px;
	display: grid;
	margin: 0 auto;
	padding: 7rem 1rem;
	grid-template-rows: auto;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	gap: 2rem 0;
	@media (min-width: 900px) {
		gap: 2rem;
	}
`;

function Dishes(props) {
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

	useEffect(() => {
		fetch(
			'https://api.spoonacular.com/recipes/search?query=mango&number=45&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1'
		)
			.then((res) => res.json())
			.then((data) => {
				setBase(data.baseUri);
				setRecipes(data.results);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<Layout fixed={true} background='white' color='#2c2c2c'>
				{loading ? (
					<Loading />
				) : (
					<Container>
						{recipes.map((e) => {
							return <RecipeCard key={e.id} title={e.title} imageUrl={base + e.image} />;
						})}
					</Container>
				)}
			</Layout>
		</div>
	);
}
export default Dishes;
