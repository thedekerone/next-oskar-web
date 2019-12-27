import { useState, useEffect } from 'react';

export const useShowModal = () => {
	const [
		showModal,
		setShowModal
	] = useState(false);

	const wait = (time, callback) => {
		setTimeout(() => {
			callback(false);
		}, time);
	};

	useEffect(() => {
		if (showModal) {
			wait(1500, setShowModal);
		}
	});

	return [
		showModal,
		setShowModal
	];
};
