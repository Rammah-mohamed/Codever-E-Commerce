import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../Variables";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { mobile, small } from "../responsive";

const Container = styled.div`
	height: 70px;
	padding: 15px 30px;
	${mobile({ padding: "15px" })};
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ display: "none" })};
	${small({ display: "none" })}
`;

const Lang = styled.span`
	font-weight: 300;
	cursor: pointer;
`;

const Search = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	width: 300px;
	height: 40px;
	border: 2px solid #bbb;
	border-radius: 10px;
	&:focus-within {
		border-color: #999;
	}
`;

const Input = styled.input`
	height: 100%;
	width: 100%;
	padding: 10px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 18px;
	cursor: pointer;
	caret-color: ${SecondaryColor};

	&::placeholder {
		font-size: 14px;
		color: #ddd;
	}
`;

const Mid = styled.h1`
	flex: 1;
	font-size: 32px;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	color: ${PrimaryColor};
	${mobile({ fontSize: "24px" })}
	${small({ fontSize: "26px" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-content: center;
	justify-content: flex-end;
	gap: 30px;
	${mobile({ gap: "10px" })}
`;

const Item = styled.span`
	font-size: 18px;
	font-weight: 500;
	text-transform: capitalize;
	cursor: pointer;
	${mobile({ fontSize: "16px" })}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Lang>EN</Lang>
					<Search>
						<Input type='text' placeholder='Search...' />
						<SearchIcon style={{ fontSize: "22px", color: `${PrimaryColor}` }} />
					</Search>
				</Left>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<Mid>Codever.</Mid>
				</Link>
				<Right>
					<Link to={"/register"} style={{ textDecoration: "none", color: "black" }}>
						<Item>Register</Item>
					</Link>
					<Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
						<Item>Sign In</Item>
					</Link>
					<Link to={"/cart"} style={{ color: "black" }}>
						<Badge
							badgeContent={4}
							color='primary'
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
							}}>
							<ShoppingCartOutlinedIcon style={{ fontWeight: "bold", fontSize: "24px" }} />
						</Badge>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
