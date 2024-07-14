import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PrimaryColor } from "../Variables";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mobile, small, mid } from "../responsive";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none" })};
  ${small({ height: "91vh", gap: "50px" })};
  ${mid({ height: "81vh" })}
`;

const LeftArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${PrimaryColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 40px;
  padding-left: 5px;
  cursor: pointer;
  z-index: 2;
  ${mid({ left: "20px" })}
`;

const RightArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${PrimaryColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  right: 40px;
  cursor: pointer;
  z-index: 2;
  ${mid({ right: "20px" })}
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${small({ flexDirection: "column", gap: "50px" })}
`;

const ImgContainer = styled.div`
  flex: 0.6;
`;

const Image = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  ${small({ alignItems: "center" })}
  ${mid({ gap: "40px" })}
`;

const Title = styled.h1`
  font-size: 60px;
  letter-spacing: 1px;
  font-weight: 600;
  ${small({ fontSize: "40px" })}
  ${mid({ fontSize: "45px" })}
`;

const Paragraph = styled.p`
  max-width: 550px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid ${PrimaryColor};
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <LeftArrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "600" }} />
      </LeftArrow>
      <Wrapper slideindex={slideIndex}>
        {products
          .filter((p) => p.id === 1 || p.id === 7 || p.id === 14 || p.id === 15)
          .map((s) => (
            <Slide key={s.id} style={{ backgroundColor: s.bg }}>
              <ImgContainer>
                <Image src={s.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{s.title}</Title>
                <Paragraph>{s.description.slice(0, 390)}</Paragraph>
                <Link
                  to={`/productslist/${s.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button>Show Now</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <RightArrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon style={{ fontSize: "20px", fontWeight: "600" }} />
      </RightArrow>
    </Container>
  );
};

export default Slider;
