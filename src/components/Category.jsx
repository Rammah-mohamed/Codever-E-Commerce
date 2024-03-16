import styled from "styled-components";
import { categories } from "../data";
import { PrimaryColor } from "../Variables";
import { Link } from "react-router-dom";
import { mid, mobile, small } from "../responsive";

const Container = styled.div`
	width: 100%;
	padding: 20px 30px;
	${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
	${mobile({ flexDirection: "column" })}
	${small({ flexDirection: "column" })}
	${mid({ gap: "15px" })}
`;

const Item = styled.div`
	position: relative;
	flex: 1;
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
	height: 65vh;
	object-fit: cover;
	${mobile({ width: "40vh", height: "41vh" })}
	${mid({ height: "60vh" })}
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
	color: white;
	${mobile({ gap: "40px" })}
	${mid({ gap: "40px" })}
`;

const Header = styled.h2`
	font-size: 35px;
	font-weight: 600;
	letter-spacing: 1px;
	text-align: center;
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
	return (
		<Container>
			<Wrapper>
				{categories.map((c) => (
					<Item key={c.id}>
						<Image src={c.img} />
						<Title>
							<Header>{c.title}</Header>
							<Link to={"/productslist"} style={{ textDecoration: "none" }}>
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
