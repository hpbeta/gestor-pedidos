import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 10px 0 0 49px;
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #000000;
  padding: 10px;

  &:hover {
    background-color: #ab88ec;
    border-radius: 5px;
    color: #ffffff;
  }
`;

export const Main = styled.main`
  border: 1px solid #e7e8ea;
  padding: 25px 20px;
  width: 1200px;
  margin: 10px auto;

  h1 {
    font-size: 25px;
  }

  @media(max-width: 480px) {
    width: 350px;
    overflow-x: hidden;
    }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0 20px 0;
  border-bottom: 1px solid #e7e8ea;

  @media(max-width: 480px) {
    flex-direction: column;
   
    }
`;

export const InputInfo = styled.div`
  display: flex;
  flex-direction: column;

  input {
    outline: none;
    border: none;
    border: 1px solid #e7e8ea;
    border-radius: 5px;
    padding: 10px 10px;
    width: 400px;
    margin-bottom: 50px;
    @media(max-width: 480px) {
   width: 100%;
   
    }
  }

  label {
    font-size: 12px;
    margin-bottom: 7px;
    font-weight: bold;
  }

 
`;

export const Container = styled.div`
  h2 {
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    gap: 10px;
    background-color:#f1f4f9;
    width: 180px;
    padding: 10px;
    border-radius: 5px;
    color: #000000;
  }
`;

export const ListItem = styled.li`
  color: ${({ active }) => (active ? "#000000" : "#9da9b7")};
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;
export const ContainerFoods = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  gap: 30px;
  margin: 0 aut o;
  @media(max-width: 480px) {
    width: 450px;
    }
`;
export const ContainerInfoFoods = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;

  border: 1px solid #e7e8ea;
  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const ContainerInfo = styled.div`
  padding: 0 15px;
`;

export const NameFood = styled.p`
  font-weight: bold;
  margin: 15px 0;
`;

export const DescriptionFood = styled.p`
  color: #869cac;
  font-size: 14px;
  margin-bottom: 20px;
  height: 110px;
`;

export const ContainerCount = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: #f1f4f9;
  padding: 5px 0;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const ButtonAdd = styled.button`
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Signal = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #869cac;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #ffffff;
  cursor: pointer;
`;


