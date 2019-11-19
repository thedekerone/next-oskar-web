import React from 'react';

import { Container, Title, Description, Icon, PlaceHolder } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

export function Cards({ children, size, sizeW }) {
	const [
		show,
		element
	] = useNearScreen();

	return (
		<PlaceHolder size={size} sizeW={sizeW} className={show && 'trigger'} ref={element}>
			{children}
		</PlaceHolder>
	);
}
