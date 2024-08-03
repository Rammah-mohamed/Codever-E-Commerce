import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop/>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Home />} />
				<Route path="/productslist/:category" element={<ProductsList />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
