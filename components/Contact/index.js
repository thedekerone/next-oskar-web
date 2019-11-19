import React from 'react';
import { FormContainer, Label, Container, Input, Title, Img, Form } from './styles';
import { ContactButton } from '../Buttons';

export function Contact() {
	return (
		<Container>
			<FormContainer>
				<Form>
					<Title>Get in contact</Title>

					<div>
						<Label htmlFor='email'>Email:</Label>
						<Input type='text' name='email' id='aea' />
					</div>
					<div>
						<Label htmlFor='name'>Name:</Label>
						<Input type='text' name='name' id='aea' />
					</div>
					<div>
						<Label htmlFor='lastname'>Last name:</Label>
						<Input type='text' name='Lastname' id='aea' />
					</div>
					<div>
						<Label htmlFor='phone'>Phone:</Label>
						<Input type='text' name='phone' id='aea' />
					</div>
					<ContactButton>Send</ContactButton>
				</Form>
				<Img src='/static/images/Contact.svg' width='500px' alt='' />
			</FormContainer>
		</Container>
	);
}
