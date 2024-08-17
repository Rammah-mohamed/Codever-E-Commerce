import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import Welcome from "./pages/Welcome";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setCurrentUser(currentUser);
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		// Cleanup the subscription on unmount
		return () => unsubscribe();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login user={user} setUser={setUser} />} />
				<Route path="/register" element={<Register user={user} setUser={setUser} />} />
				<Route path="/Home" element={<Home currentUser={currentUser} />} />
				<Route path="/productslist/:category" element={<ProductsList />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart user={user} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
