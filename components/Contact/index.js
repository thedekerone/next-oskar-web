import React from 'react';
import { Label, Input, Title, Img, Form, FormContainer } from './styles';
import { ContactButton } from '../Buttons';
import { Container } from '../SharedStyles';
import { ModalMessage } from '../ModalMessage';
import { useShowModal } from '../../hooks/useShowModal';

export function Contact() {
	const [
		show,
		setShow
	] = useShowModal();

	return (
		<Container color='#fceff4' id='contact'>
			{show && <ModalMessage />}
			<FormContainer>
				<Form>
					<Title>Get in contact</Title>

					<div>
						<Label htmlFor='email'>Email:</Label>
						<Input type='text' name='email' />
					</div>
					<div>
						<Label htmlFor='name'>Name:</Label>
						<Input type='text' name='name' />
					</div>
					<div>
						<Label htmlFor='lastname'>Last name:</Label>
						<Input type='text' name='Lastname' />
					</div>
					<div>
						<Label htmlFor='phone'>Phone:</Label>
						<Input type='text' name='phone' />
					</div>
					<div
						onClick={() => {
							console.log('working');
							setShow(true);
						}}>
						<ContactButton>Send</ContactButton>
					</div>
				</Form>
				<Img src='/static/images/Contact.svg' width='500px' alt='' />
			</FormContainer>
		</Container>
	);
}
