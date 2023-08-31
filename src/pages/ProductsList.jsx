import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  ${mobile({gap:"30px"})}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  ${mobile({fontSize:"30px"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({flexDirection:"column",gap:"20px",alignItems:"flex-start"})}
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  gap: 30px;
  ${mobile({gap:"20px"})}
`;

const FilterText = styled.span`
  font-size: 22px;
  font-weight: 500;
  ${mobile({fontSize:"18px"})}
`

const Select = styled.select`
  width: 120px;
  height: 40px;
  font-size: 18px;
  border: 2px solid #ccc;
  outline: none;
  ${mobile({width:"80px", fontSize:"16px"})}
`;

const Right = styled.div`
  flex: 1;
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 30px;
  ${mobile({gap:"20px"})}
`;


const ProductsList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Header>
        <Title>Dresses</Title>
        <Filter>
          <Left>
            <FilterText>Filter Products:</FilterText>
            <Select name="color">
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
            </Select>
            <Select name="size">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Select>
          </Left>
          <Right>
          <FilterText>Filter Products:</FilterText>
          <Select name="type">
              <option value="Newest">Newest</option>
              <option value="Popular">Popular</option>
              <option value="Trending">Trending</option>
              <option value="Relevant">Relevant</option>
            </Select>
          </Right>
        </Filter>
      </Header>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductsList