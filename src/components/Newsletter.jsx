import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import SendIcon from "@mui/icons-material/Send";
import { mid, mobile, small } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 400px;
  color: white;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  ${mobile({ height: "340px", gap: "20px" })}
  ${small({ height: "320px", gap: "30px" })}
	${mid({ height: "350px", gap: "35px" })}
`;

const Title = styled.h1`
  font-size: 60px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "32px" })}
  ${small({ fontSize: "40px" })}
	${mid({ fontSize: "50px" })}
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: justify;
  ${mobile({ fontSize: "18px", letterSpacing: "none", textAlign: "center" })}
  ${small({ fontSize: "20px" })}
	${mid({ fontSize: "22px" })}
`;

const Search = styled.div`
  width: 650px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  ${mobile({ width: "350px", height: "50px" })}
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  outline: none;
  caret-color: ${PrimaryColor};
  ${mobile({ padding: "10px", fontSize: "16px" })}

  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: grey;
    ${mobile({ fontSize: "14px" })}
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 100%;
  color: white;
  background-color: ${PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "65px" })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <Search>
        <Input type="mail" placeholder="Your Email" />
        <Icon>
          <SendIcon style={{ fontSize: "30px" }} />
        </Icon>
      </Search>
    </Container>
  );
};

export default Newsletter;
