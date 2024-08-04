import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { mobile } from "../responsive";

const Container = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${PrimaryColor};
	color: white;
	z-index: 10;
	${mobile({ height: "50px" })}
`;

const Paragraph = styled.p`
	font-size: 18px;
	font-weight: 500;
	${mobile({ fontSize: "16px" })}
`;

const Announcement = () => {
	return (
		<Container>
			<Paragraph>Super Deal! Free Shipping on Order Over $20</Paragraph>
		</Container>
	);
};

export default Announcement;
