import React from 'react';
import { FilledButton, BorderButton, Contact, About } from './styles';

export function MainButton(props) {
	return <FilledButton>{props.children}</FilledButton>;
}
export function SecondaryButton(props) {
	return <BorderButton>{props.children}</BorderButton>;
}
export function ContactButton(props) {
	return <Contact className='contact'>{props.children}</Contact>;
}
export function AboutButton(props) {
	return <About>{props.children}</About>;
}
