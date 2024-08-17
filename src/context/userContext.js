import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				setCurrentUser(user);
			},
			(error) => {
				console.log("Auth Error", error);
			}
		);
		return unsubscribe; // Clean up function when component unmounts to avoid memory leaks.
	}, []);

	return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};
export default UserContext;
