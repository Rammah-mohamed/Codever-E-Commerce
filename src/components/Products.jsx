import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { mobile, small } from "../responsive";
import { useContext, useEffect, useState } from "react";
import { PrimaryColor } from "../Variables";
import { useDispatch } from "react-redux";
import { increament } from "../state/counterSlice";
import ProductContext from "../context/productContext";
import { IconButton } from "@mui/material";

const Container = styled.div`
	width: 100%;
	padding: 20px 30px;
	${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	${mobile({ flexDirection: "column" })}
`;

const Item = styled.div`
	width: 48%;
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 20px;
	border: 2px solid ${PrimaryColor};
	cursor: pointer;
	${mobile({ flexDirection: "column", width: "100%" })}
	${small({ flexDirection: "column", width: "100%" })}
`;

const ImgContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ width: "40%", height: "40%" })}
	${small({ width: "60%", height: "60%" })}
`;

const Info = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const Title = styled.h2`
	max-width: 500px;
	font-size: 35px;
	color: ${PrimaryColor};
	font-weight: 300;
	letter-spacing: 2px;
	${mobile({ fontSize: "24px" })}
	${small({ fontSize: "30px" })}
`;

const Desc = styled.p`
	max-width: 400px;
	font-size: 18px;
	font-weight: 400;
	text-align: justify;
	${mobile({ fontSize: "16px" })}
	${small({ fontSize: "16px" })}
`;

const Price = styled.span`
	font-size: 30px;
	font-weight: 500;
	letter-spacing: 1px;
	${mobile({ fontSize: "24px" })}
	${small({ fontSize: "26px" })}
`;

const Icons = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ gap: "14px" })}
`;

const Icon = styled.div`
	width: 45px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	padding: 10px;
	border-radius: 50%;
	background-color: ${PrimaryColor};
	transition: all 1s ease;
	cursor: "pointer";
	&:hover {
		background-color: #184055;
	}
	${mobile({ width: "40px", height: "40px" })}
`;

const Products = ({ category }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { value, setValue } = useContext(ProductContext);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let existed;

	const handleClick = (product) => {
		navigate(`/product/${product.id}`);
		existed = value?.some((p) => p.id === product.id);
		if (!existed) {
			dispatch(increament());
		}

		setValue((prevOrders) => {
			const exists = prevOrders.some((order) => order.id === product.id);

			if (!exists) {
				return [...prevOrders, product];
			}

			return prevOrders;
		});
	};

	const handleRoute = (event, product) => {
		event.stopPropagation();
		existed = value?.some((p) => p.id === product.id);
		if (!existed) {
			dispatch(increament());
		}

		setValue((prevOrders) => {
			const exists = prevOrders.some((order) => order.id === product.id);

			if (!exists) {
				return [...prevOrders, product];
			}

			return prevOrders;
		});
	};

	useEffect(() => {
		let isSubscribed = true;
		async function fetchData() {
			try {
				let response;
				if (category !== undefined) {
					response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
				} else {
					response = await fetch("https://fakestoreapi.com/products");
				}
				const data = await response.json();
				if (isSubscribed) {
					setProducts(data.map((p) => ({ ...p, quantity: 1 })));
					setLoading(false);
				}
			} catch (error) {
				if (isSubscribed) {
					setError(error);
					setLoading(false);
				}
			}
		}
		fetchData();
		return () => {
			isSubscribed = false;
		};
	}, [category]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<Container>
			<h1 style={{ color: PrimaryColor, margin: "15px 0px", fontSize: "35px" }}>Products :</h1>
			<Wrapper>
				{products.map((p) => (
					<Item key={p.id} onClick={() => handleClick(p)}>
						<ImgContainer>
							<Image src={p.image} alt={p.name} />
						</ImgContainer>
						<Info>
							<Title>{p.title.slice(0, 55)}...</Title>
							<Desc>{p.description.slice(0, 250)}</Desc>
							<Icons>
								<Icon>
									<IconButton onClick={(e) => e.stopPropagation()}>
										<SearchIcon style={{ color: "white" }} />
									</IconButton>
								</Icon>
								<Icon>
									<IconButton onClick={(e) => handleRoute(e, p)}>
										<ShoppingCartOutlinedIcon style={{ color: "white" }} />
									</IconButton>
								</Icon>
								<Icon>
									<IconButton onClick={(e) => e.stopPropagation()}>
										<FavoriteBorderOutlinedIcon style={{ color: "white" }} />
									</IconButton>
								</Icon>
							</Icons>
							<Price>$ {p.price}</Price>
						</Info>
					</Item>
				))}
			</Wrapper>
		</Container>
	);
};
export default Products;
