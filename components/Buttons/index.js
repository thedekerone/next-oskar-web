import React from 'react';
import { FilledButton, BorderButton, Contact, About } from './styles';

export function MainButton(props) {
	return <FilledButton href={props.href}>{props.children}</FilledButton>;
}
export function SecondaryButton(props) {
	return <BorderButton href={props.href}>{props.children}</BorderButton>;
}
export function ContactButton(props) {
	return <Contact>{props.children}</Contact>;
}
export function AboutButton(props) {
	return <About>{props.children}</About>;
}
