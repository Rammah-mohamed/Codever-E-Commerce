import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { mobile, small } from "../responsive";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { increament, decreament, decreamentByAmount } from "../state/counterSlice";
import ProductContext from "../context/productContext";
import ColorContext from "../context/colorContext";
import SizeContext from "../context/sizeContext";

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 20px;
	border-bottom: 2px solid ${PrimaryColor};
	margin-bottom: 10px;
	${mobile({ flexDirection: "column" })}
`;

const Close = styled.span`
	position: absolute;
	top: 15px;
	right: 0px;
	width: 34px;
	height: 34px;
	text-align: center;
	font-size: 18px;
	border: 2px solid ${PrimaryColor};
	border-radius: 50%;
	font-weight: bold;
	cursor: pointer;
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 30vh;
	object-fit: cover;
	${mobile({ width: "60%" })}
	${small({ width: "80%" })}
`;

const Info = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 15px;
	${mobile({ alignSelf: "flex-start", gap: "15px" })}
	${small({ gap: "20px" })}
`;

const ProductText = styled.p`
	max-width: 300px;
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

const CartProduct = ({ data }) => {
	const dispatch = useDispatch();
	const { setValue } = useContext(ProductContext);
	const { color } = useContext(ColorContext);
	const { size } = useContext(SizeContext);

	const handleClick = (operation) => {
		if (operation === "minus") {
			if (data.quantity > 1) {
				dispatch(decreament());
				setValue((prev) =>
					prev.map((p) => (p.id === data.id ? { ...p, quantity: p.quantity - 1 } : p))
				);
			}
		} else if (operation === "plus") {
			dispatch(increament());
			setValue((prev) =>
				prev.map((p) => (p.id === data.id ? { ...p, quantity: p.quantity + 1 } : p))
			);
		}
	};

	const handleClose = () => {
		setValue((prev) => prev.filter((p) => p.id !== data.id));
		dispatch(decreamentByAmount(data.quantity));
	};
	return (
		<Wrapper>
			<Close onClick={handleClose}>X</Close>
			<ImageContainer>
				<Image src={data.image} />
			</ImageContainer>
			<Info>
				<ProductText>
					<Bold>Product: </Bold>
					{data.title}
				</ProductText>
				<ProductText>
					<Bold>Id: </Bold>
					{data.id}
				</ProductText>
				<ProductText>
					<Bold>Size: </Bold>
					{size}
				</ProductText>
				<Color style={{ backgroundColor: color }}></Color>
				<NumberContainer>
					<Operation onClick={() => handleClick("minus")}>-</Operation>
					<Number>{data.quantity}</Number>
					<Operation onClick={() => handleClick("plus")}>+</Operation>
				</NumberContainer>
				<Price>$ {Math.round(data.price * data.quantity)}</Price>
			</Info>
		</Wrapper>
	);
};

export default CartProduct;
