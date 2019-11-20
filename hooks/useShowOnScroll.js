import React, { useEffect, useState } from 'react';

export function useShowOnScroll(position) {
	//show was initialize as null to add extra functionality
	// see example of navbar style

	const [
		show,
		setShow
	] = useState(null);
	useEffect(() => {
		if (window.scrollY > (!position ? window.innerHeight - 300 : position)) {
			setShow(true);
		}
		window.addEventListener('scroll', () => {
			if (window.scrollY > (!position ? window.innerHeight - 300 : position)) {
				setShow(true);
			} else if (show === true) {
				setShow(false);
			}
		});
	});
	return [
		show
	];
}
