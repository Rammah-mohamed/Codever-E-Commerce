import { useEffect, useRef } from "react";

const usePersistentRef = (key, initialValue) => {
	const ref = useRef(initialValue);

	useEffect(() => {
		const storedValue = localStorage.getItem(key);
		if (storedValue !== null) {
			ref.current = JSON.parse(storedValue);
		}
	}, [key]);

	const setRef = (value) => {
		ref.current = value;
		localStorage.setItem(key, JSON.stringify(value));
	};

	return [ref, setRef];
};

export default usePersistentRef;
