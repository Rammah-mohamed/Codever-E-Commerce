import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { PrimaryColor } from "../Variables";
import { mid, mobile, small } from "../responsive";
import CartProduct from "../components/CartProduct";
import { useContext } from "react";
import ProductContext from "../context/productContext";
import { useDispatch } from "react-redux";
import { decreamentByAmount } from "../state/counterSlice";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mobile({ padding: "15px", gap: "20px" })}
  ${small({ gap: "30px" })}
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${mobile({ fontSize: "28px" })}
  ${small({ fontSize: "32px" })}
	${mid({ fontSize: "36px" })}
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContinueContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Clear = styled.button`
  width: 140px;
  height: 50px;
  background-color: white;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
  border: 2px solid ${PrimaryColor};
  border-radius: 10px;
  cursor: pointer;
  ${mobile({ width: "120px", height: "40px", fontSize: "16px" })}
`;

const ShoppingNum = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${mobile({ display: "none" })}
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
`;
const CheckoutContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Checkout = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${PrimaryColor};
  color: white;
  font-size: 18px;
  font-weight: 300;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({ width: "130px", fontSize: "16px" })};
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
  ${mobile({ flexDirection: "column", gap: "30px" })}
  ${small({ flexDirection: "column", gap: "45px" })}
	${mid({ gap: "40px" })}
`;

const Products = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${small({ width: "100%" })}
  ${mid({ flex: "2.2" })}
`;

const ProductText = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  ${mobile({ fontSize: "16px" })}
`;

const Summary = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: 2px solid ${PrimaryColor};
  ${mobile({
    width: "100%",
    alignSelf: "center",
    gap: "20px",
    padding: "20px",
  })}
  ${small({ width: "100%", alignSelf: "center", gap: "20px", padding: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${mobile({ fontSize: "22px" })}
  ${small({ fontSize: "26px" })}
	${mid({ fontSize: "28px" })}
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mobile({ gap: "15px" })}
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalText = styled.span`
  font-size: 22px;
  font-weight: 600;
  ${mobile({ fontSize: "20px" })}
`;

const SummaryCheckout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: ${PrimaryColor};
  color: white;
  font-size: 18px;
  font-weight: 300;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({ height: "40px", fontSize: "16px" })}
`;

const Cart = () => {
  const discount = 3.0;
  const shipping = 4.0;
  const { value, setValue } = useContext(ProductContext);
  const dispatch = useDispatch();

  const cartValue = () => {
    let sum = 0;
    if (value.length !== 0) {
      if (value.length === 1) {
        sum = value
          .map((p) => [p.quantity, p.price])
          .reduce((acc, curr) => curr[0] * curr[1], 0);
      } else {
        sum = value
          .map((p) => p.quantity * p.price)
          .reduce((acc, curr) => acc + curr);
      }
      const total = Math.ceil(sum) + shipping - discount;
      return total;
    } else {
      return sum;
    }
  };

  const handleClick = () => {
    setValue([]);
    let ordersQuantity = 0;
    if (value.length !== 0) {
      if (value.length === 1) {
        ordersQuantity = value
          .map((p) => p.quantity)
          .reduce((acc, curr) => acc + curr, 0);
      } else {
        ordersQuantity = value
          .map((p) => p.quantity)
          .reduce((acc, curr) => acc + curr);
      }
    }
    dispatch(decreamentByAmount(ordersQuantity));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <ShoppingContainer>
          <ContinueContainer>
            <Clear onClick={handleClick}>Clear Cart</Clear>
          </ContinueContainer>
          <ShoppingNum>
            <Span>Saved</Span>
            <Span>Your Wishlist</Span>
          </ShoppingNum>
          <CheckoutContainer>
            <Checkout>Checkout Now</Checkout>
          </CheckoutContainer>
        </ShoppingContainer>
        <ProductContainer>
          <Products>
            {value.map((p) => (
              <CartProduct key={p.id} data={p} />
            ))}
          </Products>
          <Summary>
            <SummaryTitle>Orders Summary</SummaryTitle>
            <OrdersList>
              <Items>
                <ProductText>Estimated Shipping</ProductText>
                <ProductText>$ {shipping + ".0"}</ProductText>
              </Items>
              <Items>
                <ProductText>Shipping Discount</ProductText>
                <ProductText>$ -{discount + ".0"}</ProductText>
              </Items>
              <Items>
                <TotalText>Total</TotalText>
                <TotalText>{`$ ${cartValue()}`}</TotalText>
              </Items>
            </OrdersList>
            <SummaryCheckout>Checkout Now</SummaryCheckout>
          </Summary>
        </ProductContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
