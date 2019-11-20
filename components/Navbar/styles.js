import styled from 'styled-components';
import { slideIn, slideOut } from '../../static/animation/index';

export const NavbarContainer = styled.div`
	position: ${(props) => (props.fixed ? 'fixed' : 'absolute')};
	padding: 1rem;
	left: 0;
	z-index: 100;
	right: 0;
	background: ${(props) => props.background || 'transparent'};
	& ul a {
		color: ${(props) => props.color || '#f2f2f2'};
	}
	box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.6);
	margin: 0 auto;
	box-sizing: border-box;
	width: 100%;
`;

export const NavbarContainerFixed = styled.div`
	position: fixed;
	padding: 1rem;
	left: 0;
	z-index: 100;
	animation-fill-mode: forwards;
	color: #2c2c2c;

	// null is added as an extra parameter, so the animation doesn't trigger at the first render

	animation: ${slideOut} 1s ease ${(props) => (props.show || props.show === null ? 'pause' : 'running')};
	animation: ${slideIn} 1s ease ${(props) => (!props.show ? 'pause' : 'running')};

	top: ${(props) => (props.show ? '0' : '-20%')};
	right: 0;
	background: #fff;
	box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
	margin: 0 auto;
	box-sizing: border-box;
	width: 100%;
`;

export const NavbarContent = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const List = styled.ul`
	display: none;
	width: 23rem;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 900px) {
		display: flex;
	}
`;
export const ListItem = styled.a`
	font-size: 0.9rem;
	cursor: pointer;
	text-align: center;
	width: 4.5rem;
	&:hover {
		font-weight: bold;
		color: #fb4d3d;
	}
`;
export const Title = styled.a`
	font-size: 1.5rem;
	position: relative;
	font-weight: bold;
	cursor: pointer;
	color: #fb4d3d;
	&:after {
		content: '';
		position: absolute;
		width: 30%;
		height: 2.5px;
		background: #fb4d3d;
		bottom: -2px;
		left: 0;
	}
`;
