import styled from "styled-components"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {PrimaryColor} from "../Variables"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 60px;

  ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${PrimaryColor};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #777;
  text-align: justify;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  `;

const Icon =styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color === "twittwr" ? "#1da1f2": props.color === "instagram"? "#c13584":"#0a66c2"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mobile({display:"none"})}
`;

const Header = styled.h2`
  font-size: 26px;
  font-weight: 500;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.li`
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Contact = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mobile({alignItems:"flex-start"})}
`;

const ContactTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction:column;
  gap: 60px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #555;
`

const Footer = () => {
  return (
    <Container>
      <Info>
        <Title>Codever.</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia aperiam vero dolorum similique dolores tempore enim? Consectetur aperiam modi est quas temporibus, repellendus itaque rem quam nulla magni ratione!</Desc>
        <Icons>
          <a href="https://twitter.com/Rammah44816850">
            <Icon color={"twitter"}><TwitterIcon style={{fontSize:"30px"}}/></Icon>
          </a>
          <a href="https://www.instagram.com/rammah.mohamed/">
            <Icon color={"instagram"}><InstagramIcon style={{fontSize:"30px"}}/></Icon>
          </a>
          <a href="https://www.linkedin.com/in/rammah-mohamed-58161a26b/">
            <Icon color={"linkedin"}><LinkedInIcon style={{fontSize:"30px"}}/></Icon>
          </a>
        </Icons>
      </Info>
      <ListContainer>
        <Header>Useful Links</Header>
        <List>
          <Left>
            <Item>Home</Item>
            <Item>Man Fashion</Item>
            <Item>Accessories</Item>
            <Item>Order Tracking</Item>
            <Item>Wishlist</Item>
          </Left>
          <Right>
            <Item>Cart</Item>
            <Item>Women Fashion</Item>
            <Item>My account</Item>
            <Item>Terms</Item>
            <Item>News</Item>
          </Right>
        </List>
      </ListContainer>
      <Contact>
          <ContactTitle>Contact</ContactTitle>
        <ContactItems>
          <ContactItem>
            <LocationOnIcon/>
            <Span>Egypt, Cairo</Span>
          </ContactItem>
          <ContactItem>
            <PhoneIcon/>
            <Span>+249 111 8487 4</Span>
          </ContactItem>
          <ContactItem>
            <EmailIcon/>
            <Span>Dev.rammah@gmail.com</Span>
          </ContactItem>
        </ContactItems>
      </Contact>
    </Container>
  )
}

export default Footer