import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { PrimaryColor } from "../Variables";
import { useState } from "react";
import { mid, mobile, small } from "../responsive";

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	width: 100%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	${mobile({ padding: "20px", gap: "30px" })}
	${small({ gap: "30px" })}
`;

const Title = styled.h1`
	width: 100%;
	text-align: center;
	font-size: 40px;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 1px;
	${mobile({ fontSize: "28px" })}
	${small({ fontSize: "32px" })}
	${mid({ fontSize: "36px" })}
`;

const ShoppingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ContinueContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const ContinueShop = styled.button`
	width: 180px;
	height: 60px;
	background-color: white;
	font-size: 18px;
	font-weight: 400;
	text-transform: capitalize;
	border: 2px solid ${PrimaryColor};
	border-radius: 10px;
	cursor: pointer;
	${mobile({ width: "155px", height: "50px", fontSize: "16px" })}
`;

const ShoppingNum = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	${mobile({ display: "none" })}
`;

const Span = styled.span`
	font-size: 18px;
	font-weight: 500;
	text-decoration: underline;
`;
const CheckoutContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Checkout = styled.button`
	width: 150px;
	height: 50px;
	background-color: ${PrimaryColor};
	color: white;
	font-size: 18px;
	font-weight: 300;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	${mobile({ width: "150px", fontSize: "16px" })};
`;

const ProductContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 60px;
	${mobile({ flexDirection: "column", gap: "30px" })}
	${small({ flexDirection: "column", gap: "45px" })}
	${mid({ gap: "40px" })}
`;

const Products = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 10px;
	${small({ width: "100%" })}
	${mid({ flex: "2.2" })}
`;

const Product = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	${mobile({ flexDirection: "column" })}
`;

const Hr = styled.hr`
	border: none;
	height: 1px;
	background-color: ${PrimaryColor};
`;

const Left = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ flexDirection: "column" })}
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 40vh;
	object-fit: cover;
	${mobile({ height: "40vh" })}
	${small({ width: "100%" })}
`;

const Info = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 25px;
	${mobile({ alignSelf: "flex-start", gap: "15px" })}
	${small({ gap: "20px" })}
`;

const ProductText = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-transform: uppercase;
	${mobile({ fontSize: "16px" })}
`;

const Bold = styled.span`
	font-weight: 600;
`;

const Color = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: black;
`;

const Right = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	gap: 20px;
	${mobile({ flexDirection: "row", justifyContent: "space-between", marginTop: "20px" })}
`;

const NumberContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ gap: "10px" })}
	${small({ gap: "15px" })}
`;

const Operation = styled.span`
	font-size: 25px;
	font-weight: 400;
	cursor: pointer;
	user-select: none;
	${mobile({ fontSize: "20px" })}
`;
const Number = styled.div`
	width: 40px;
	height: 40px;
	padding: 10px;
	border: 2px solid ${PrimaryColor};
	border-radius: 5px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ width: "35px", height: "35px", fontSize: "16px" })}
`;

const Price = styled.span`
	font-size: 30px;
	font-weight: 300;
	letter-spacing: 1px;
	${mobile({ fontSize: "24px" })}
	${small({ fontSize: "26px" })}
`;

const Summary = styled.div`
	display: flex;
	flex: 1;
	align-self: flex-start;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	border: 2px solid ${PrimaryColor};
	${mobile({ width: "100%", alignSelf: "center", gap: "20px", padding: "20px" })}
	${small({ width: "100%", alignSelf: "center", gap: "20px", padding: "20px" })}
`;

const SummaryTitle = styled.h1`
	font-size: 30px;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 1px;
	${mobile({ fontSize: "22px" })}
	${small({ fontSize: "26px" })}
	${mid({ fontSize: "28px" })}
`;

const OrdersList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	${mobile({ gap: "15px" })}
`;

const Items = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TotalText = styled.span`
	font-size: 22px;
	font-weight: 600;
	${mobile({ fontSize: "20px" })}
`;

const SummaryCheckout = styled.button`
	width: 100%;
	height: 50px;
	padding: 10px;
	background-color: ${PrimaryColor};
	color: white;
	font-size: 18px;
	font-weight: 300;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	${mobile({ height: "40px", fontSize: "16px" })}
`;

const Cart = () => {
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
				<Title>Your Bag</Title>
				<ShoppingContainer>
					<ContinueContainer>
						<ContinueShop>Continue Shopping</ContinueShop>
					</ContinueContainer>
					<ShoppingNum>
						<Span>Shopping Bag</Span>
						<Span>Your Wishlist</Span>
					</ShoppingNum>
					<CheckoutContainer>
						<Checkout>Checkout Now</Checkout>
					</CheckoutContainer>
				</ShoppingContainer>
				<ProductContainer>
					<Products>
						<Product>
							<Left>
								<ImageContainer>
									<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
								</ImageContainer>
								<Info>
									<ProductText>
										<Bold>Product: </Bold>Hakura T-Shirt
									</ProductText>
									<ProductText>
										<Bold>Id: </Bold>87834993131
									</ProductText>
									<ProductText>
										<Bold>Size: </Bold>L
									</ProductText>
									<Color></Color>
								</Info>
							</Left>
							<Right>
								<NumberContainer>
									<Operation onClick={() => handleClick("minus")}>-</Operation>
									<Number>{quantity}</Number>
									<Operation onClick={() => handleClick("plus")}>+</Operation>
								</NumberContainer>
								<Price>$ 10.00</Price>
							</Right>
						</Product>
						<Hr />
						<Product>
							<Left>
								<ImageContainer>
									<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png' />
								</ImageContainer>
								<Info>
									<ProductText>
										<Bold>Product: </Bold>Cat Cap
									</ProductText>
									<ProductText>
										<Bold>Id: </Bold>4558083091
									</ProductText>
									<ProductText>
										<Bold>Size: </Bold>s
									</ProductText>
									<Color></Color>
								</Info>
							</Left>
							<Right>
								<NumberContainer>
									<Operation onClick={() => handleClick("minus")}>-</Operation>
									<Number>{quantity}</Number>
									<Operation onClick={() => handleClick("plus")}>+</Operation>
								</NumberContainer>
								<Price>$ 10.00</Price>
							</Right>
						</Product>
					</Products>
					<Summary>
						<SummaryTitle>Orders Summary</SummaryTitle>
						<OrdersList>
							<Items>
								<ProductText>Subtotal</ProductText>
								<ProductText>$ 40</ProductText>
							</Items>
							<Items>
								<ProductText>Estimated Shipping</ProductText>
								<ProductText>$ 4.50</ProductText>
							</Items>
							<Items>
								<ProductText>Shipping Discount</ProductText>
								<ProductText>$ -3.00</ProductText>
							</Items>
							<Items>
								<TotalText>Total</TotalText>
								<TotalText>$ 41.50</TotalText>
							</Items>
						</OrdersList>
						<SummaryCheckout>Checkout Now</SummaryCheckout>
					</Summary>
				</ProductContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
