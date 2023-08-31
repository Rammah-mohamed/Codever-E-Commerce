import styled from "styled-components"
import {categories} from "../data"
import {PrimaryColor} from "../Variables"
import { Link } from "react-router-dom";
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100%;
  padding: 20px;
  ${mobile({padding:"10px"})}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  ${mobile({flexDirection:"column"})}
`;

const Item = styled.div`
position: relative;
flex: 1;
cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({width:"44vh", height:"45vh"})}

`;

const Title = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  color: white;
`;

const Header = styled.h2`
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  ${mobile({fontSize:"40px"})}
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  background-color: ${PrimaryColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Category = () => {
  return (
    <Container>
      <Wrapper>
        {categories.map(c => (
          <Item key={c.id}>
            <Image src={c.img}/>
            <Title>
              <Header>{c.title}</Header>
              <Link to={"/productslist"} style={{textDecoration:"none"}}><Button>Show Now</Button></Link>
            </Title>
          </Item>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Category