import styled from "styled-components"
import {PrimaryColor} from "../Variables"

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PrimaryColor};
  color: white;
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <Paragraph>Super Deal! Free Shipping on Order Over $20</Paragraph>
    </Container>
  )
}

export default Announcement