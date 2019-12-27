import React from 'react';
import { Container, Modal } from './styles';

export const ModalMessage = () => {
	return (
		<React.Fragment>
			<Container>
				<Modal>
					<img width='150px' src='/static/icons/checked.png' alt='' />
					<h2>Email Sent</h2>
				</Modal>
			</Container>
		</React.Fragment>
	);
};
