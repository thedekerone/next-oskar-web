import styled from 'styled-components';
import { showIn } from '../../static/animation';

export const Background = styled.div`background: #fceff4;`;
export const Container = styled.div`
	max-width: 1400px;
	padding: 7.5rem 3rem;
	min-height: 300px;
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h1`font-size: 1.7rem;`;
export const SubTitle = styled.span`
	display: inline-block;
	margin-top: 0.8rem;
	margin-bottom: 5rem;
`;
export const Img = styled.img`
	display: block;
	background: black;
	width: 100%;
`;
export const ProductContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	opacity: 0;
	&.trigger {
		animation: ${showIn} 0.7s ease;
		opacity: 1;
	}
	min-height: 200px;
	@media (min-width: 900px) {
		text-align: right;

		flex-direction: row;
	}
`;
export const ProductDescription = styled.div`width: 28rem;`;
export const ProductTitle = styled.h1`
	margin-bottom: 0.8rem;
	font-size: 2.5rem;
`;
export const Text = styled.span`
	display: inline-block;
	font-size: 1.2rem;
	margin-bottom: 3rem;
`;
export const PlaceHolder = styled.article`min-height: 20rem;`;

export const ImgPlaceholder = styled.div`
	background-image: url('/static/images/mango-medium-mini.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	width: 25rem;
	overflow: hidden;

	height: 18rem;
	box-shadow: 0px 10px 16px -4px rgba(0, 0, 0, 0.4);
`;
