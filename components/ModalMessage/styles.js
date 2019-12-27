import styled from 'styled-components';
import { showIn } from '../../static/animation';

export const Container = styled.div`
	position: fixed;
	z-index: 200;
	width: 100vw;
	top: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	background: rgba(0, 0, 0, .3);
	align-items: center;
`;

export const Modal = styled.div`
	max-width: 30rem;
	border-radius: 10px;
	animation: ${showIn} .4s ease;
	height: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: white;
	width: 95%;
`;
