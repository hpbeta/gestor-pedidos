import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  margin-left: 20px;

  h1 {
    margin: 50px 0 20px 0;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const ContainerFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1000px;
  margin: 0 auto;


`

export const ContainerOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fef9c2;
  color: #000000;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 150px;
    margin: 0 auto;
    cursor: pointer;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  border: 1px solid #808080;
  border-radius: 5px;
  padding: 5px 30px;
  color: #000000;
  font-size: 12px;
`