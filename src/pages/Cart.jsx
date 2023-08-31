import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { PrimaryColor } from "../Variables";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  ${mobile({padding:"20px",gap:"40px"})}
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${mobile({fontSize:"40px"})}
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContinueContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const ContinueShop = styled.button`
  width: 220px;
  height: 60px;
  background-color: white;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  border: 2px solid ${PrimaryColor};
  border-radius: 10px;
  cursor: pointer;
  ${mobile({width:"180px", height:"50px", fontSize:"18px"})}
`;

const ShoppingNum = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${mobile({display:"none"})}
`

const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
`
const CheckoutContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Checkout = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  border: none;
  border-radius: 10px;
  background-color: ${PrimaryColor};
  ${mobile({width:"180px"})};
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 80px;
  ${mobile({flexDirection:"column", gap:"40px"})}
`;

const Products = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Product = styled.div`
  display: flex;
  align-items: center;
  ${mobile({flexDirection:"column"})}
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${PrimaryColor};
`

const Left = styled.div`
  flex:3;
  display: flex;
  align-items: center;
  gap: 30px;

  ${mobile({flexDirection:"column"})}
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 40vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const Info = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mobile({alignSelf:"flex-start"})}
`;

const ProductText = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  ${mobile({fontSize:"24px"})}
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Color = styled.div`
  width: 30px;
  height:30px;
  border-radius: 50%;
  background-color: black;
`;

const Right = styled.div`
  flex:1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction:column;
  gap: 20px;
  ${mobile({flexDirection:"row", justifyContent:"space-between",marginTop:"20px"})}
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Operation = styled.span`
  font-size: 35px;
  font-weight: 400;
  cursor: pointer;
`
const Number = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border: 2px solid ${PrimaryColor};
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const Summary = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border: 2px solid ${PrimaryColor};
  ${mobile({alignSelf:"center"})}
`;

const SummaryTitle = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const SummaryCheckout = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  border: none;
  border-radius: 10px;
  background-color: ${PrimaryColor};
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>Your Bag</Title>
        <ShoppingContainer>
          <ContinueContainer>
            <ContinueShop>Continue Shopping</ContinueShop>
          </ContinueContainer>
          <ShoppingNum>
            <Span>Shopping Bag</Span>
            <Span>Your Wishlist</Span>
          </ShoppingNum>
          <CheckoutContainer>
            <Checkout>Checkout Now</Checkout>
          </CheckoutContainer>
        </ShoppingContainer>
        <ProductContainer>
          <Products>
            <Product>
              <Left>
                <ImageContainer>
                  <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
                </ImageContainer>
                <Info>
                  <ProductText><Bold>Product: </Bold>Hakura T-Shirt</ProductText>
                  <ProductText><Bold>Id: </Bold>87834993131</ProductText>
                  <ProductText><Bold>Size: </Bold>L</ProductText>
                  <Color></Color>
                </Info>
              </Left>
              <Right>
              <NumberContainer>
                <Operation>-</Operation>
                <Number>1</Number>
                <Operation>+</Operation>
              </NumberContainer>
              <Price>$ 10.00</Price>
              </Right>
            </Product>
            <Hr/>
            <Product>
              <Left>
                <ImageContainer>
                  <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
                </ImageContainer>
                <Info>
                  <ProductText><Bold>Product: </Bold>Cat Cap</ProductText>
                  <ProductText><Bold>Id: </Bold>4558083091</ProductText>
                  <ProductText><Bold>Size: </Bold>s</ProductText>
                  <Color></Color>
                </Info>
              </Left>
              <Right>
              <NumberContainer>
                <Operation>-</Operation>
                <Number>1</Number>
                <Operation>+</Operation>
              </NumberContainer>
              <Price>$ 10.00</Price>
              </Right>
            </Product>
          </Products>
          <Summary>
            <SummaryTitle>Orders Summary</SummaryTitle>
            <OrdersList>
              <Items>
                <ProductText>Subtotal</ProductText>
                <ProductText>$ 40</ProductText>
              </Items>
              <Items>
                <ProductText>Estimated Shipping</ProductText>
                <ProductText>$ 4.50</ProductText>
              </Items>
              <Items>
                <ProductText>Shipping Discount</ProductText>
                <ProductText>$ -3.00</ProductText>
              </Items>
              <Items>
                <TotalText>Total</TotalText>
                <TotalText>$ 41.50</TotalText>
              </Items>
            </OrdersList>
            <SummaryCheckout>Checkout Now</SummaryCheckout>
          </Summary>
        </ProductContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart