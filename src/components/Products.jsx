import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { mid, mobile } from "../responsive";
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
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const Icons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 1s ease;
  opacity: 0;
  ${mobile({ gap: "14px" })}
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #555;
  padding: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: "pointer";
  transition: all 0.5s ease;

  &:hover {
    background-color: #a2a2a2;
    transform: scale(1.2);
  }
`;

const Item = styled.div`
  flex: 1;
  position: relative;
  min-width: 300px;
  height: 400px;
  background-color: #69a0bd;
  cursor: pointer;

  &:hover ${Icons} {
    opacity: 1;
  }
  ${mid({ minWidth: "380px" })}
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
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
            <Icons>
              <Icon>
                <IconButton onClick={(e) => e.stopPropagation()}>
                  <SearchIcon />
                </IconButton>
              </Icon>
              <Icon>
                <IconButton onClick={(e) => handleRoute(e, p)}>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Icon>
              <Icon>
                <IconButton onClick={(e) => e.stopPropagation()}>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Icon>
            </Icons>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Products;
