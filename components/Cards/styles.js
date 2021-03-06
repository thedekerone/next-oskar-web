import styled from 'styled-components';
import { showIn } from '../../static/animation';

export const Container = styled.div`height: ${(props) => props.size || '10rem'};`;

export const PlaceHolder = styled.article`
	background: #fff;
	box-sizing: border-box;
	width: 100%;
	position: relative;
	opacity: 0;

	min-height: ${(props) => props.size || '30rem'};
	&.trigger {
		animation: ${showIn} 0.7s ease;
		opacity: 1;
	}
	margin: 1rem 0;

	align-items: center;
	box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, .3);
	border-radius: 5px;
	@media (min-width: 900px) {
		margin: 0;

		width: ${(props) => props.sizeW || '100%'};
	}
`;
