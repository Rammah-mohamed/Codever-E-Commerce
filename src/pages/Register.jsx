import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { mobile, small } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
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

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${mobile({ gap: "15px" })}
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

const Note = styled.p`
  font-weight: 300;
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
  ${mobile({ width: "100px", height: "45px", fontSize: "16px" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Inputs>
          <Input type="text" placeholder="first Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="mail" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </Inputs>
        <Note>
          By creating an account. I consent to the processing of my personal
          data in accordance with the
          <Span> Privacy Policy</Span>
        </Note>
        <Button>Create</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
