import Announcement from "../components/Announcement";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = ({ currentUser }) => {
	return (
		<div>
			<Announcement />
			<Navbar currentUser={currentUser} />
			<Slider />
			<Category />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
