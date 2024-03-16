import styled from "styled-components";
import { popularProducts } from "../data";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { mid, mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	padding: 20px 30px;
	${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
`;

const Icons = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	transition: all 1s ease;
	opacity: 0;
	${mobile({ gap: "14px" })}
`;

const Icon = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	color: #555;
	padding: 10px;
	border-radius: 50%;
	background-color: #ddd;
	cursor: "pointer";
	transition: all 0.5s ease;

	&:hover {
		background-color: #a2a2a2;
		transform: scale(1.2);
	}
`;

const Item = styled.div`
	position: relative;
	min-width: 300px;
	height: 400px;
	background-color: #d1e5ed;
	cursor: pointer;

	&:hover ${Icons} {
		opacity: 1;
	}
	${mid({ minWidth: "380px" })}
`;

const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 90%;
	height: 90%;
	object-fit: cover;
`;

const Products = () => {
	return (
		<Container>
			<Wrapper>
				{popularProducts.map((p) => (
					<Link to={"/product"} key={p.id} style={{ textDecoration: "none", flex: 1 }}>
						<Item>
							<ImgContainer>
								<Image src={p.img} />
							</ImgContainer>
							<Icons>
								<Icon>
									<SearchIcon />
								</Icon>
								<Link to={"/cart"}>
									<Icon>
										<ShoppingCartOutlinedIcon />
									</Icon>
								</Link>
								<Icon>
									<FavoriteBorderOutlinedIcon />
								</Icon>
							</Icons>
						</Item>
					</Link>
				))}
			</Wrapper>
		</Container>
	);
};

export default Products;
