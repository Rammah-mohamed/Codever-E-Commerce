import styled from "styled-components";
import {PrimaryColor} from "../Variables"
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #d6dfe3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Desc = styled.p`
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: justify;
  ${mobile({fontSize:"26px", letterSpacing:"none", textAlign:"center"})}
`;

const Search = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  ${mobile({width:"350px"})}
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  border: none;
  outline: none;
  caret-color: ${PrimaryColor};

  &::placeholder {
    font-size: 22px;
    font-weight: 400;
    color: grey;
  }
` ;

const Icon = styled.div`
  width: 100px;
  height: 100%;
  color: white;
  background-color: ${PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <Search>
        <Input type="mail" placeholder="Your Email"/>
        <Icon>
          <SendIcon style={{fontSize: "30px"}}/>
        </Icon>
      </Search>
    </Container>
  )
}

export default Newsletter