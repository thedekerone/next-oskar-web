import React, { useState, useEffect } from 'react';

export function useFetchApi(
	api = `https://api.spoonacular.com/recipes/search?query=mango&number=15&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1`
) {
	const [
		data,
		setData
	] = useState({});
	const [
		loading,
		setLoading
	] = useState(true);

	const handleClick = (newApi) => {
		setLoading(true);
		fetch(newApi).then((res) => res.json()).then((data) => {
			setData(data);
			setLoading(false);
		});
	};

	useEffect(() => {
		fetch(api).then((res) => res.json()).then((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);
	return [
		data,
		loading,
		handleClick
	];
}
