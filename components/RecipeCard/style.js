import styled from 'styled-components';

export const ImgContainer = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	display: flex;
	align-items: center;
	padding-top: 65%;
	overflow: hidden;
`;

export const Img = styled.img`
	width: 100%;
	top: 0;
	object-fit: cover;
	position: absolute;
`;
export const Title = styled.h1`
	width: 100%;
	font-size: .8rem;
	padding: .5rem .4rem;
	box-sizing: border-box;
`;
