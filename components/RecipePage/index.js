import React, { useState, useEffect } from 'react';
import { RecipeCard } from '../RecipeCard';
import { Loading } from '../Loading';
import { Layout } from '../Layout';
import 'isomorphic-fetch';
import { AboutButton } from '../Buttons';
import { useFetchApi } from '../../hooks/useFetchApi';
import { useLoadMore } from '../../hooks/useLoadMore';
import { Title, Container, Center } from './styles';

export function RecipePage(props) {
	const [
		newApi,
		getHigher
	] = useLoadMore();

	const [
		data,
		loading,
		handleClick
	] = useFetchApi(newApi);
	return (
		<div>
			<Layout fixed={true} background='white' color='#2c2c2c'>
				<Container>
					{data.results &&
						data.results.map((e) => {
							return <RecipeCard key={e.id} title={e.title} imageUrl={data.baseUri + e.image} />;
						})}
				</Container>

				{
					<Center
						onClick={() => {
							getHigher();
							handleClick(newApi);
						}}>
						{loading ? <Loading /> : <AboutButton>Load more</AboutButton>}
					</Center>
				}
			</Layout>
		</div>
	);
}
