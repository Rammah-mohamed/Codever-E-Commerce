import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { mobile, small } from "../responsive";
import { useContext, useEffect, useState } from "react";
import { PrimaryColor } from "../Variables";
import { useDispatch } from "react-redux";
import { increament } from "../state/counterSlice";
import ProductContext from "../context/productContext";
import { IconButton } from "@mui/material";

const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  ${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid ${PrimaryColor};
  cursor: pointer;
  ${mobile({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  ${mobile({ width: "60%", height: "60%" })}
`;

const Info = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h2`
  max-width: 600px;
  font-size: 50px;
  color: ${PrimaryColor};
  font-weight: 300;
  letter-spacing: 2px;
  ${mobile({ fontSize: "28px" })}
  ${small({ fontSize: "32px" })}
`;

const Desc = styled.p`
  max-width: 600px;
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  ${mobile({ fontSize: "16px" })}
  ${small({ fontSize: "16px" })}
`;

const Price = styled.span`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 1px;
  ${mobile({ fontSize: "26px" })}
  ${small({ fontSize: "28px" })}
`;

const Icons = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  ${mobile({ gap: "14px" })}
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${PrimaryColor};
  transition: all 1s ease;
  cursor: "pointer";
  &:hover {
    background-color: #184055;
  }
  ${mobile({ width: "40px", height: "40px" })}
`;

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { value, setValue } = useContext(ProductContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let existed;

  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
    existed = value?.some((p) => p.id === product.id);
    if (!existed) {
      dispatch(increament());
    }

    setValue((prevOrders) => {
      const exists = prevOrders.some((order) => order.id === product.id);

      if (!exists) {
        return [...prevOrders, product];
      }

      return prevOrders;
    });
  };

  const handleRoute = (event, product) => {
    event.stopPropagation();
    existed = value?.some((p) => p.id === product.id);
    if (!existed) {
      dispatch(increament());
    }

    setValue((prevOrders) => {
      const exists = prevOrders.some((order) => order.id === product.id);

      if (!exists) {
        return [...prevOrders, product];
      }

      return prevOrders;
    });
  };

  useEffect(() => {
    if (category !== undefined) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((result) =>
          setProducts(result.map((p) => ({ ...p, quantity: 1 })))
        );
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((result) =>
          setProducts(result.map((p) => ({ ...p, quantity: 1 })))
        );
    }
  }, [category]);

  return (
    <Container>
      <h1 style={{ color: PrimaryColor, margin: "15px 0px", fontSize: "35px" }}>
        Products :
      </h1>
      <Wrapper>
        {products.map((p) => (
          <Item key={p.id} onClick={() => handleClick(p)}>
            <ImgContainer>
              <Image src={p.image} alt={p.name} />
            </ImgContainer>
            <Info>
              <Title>{p.title}</Title>
              <Desc>{p.description}</Desc>
              <Icons>
                <Icon>
                  <IconButton onClick={(e) => e.stopPropagation()}>
                    <SearchIcon style={{ color: "white" }} />
                  </IconButton>
                </Icon>
                <Icon>
                  <IconButton onClick={(e) => handleRoute(e, p)}>
                    <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                  </IconButton>
                </Icon>
                <Icon>
                  <IconButton onClick={(e) => e.stopPropagation()}>
                    <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
                  </IconButton>
                </Icon>
              </Icons>
              <Price>$ {p.price}</Price>
            </Info>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Products;
