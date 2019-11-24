import styled from 'styled-components';

import { fadeIn } from '../../static/animation/index';
export const HeroContainer = styled.div`
	width: 100%;
	height: 80vmax;
	position: relative;
	overflow: hidden;

	@media (min-width: 900px) {
		height: 43vmax;
	}
`;

export const ImgContainer = styled.picture`
	top: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: -2;
`;
export const Img = styled.img`
	z-index: -1;
	object-fit: cover;
	height: 100%;
	width: 100%;
	animation: ${fadeIn} 1.2s ease;
	@media (min-width: 900px) {
		height: auto;
	}
`;
export const Source = styled.source`
	z-index: -1;
	object-fit: cover;
	height: 100%;
	width: 100%;
	animation: ${fadeIn} 1.2s ease;
`;

export const Container = styled.div`
	max-width: 1150px;
	padding: 0 2rem;
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const MainText = styled.h1`
	font-size: 2.9rem;
	color: #fff;
`;
export const SecondatyText = styled.span`
	color: #f2f2f2;
	font-size: 1.5rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
`;
