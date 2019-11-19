import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { RecipeCard } from '../components/RecipeCard';
import { Loading } from '../components/Loading';
import { GlobalStyles } from '../GlobalStyles';
import { Layout } from '../components/Layout';
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

	console.log(props);
	return (
		<div>
			<Layout background='white' color='#2c2c2c'>
				<Container>
					{props.data.map((e) => {
						return <RecipeCard key={e.id} title={e.title} imageUrl={props.base + e.image} />;
					})}
				</Container>
			</Layout>
		</div>
	);
}

Dishes.getInitialProps = async ({ req }) => {
	const res = await fetch(
		'https://api.spoonacular.com/recipes/search?query=mango&number=45&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1'
	);
	const json = await res.json();
	return { data: json.results, base: json.baseUri };
};

export default Dishes;
