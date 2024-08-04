import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { PrimaryColor } from "../Variables";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { mobile, small } from "../responsive";
import { useDispatch } from "react-redux";
import { increamentByAmount } from "../state/counterSlice";
import ProductContext from "../context/productContext";
import ColorContext from "../context/colorContext";
import SizeContext from "../context/sizeContext";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  gap: 40px;
  padding: 30px;
  ${mobile({ flexDirection: "column", height: "unset", gap: "25px" })}
  ${small({ gap: "30px" })}
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 50%;
  height: 80%;
  object-fit: cover;
  ${mobile({ width: "70%" })}
  ${small({ width: "90%" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  ${mobile({ gap: "15px" })}
  ${small({ flex: "2", gap: "30px" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 2px;
  ${mobile({ fontSize: "24px" })}
  ${small({ fontSize: "30px" })}
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: justify;
  ${mobile({ fontSize: "16px" })}
  ${small({ fontSize: "16px" })}
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  ${mobile({ fontSize: "30px" })}
  ${small({ fontSize: "30px" })}
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  ${mobile({ gap: "30px" })};
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  ${mobile({ gap: "10px" })}
`;

const Label = styled.label`
  font-size: 28px;
  font-weight: 400;
  ${mobile({ fontSize: "20px" })}
  ${small({ fontSize: "20px" })}
`;

const Checkbox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "black"
      ? "black"
      : props.color === "blue"
      ? "blue"
      : "grey"};
  cursor: pointer;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  ${mobile({ gap: "10px" })}
  ${small({ gap: "10px" })}
`;

const Select = styled.select`
  width: 120px;
  height: 40px;
  font-size: 18px;
  border: 2px solid ${PrimaryColor};
  outline: none;
  cursor: pointer;
  ${mobile({ width: "80px", fontSize: "16px" })}
  ${small({ width: "	100px", fontSize: "16px" })}
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  ${mobile({ gap: "10px" })}
  ${small({ gap: "15px" })}
`;

const Operation = styled.span`
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  ${mobile({ fontSize: "26px" })}
  ${small({ fontSize: "28px" })}
`;
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
  ${mobile({ width: "35px", height: "35px", fontSize: "18px" })}
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  border: 2px solid ${PrimaryColor};
  border-radius: 10px;
  cursor: pointer;
  ${mobile({ width: "100px", height: "40px", fontSize: "16px" })};
  ${small({ width: "120px", fontSize: "18px" })}
`;

const Product = () => {
  const [button, setButton] = useState({
    text: "Add To Cart",
    backgroundColor: "white",
    color: "black",
  });
  const [product, setProduct] = useState([]);
  const { color, setColor } = useContext(ColorContext);
  const { setSize } = useContext(SizeContext);
  const { value, setValue } = useContext(ProductContext);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((result) => setProduct({ ...result, quantity: 1 }));
  }, [param.id]);

  const handleClick = (operation) => {
    if (operation === "minus") {
      if (product.quantity > 1) {
        setProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
      }
    } else {
      setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
    }
  };

  const handleCart = () => {
    setButton({
      text: "Product Added",
      backgroundColor: PrimaryColor,
      color: "white",
    });

    setTimeout(() => {
      setButton({
        text: "Add To Cart",
        backgroundColor: "white",
        color: "black",
      });

      setProduct((prev) => ({ ...prev, quantity: 1 }));
    }, 600);

    if (value.length === 0) {
      setValue([product]);
      dispatch(increamentByAmount(product.quantity));
    } else {
      setValue((prev) =>
        prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: product.quantity + p.quantity }
            : p
        )
      );
      dispatch(increamentByAmount(product.quantity));
    }
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Left>
          <Image src={product.image} />
        </Left>
        <Right>
          <Title>{product.title}</Title>
          <Desc>{product.description?.slice(1,300)}</Desc>
          <Price>$ {Math.round(product.price * product.quantity)}</Price>
          {product.category !== "electronics" &&
            product.category !== "jewelery" && (
              <>
                <Items>
                  <Colors>
                    <Label>Color</Label>
                    <Checkbox
                      type="checkbox"
                      name="color"
                      value={"black"}
                      color="black"
                      style={{
                        width: color === "black" && "32px",
                        height: color === "black" && "32px",
                      }}
                      onClick={(e) => handleColor(e)}
                    />
                    <Checkbox
                      type="checkbox"
                      name="color"
                      value={"blue"}
                      color="blue"
                      style={{
                        width: color === "blue" && "32px",
                        height: color === "blue" && "32px",
                      }}
                      onClick={(e) => handleColor(e)}
                    />
                    <Checkbox
                      type="checkbox"
                      name="color"
                      value={"grey"}
                      color="grey"
                      style={{
                        width: color === "grey" && "32px",
                        height: color === "grey" && "32px",
                      }}
                      onClick={(e) => handleColor(e)}
                    />
                  </Colors>
                  <Size>
                    <Label>Size</Label>
                    <Select name="size" onChange={(e) => handleSize(e)}>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </Select>
                  </Size>
                </Items>
              </>
            )}
          <Items>
            <NumberContainer>
              <Operation onClick={() => handleClick("minus")}>-</Operation>
              <Number>{product.quantity}</Number>
              <Operation onClick={() => handleClick("plus")}>+</Operation>
            </NumberContainer>
            <Cart
              onClick={handleCart}
              style={{
                backgroundColor: button.backgroundColor,
                color: button.color,
              }}
            >
              {button.text}
            </Cart>
          </Items>
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
