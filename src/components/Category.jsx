import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { Link } from "react-router-dom";
import { mid, mobile } from "../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
	width: 100%;
	padding: 20px 30px;
	${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

const Item = styled.div`
	width: 300px;
	height: 300px;
	position: relative;
	cursor: pointer;
	border: 2px solid ${PrimaryColor};
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Title = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 60px;
	color: #ebebeb;
	${mobile({ gap: "30px" })}
	${mid({ gap: "40px" })}
`;

const Header = styled.h2`
	font-size: 35px;
	font-weight: 600;
	letter-spacing: 1px;
	text-align: center;
	text-shadow: 4px 3px ${PrimaryColor};
	${mobile({ fontSize: "24px" })}
	${mid({ fontSize: "26px" })}
`;

const Button = styled.button`
	width: 150px;
	height: 50px;
	font-size: 18px;
	font-weight: 060;
	text-transform: uppercase;
	color: white;
	background-color: ${PrimaryColor};
	border: none;
	border-radius: 10px;
	cursor: pointer;
	${mobile({ width: "120px", height: "40px", fontSize: "16px" })}
	${mid({ fontSize: "17px" })}
`;

const Category = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		async function fetchData() {
			try {
				const response = await fetch("https://fakestoreapi.com/products", { signal });
				const data = await response.json();
				setProducts(data);
				setLoading(false);
			} catch (error) {
				if (error.name === "AbortError") {
					console.log("Fetch aborted");
				} else {
					setError(error);
					setLoading(false);
				}
			}
		}
		fetchData();
		return () => controller.abort(); // Clean up the controller when the component is unmounted
	}, []);
	if (loading) return <div>Loading</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<Container>
			<h1 style={{ color: PrimaryColor, margin: "15px 0px", fontSize: "35px" }}>Categories :</h1>
			<Wrapper>
				{products
					.filter((p) => p.id === 1 || p.id === 7 || p.id === 14 || p.id === 15)
					.map((c) => (
						<Item key={c.id}>
							<Image src={c.image} />
							<Title>
								<Header>{c.category}</Header>
								<Link to={`/productslist/${c.category}`} style={{ textDecoration: "none" }}>
									<Button>Show Now</Button>
								</Link>
							</Title>
						</Item>
					))}
			</Wrapper>
		</Container>
	);
};

export default Category;
