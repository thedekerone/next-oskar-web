import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 3rem;
	margin-bottom: 5rem;
	color: #fff;
`;

export const AboutContainer = styled.div`
	background: #2e2d4d;

	width: 100%;
`;
export const Container = styled.div`
	max-width: 1400px;
	width: 100%;
	box-sizing: border-box;
	height: 100%;
	padding: 5rem 3rem;
	margin: 0 auto;

	align-items: center;
`;
export const CardContainer = styled.div`
	display: flex;
	min-height: 200px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media (min-width: 700px) {
		flex-direction: row;
	}
`;

export const Cards = styled.div``;
