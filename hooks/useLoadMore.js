import React, { useState, useEffect } from 'react';
import { useFetchApi } from './useFetchApi';

export function useLoadMore() {
	const [
		total,
		setTotal
	] = useState(12);
	const getUrl = (total) => {
		return `https://api.spoonacular.com/recipes/search?query=mango&number=${total}&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1`;
	};
	const getHigher = () => {
		setTotal(total + 12);
	};
	useEffect(() => {
		setTotal(total + 12);
	}, []);
	return [
		getUrl(total),
		getHigher
	];
}
