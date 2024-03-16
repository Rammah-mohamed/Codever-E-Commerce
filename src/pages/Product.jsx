import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { PrimaryColor } from "../Variables";
import { Link } from "react-router-dom";
import { useState } from "react";
import { mobile, small } from "../responsive";

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 40px;
	padding: 30px;
	${mobile({ flexDirection: "column", padding: "20px", gap: "20px" })}
	${small({ gap: "30px" })}
`;

const Left = styled.div`
	flex: 1;
	text-align: center;
`;

const Image = styled.img`
	width: 60%;
	height: 100%;
	object-fit: cover;
	${mobile({ width: "90%" })}
	${small({ width: "90%" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 50px;
	${mobile({ gap: "15px" })}
	${small({ flex: "2", gap: "30px" })}
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 300;
	letter-spacing: 2px;
	${mobile({ fontSize: "34px" })}
	${small({ fontSize: "38px" })}
`;

const Desc = styled.p`
	font-size: 20px;
	font-weight: 300;
	text-align: justify;
	${mobile({ fontSize: "18px" })}
	${small({ fontSize: "18px" })}
`;

const Price = styled.span`
	font-size: 45px;
	font-weight: 300;
	letter-spacing: 1px;
	${mobile({ fontSize: "30px" })}
	${small({ fontSize: "30px" })}
`;

const Items = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;
	${mobile({ gap: "30px" })};
`;

const Colors = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	${mobile({ gap: "10px" })}
`;

const Label = styled.label`
	font-size: 30px;
	font-weight: 400;
	${mobile({ fontSize: "20px" })}
	${small({ fontSize: "20px" })}
`;

const Checkbox = styled.input`
	appearance: none;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.color === "black" ? "black" : props.color === "blue" ? "blue" : "grey"};
	cursor: pointer;
`;

const Size = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ gap: "10px" })}
	${small({ gap: "10px" })}
`;

const Select = styled.select`
	width: 120px;
	height: 40px;
	font-size: 18px;
	border: 2px solid #ccc;
	outline: none;
	cursor: pointer;
	${mobile({ width: "80px", fontSize: "16px" })}
	${small({ width: "	100px", fontSize: "16px" })}
`;

const NumberContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ gap: "10px" })}
	${small({ gap: "15px" })}
`;

const Operation = styled.span`
	font-size: 30px;
	font-weight: 400;
	cursor: pointer;
	user-select: none;
	${mobile({ fontSize: "26px" })}
	${small({ fontSize: "28px" })}
`;
const Number = styled.div`
	width: 40px;
	height: 40px;
	padding: 10px;
	border: 2px solid ${PrimaryColor};
	border-radius: 5px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ width: "35px", height: "35px", fontSize: "18px" })}
`;
const Cart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 50px;
	font-size: 20px;
	font-weight: 400;
	border: 2px solid ${PrimaryColor};
	border-radius: 10px;
	cursor: pointer;
	${mobile({ width: "100px", height: "40px", fontSize: "16px" })};
	${small({ width: "120px", fontSize: "18px" })}
`;

const Product = () => {
	const [quantity, setQuantity] = useState(1);

	const handleClick = (operation) => {
		if (operation === "minus") {
			setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
		} else {
			setQuantity((prev) => prev + 1);
		}
	};
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Left>
					<Image src='https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg?auto=compress&cs=tinysrgb&w=600' />
				</Left>
				<Right>
					<Title>Jeans Pants</Title>
					<Desc>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis sapiente
						laboriosam dolor ab quidem possimus neque numquam veniam eligendi praesentium maxime
						cupiditate similique mollitia nostrum est doloribus veritatis accusamus.
					</Desc>
					<Price>$ 10.00</Price>
					<Items>
						<Colors>
							<Label>Color</Label>
							<Checkbox type='checkbox' name='color' value={"black"} color='black' />
							<Checkbox type='checkbox' name='color' value={"Blue"} color='blue' />
							<Checkbox type='checkbox' name='color' value={"grey"} color='grey' />
						</Colors>
						<Size>
							<Label>Size</Label>
							<Select name='size'>
								<option value='XS'>XS</option>
								<option value='S'>S</option>
								<option value='M'>M</option>
								<option value='L'>L</option>
								<option value='XL'>XL</option>
							</Select>
						</Size>
					</Items>
					<Items>
						<NumberContainer>
							<Operation onClick={() => handleClick("minus")}>-</Operation>
							<Number>{quantity}</Number>
							<Operation onClick={() => handleClick("plus")}>+</Operation>
						</NumberContainer>
						<Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
							<Cart>Add To Cart</Cart>
						</Link>
					</Items>
				</Right>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
