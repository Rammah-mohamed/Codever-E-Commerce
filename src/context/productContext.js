import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	// Function to get initial state from localStorage
	const getInitialState = () => {
		const savedState = localStorage.getItem("appState");
		return savedState ? JSON.parse(savedState) : [];
	};

	// Use state with initial value from localStorage
	const [value, setValue] = useState(getInitialState);

	// Effect to save state to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("appState", JSON.stringify(value));
	}, [value]);

	return <ProductContext.Provider value={{ value, setValue }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
