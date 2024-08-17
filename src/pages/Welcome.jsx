import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { useState } from "react";
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
		url("https://images.pexels.com/photos/16514238/pexels-photo-16514238/free-photo-of-woman-leaning-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

const Btn = styled.button`
	display: flex;
	align-items: center;
	gap: 25px;
	background-color: transparent;
	border: none;
	outline: none;
`;

const Welcome = () => {
	const [isHoveredOne, setIsHoveredOne] = useState(null);
	const [isHoveredTwo, setIsHoveredTwo] = useState(null);
	const handleMouseEnterOne = () => setIsHoveredOne(true);
	const handleMouseLeaveOne = () => setIsHoveredOne(false);
	const handleMouseEnterTwo = () => setIsHoveredTwo(true);
	const handleMouseLeaveTwo = () => setIsHoveredTwo(false);
	return (
		<div>
			<Wrapper>
				<h1 style={{ fontSize: "45px", color: PrimaryColor }}>
					Welcome to the Codever E-Commerce App
				</h1>
				<p style={{ fontSize: "28px" }}>
					This is an e-commerce website built using React.js and Redux.
				</p>
				<p style={{ fontSize: "24px" }}>Create an account to start Shopping</p>
				<Btn>
					<Link
						style={{
							width: "100px",
							height: "40px",
							textDecoration: "none",
							padding: "6px",
							fontSize: "18px",
							borderRadius: "6px",
							color: "white",
							backgroundColor: isHoveredOne ? "#266181" : PrimaryColor,
						}}
						to={"/register"}
						onMouseEnter={handleMouseEnterOne}
						onMouseLeave={handleMouseLeaveOne}
					>
						Sign Up
					</Link>
					<Link
						style={{
							width: "100px",
							height: "40px",
							textDecoration: "none",
							padding: "6px",
							fontSize: "18px",
							borderRadius: "6px",
							color: PrimaryColor,
							backgroundColor: isHoveredTwo ? "#eee" : "white",
						}}
						to={"/login"}
						onMouseEnter={handleMouseEnterTwo}
						onMouseLeave={handleMouseLeaveTwo}
					>
						Sign In
					</Link>
				</Btn>
			</Wrapper>
		</div>
	);
};

export default Welcome;
