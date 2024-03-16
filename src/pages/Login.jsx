import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { mobile, small } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
		url("https://images.pexels.com/photos/3771088/pexels-photo-3771088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
	background-size: cover;
	background-position: center center;
	${mobile({ backgroundPosition: "top left" })}
	${small({ backgroundPosition: "top left" })}
`;

const Wrapper = styled.div`
	width: 450px;
	display: flex;
	flex-direction: column;
	gap: 30px;
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

const Inputs = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	${mobile({ gap: "15px" })}
`;

const Input = styled.input`
	flex: 1;
	min-width: 200px;
	height: 50px;
	font-size: 18px;
	padding: 20px;
	border: 2px solid ${PrimaryColor};
	border-radius: 10px;
	outline: none;
	caret-color: ${PrimaryColor};
	${mobile({ height: "40px", fontSize: "16px", padding: "10px" })}

	&::placeholder {
		font-weight: 300;
	}
`;

const Button = styled.button`
	width: 180px;
	height: 50px;
	padding: 10px 20;
	font-size: 18px;
	font-weight: 300;
	text-transform: uppercase;
	color: white;
	background-color: ${PrimaryColor};
	border: none;
	border-radius: 10px;
	cursor: pointer;
	${mobile({ width: "100px", height: "45px", fontSize: "16px" })}
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Link = styled.a`
	font-size: 16px;
	font-weight: 300;
	text-decoration: underline;
	color: black;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign In</Title>
				<Inputs>
					<Input type='text' placeholder='Username' />
					<Input type='password' placeholder='Password' />
				</Inputs>
				<Button>Login</Button>
				<Links>
					<Link>Do Not You Remember The Password?</Link>
					<Link>Create A New Account</Link>
				</Links>
			</Wrapper>
		</Container>
	);
};

export default Login;
