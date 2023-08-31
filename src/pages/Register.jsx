import styled from "styled-components"
import {PrimaryColor} from "../Variables"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), 
  url("https://images.pexels.com/photos/16514238/pexels-photo-16514238/free-photo-of-woman-leaning-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center center;
  ${mobile({backgroundPosition:"top left"})}
`;

const Wrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: white;
  border: 1px solid ${PrimaryColor};
  ${mobile({width:"350px", gap:"20"})}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${mobile({fontSize:"30px"})}
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  ${mobile({gap:"15px"})}
`;

const Input = styled.input`
  flex: 1;
  min-width: 250px;
  height: 50px;
  border: 2px solid ${PrimaryColor};
  border-radius: 10px;
  padding: 10px 20px;
  outline: none;
  caret-color: ${PrimaryColor};
  ${mobile({height:"40px"})}

  &::placeholder {
    font-size: 18px;
    font-weight: 300;
  }
`;

const Note = styled.p`
  font-size: 18px;
  font-weight: 300;
`;

const Span = styled.span`
  font-weight: 600;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 220px;
  height: 50px;
  padding: 10px 20;
  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background-color: ${PrimaryColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({width:"180px", fontSize:"18px"})}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Inputs>
          <Input type="text" placeholder="Name"/>
          <Input type="text" placeholder="Username"/>
          <Input type="password" placeholder="Password"/>
          <Input type="text" placeholder="Last Name"/>
          <Input type="mail" placeholder="Email"/>
          <Input type="password" placeholder="Confirm Password"/>
        </Inputs>
        <Note>By creating an account. I consent to the processing of my personal data in accordance with the 
          <Span>Privacy Policy</Span>
        </Note>
        <Button>Create</Button>
      </Wrapper>
    </Container>
  )
}

export default Register