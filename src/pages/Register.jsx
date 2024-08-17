import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { mobile, small } from "../responsive";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
		url("https://images.pexels.com/photos/16514238/pexels-photo-16514238/free-photo-of-woman-leaning-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
	background-size: cover;
	background-position: center center;
	${mobile({ backgroundPosition: "top left" })}
	${small({ backgroundPosition: "top left" })}
`;

const Wrapper = styled.div`
	width: 650px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding: 20px;
	background-color: white;
	border: 2px solid ${PrimaryColor};
	${mobile({ width: "350px", gap: "20px" })}
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 300;
	letter-spacing: 1px;
	text-transform: uppercase;
	${mobile({ fontSize: "24px" })}
	${small({ fontSize: "26px" })}
`;

const Input = styled.input`
	flex: 1;
	min-width: 220px;
	height: 50px;
	font-size: 18px;
	border: 2px solid ${PrimaryColor};
	border-radius: 10px;
	padding: 10px 20px;
	outline: none;
	caret-color: ${PrimaryColor};
	${mobile({ height: "40px", padding: "10px", fontSize: "16px" })}

	&::placeholder {
		font-weight: 300;
	}
`;

const Span = styled.span`
	font-weight: 600;
	text-transform: uppercase;
`;

const Button = styled.button`
	width: 180px;
	height: 50px;
	font-size: 18px;
	font-weight: 300;
	text-transform: uppercase;
	color: white;
	background-color: ${PrimaryColor};
	border: none;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		background-color: #266181;
	}
	${mobile({ width: "100px", height: "45px", fontSize: "16px" })}
`;

const Register = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	async function registerUser(email, password) {
		const validateUser = /[A-Za-z0-9]/g.test(user.username);
		const validateEmail = /[A-Za-z0-9]@[a-z].[a-z]/g.test(user.email);
		const validatePass = /\w+\d+/g.test(user.password);
		const validateconfirmPass = /\w+\d+/g.test(user.confirmPassword);
		if (validateUser && validateEmail && validatePass && validateconfirmPass) {
			try {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
				const currentUser = userCredential.user;
				navigate("/home", { state: { user } });
				return currentUser;
			} catch (error) {
				setError(true);
			}
		} else setError(true);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		registerUser(user.email, user.password);
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				handleSubmit(event);
			}
		};

		// Attach the event listener
		window.addEventListener("keydown", handleKeyDown);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container>
			<Wrapper>
				<Title>Create An Account</Title>
				<form
					style={{
						width: "100%",
						display: "flex",
						flexWrap: "wrap",
						gap: mobile ? "15px" : "20px",
					}}
				>
					<Input
						type="text"
						placeholder="Username"
						name="username"
						value={user.username}
						onChange={handleChange}
						required
					/>
					<Input
						type="mail"
						placeholder="Email"
						name="email"
						value={user.email}
						onChange={handleChange}
						required
					/>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						value={user.password}
						onChange={handleChange}
						required
					/>
					<Input
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
						value={user.confirmPassword}
						onChange={handleChange}
						required
					/>
				</form>
				<p>
					By creating an account. I consent to the processing of my personal data in accordance with
					the
					<Span> Privacy Policy</Span>
				</p>
				{error && (
					<p style={{ fontSize: "18px", color: "red" }}>
						Fill out all fields or enter a valid email and password
					</p>
				)}
				<Button onClick={handleSubmit}>Create</Button>
			</Wrapper>
		</Container>
	);
};

export default Register;
