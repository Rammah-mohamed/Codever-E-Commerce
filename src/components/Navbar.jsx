import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { mobile, small } from "../responsive";
import CartBadge from "./CartBadge";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import ProductContext from "../context/productContext";
import { useContext, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Container = styled.div`
	position: sticky;
	top: 40px;
	left: 0;
	height: 70px;
	padding: 15px 30px;
	background-color: white;
	border-bottom: 2px solid ${PrimaryColor};
	z-index: 10;
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
	caret-color: ${PrimaryColor};

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

const Navbar = ({ currentUser }) => {
	console.log(auth.currentUser);
	console.log(currentUser);
	const user = auth.currentUser || currentUser;
	const { value, setValue } = useContext(ProductContext);
	const navigate = useNavigate();

	async function storeUserData(userId, userData) {
		try {
			// Create a reference to the user document
			const userDocRef = doc(db, "users", userId);

			// Set the user data
			await setDoc(userDocRef, userData);
			console.log("User data stored successfully!");
		} catch (error) {
			console.error("Error storing user data:", error);
		}
	}

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			await signOut(auth);
			user && storeUserData(user.uid, value.value ? value : { value });
			navigate("/");
			setValue([]);
			console.log("User Logout Success");
		} catch (error) {
			console.log("User Logout Error", error.message);
		}
	};

	useEffect(() => {
		const fetchDocument = async () => {
			try {
				const docRef = doc(db, "users", user.uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setValue(docSnap.data().value);
				}
			} catch (error) {
				console.error("Error fetching document:", error);
			}
		};

		fetchDocument();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.uid]);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Search>
						<Input type="text" placeholder="Search..." />
						<SearchIcon style={{ fontSize: "22px", color: `${PrimaryColor}` }} />
					</Search>
				</Left>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<Mid>Codever.</Mid>
				</Link>
				<Right>
					{user && <Item>Welcome {user?.email}</Item>}
					<Item onClick={(e) => handleLogout(e)}>Logout</Item>
					<Link to={"/cart"} style={{ color: "black" }}>
						<CartBadge />
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
