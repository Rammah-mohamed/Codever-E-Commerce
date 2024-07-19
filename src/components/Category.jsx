import styled from "styled-components";
import { PrimaryColor } from "../Variables";
import { Link } from "react-router-dom";
import { mid, mobile, small } from "../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  ${mobile({ padding: "15px" })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${mobile({ flexDirection: "column" })}
  ${small({ flexDirection: "column" })}
	${mid({ gap: "15px" })}
`;

const Item = styled.div`
  position: relative;
  flex: 1;
  cursor: pointer;
  border: 2px solid ${PrimaryColor};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* ${mobile({ height: "41vh" })} */
  /* ${mid({ height: "60vh" })} */
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
  gap: 60px;
  color: #ebebeb;
  ${mobile({ gap: "40px" })}
  ${mid({ gap: "40px" })}
`;

const Header = styled.h2`
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 4px 3px ${PrimaryColor};
  ${mobile({ fontSize: "24px" })}
  ${mid({ fontSize: "26px" })}
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: 060;
  text-transform: uppercase;
  color: white;
  background-color: ${PrimaryColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({ width: "120px", height: "40px", fontSize: "16px" })}
  ${mid({ fontSize: "17px" })}
`;

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <Container>
      <h1 style={{ color: PrimaryColor, margin: "15px 0px", fontSize: "35px" }}>
        Categories :
      </h1>
      <Wrapper>
        {products
          .filter((p) => p.id === 1 || p.id === 7 || p.id === 14 || p.id === 15)
          .map((c) => (
            <Item key={c.id}>
              <Image src={c.image} />
              <Title>
                <Header>{c.category}</Header>
                <Link
                  to={`/productslist/${c.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button>Show Now</Button>
                </Link>
              </Title>
            </Item>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Category;
