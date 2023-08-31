import styled from "styled-components"
import {PrimaryColor, SecondaryColor} from "../Variables"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import  Badge  from '@mui/material/Badge';
import { Link } from "react-router-dom";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({padding:"15px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  ${mobile({display:"none"})}
`;

const Lang = styled.span`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 250px;
  height: 40px;
  border: 1px solid #bbb;
  border-radius: 10px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  caret-color: ${SecondaryColor};

  &::placeholder {
    font-style: 14px;
    color:  #ddd;
  }
`;

const Mid = styled.h1`
  flex: 1;
  font-size: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: ${PrimaryColor};
  ${mobile({fontSize:"28px", marginRight:"10px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  gap: 50px;
  ${mobile({gap:"10px"})}
`;

const Item = styled.span`
  font-size: 22px;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  ${mobile({fontSize:"18px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <Search>
            <Input type="text" placeholder="Search..."/>
            <SearchIcon style={{fontSize: "18px", color: `${PrimaryColor}` }}/>
          </Search>
        </Left>
        <Link to={"/"} style={{textDecoration:"none"}}><Mid>Codever.</Mid></Link>
        <Right>
          <Link to={"/register"} style={{textDecoration:"none", color:"black"}}><Item>Register</Item></Link>
          <Link to={"/login"} style={{textDecoration:"none", color:"black"}}><Item>Sign In</Item></Link>
          <Link to={"/cart"} style={{color:"black"}}>
          <Badge badgeContent={4} color="primary" 
          style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
            <ShoppingCartOutlinedIcon  style={{fontWeight: "bold", fontSize: "28px"}}/>
          </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar