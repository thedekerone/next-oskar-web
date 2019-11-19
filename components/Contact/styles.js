import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #f2eff9;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 4rem;
	color: #fb4d3d;
`;
export const FormContainer = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 9rem 3rem;
	justify-content: space-between;
	@media (min-width: 900px) {
		flex-direction: row;
	}
`;
export const Form = styled.form`
	flex-shrink: 1;
	width: 100%;
	max-width: 50rem;

	margin-bottom: 7rem;
	box-sizing: border-box;
	@media (min-width: 900px) {
		margin-bottom: 0;
		max-width: 30rem;
	}
`;
export const Label = styled.label`
	box-sizing: border-box;
	display: block;
	margin-bottom: 1rem;
	margin-top: 2rem;
	font-size: 1.25rem;
`;
export const Input = styled.input`
	padding: 0.4rem;
	box-sizing: border-box;
	border: 0;
	width: 100%;
	border-bottom: 1px solid #2c2c2c;
	box-sizing: border-box;
	background: #f2eff9;
`;
export const Img = styled.img`
	max-width: 37rem;
	width: 100%;
`;
