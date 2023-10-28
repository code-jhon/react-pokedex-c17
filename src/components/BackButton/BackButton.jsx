import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  text-align: center;
  
  a {
    cursor: pointer;
    color: white;
    text-transform: none;
  }

  &:hover {
      background-color: darkslategray;
  }
`

export const BackButton = () => (
  <StyledButton>
    <Link to="/">Regresar</Link>
  </StyledButton>
);
