import styled from 'styled-components';

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
export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
	height: 100px;
	align-items: center;
`;
