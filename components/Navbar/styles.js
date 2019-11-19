import styled from 'styled-components';

export const NavbarContainer = styled.div`
	position: absolute;
	padding: 1rem;
	left: 0;
	z-index: 100;
	right: 0;
	background: ${(props) => props.background || 'transparent'};
	& ul li {
		color: ${(props) => props.color || '#f2f2f2'};
	}
	box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
	margin: 0 auto;
	box-sizing: border-box;
	width: 100%;
	${(props) =>
		props.filled
			? ` background: #fff;

  position: fixed;
  & ul li {
    color: #2c2c2c;
  }`
			: null};
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
export const ListItem = styled.li`
	font-size: 0.9rem;
	cursor: pointer;
	text-align: center;
	width: 4.5rem;
	&:hover {
		font-weight: bold;
		color: #fb4d3d;
	}
`;
export const Title = styled.h1`
	font-size: 1.5rem;
	position: relative;
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
