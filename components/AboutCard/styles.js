import styled from 'styled-components';

export const Title = styled.h1`
	text-align: center;
	font-size: ${(props) => props.titleSize || '1.7rem'};
	margin-bottom: 1rem;
`;
export const Description = styled.span`
	font-size: 1.1rem;
	text-align: center;
`;
export const Icon = styled.div`margin-top: 3rem;`;
export const Container = styled.div`
	width: 100%;
	height: 30rem;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
`;
