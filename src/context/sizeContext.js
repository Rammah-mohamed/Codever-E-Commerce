import { createContext, useState } from "react";

const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
	const [size, setSize] = useState("");

	return <SizeContext.Provider value={{ size, setSize }}>{children}</SizeContext.Provider>;
};

export default SizeContext;
