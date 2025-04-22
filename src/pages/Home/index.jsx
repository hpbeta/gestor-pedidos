import {
  Nav,
  LinkStyle,
  Main,
  ContainerInput,
  InputInfo,
  ContainerInfoFoods,
  ContainerFoods,
  NameFood,
  DescriptionFood,
  ContainerInfo,
  ContainerCount,
  ButtonAdd,
  Signal,
  Container,
  ListItem,
} from "./styles";
import { FaHome, FaHistory } from "react-icons/fa";
import { PiBowlSteam } from "react-icons/pi";
import { TbToolsKitchen3 } from "react-icons/tb";
import foods from "./foods.js";
import drinks from "./drink.js";
import { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext.jsx";

export function Home() {
  const { mesa, setMesa, client, setClient, setNewOrder } =
    useContext(ItemContext);
  const [categoryActive, setCategoryActive] = useState("comidas");
  const [counts, setCounts] = useState(new Array(foods.length).fill(0));

  function handleIncrement(index) {
    const newList = [...counts];
    newList[index] += 1;
    setCounts(newList);
  }

  function handleDecrement(index) {
    const newList = [...counts];
    if (newList[index] > 0) newList[index] -= 1;
    setCounts(newList);
  }

  function handleAddToOrder(item, index) {
    if (client === "" || mesa === "") {
      alert("Preencha o número da mesa e o nome do cliente");
      return;
    }
    if (counts[index] > 0) {
      const newItem = {
        name: item.name,
        quantity: counts[index],
        type: categoryActive === "comidas" ? "comida" : "bebida",
      };

      setNewOrder((prev) => [...prev, newItem]);
      alert("Item Adicionado com sucesso");
    } else {
      alert("Adicione um produto");
    }
  }

  const filteredItems = categoryActive === "comidas" ? foods : drinks;

  return (
    <>
      <Nav>
        <LinkStyle to="/">
          <FaHome />
          Novo Pedido
        </LinkStyle>
        <LinkStyle to="/cozinha">
          <TbToolsKitchen3 />
          Cozinha
        </LinkStyle>
        <LinkStyle to="/bar">
          <PiBowlSteam />
          Bar
        </LinkStyle>
        <LinkStyle to="/historico">
          <FaHistory />
          Histórico
        </LinkStyle>
      </Nav>

      <Main>
        <h1>Novo Pedido</h1>
        <ContainerInput>
          <InputInfo>
            <label>Mesa</label>
            <input
              type="text"
              placeholder="Número da mesa"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
            />
          </InputInfo>
          <InputInfo>
            <label>Nome do Cliente</label>
            <input
              type="text"
              placeholder="Nome do cliente"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </InputInfo>
        </ContainerInput>

        <Container>
          <h2>Cardápio</h2>

          <ul>
            <ListItem
              active={categoryActive === "comidas"}
              onClick={() => setCategoryActive("comidas")}
            >
              Comidas
            </ListItem>
            <ListItem
              active={categoryActive === "bebidas"}
              onClick={() => setCategoryActive("bebidas")}
            >
              Bebidas
            </ListItem>
          </ul>

          <ContainerFoods>
            {filteredItems.map((item, index) => (
              <ContainerInfoFoods key={item.id}>
                <img src={item.image} alt={item.name} />
                <ContainerInfo>
                  <NameFood>{item.name}</NameFood>
                  <DescriptionFood>{item.description}</DescriptionFood>

                  <ContainerCount>
                    <Signal onClick={() => handleDecrement(index)}>-</Signal>{" "}
                    {counts[index]}{" "}
                    <Signal onClick={() => handleIncrement(index)}>+</Signal>
                    <ButtonAdd onClick={() => handleAddToOrder(item, index)}>
                      Adicionar
                    </ButtonAdd>
                  </ContainerCount>
                </ContainerInfo>
              </ContainerInfoFoods>
            ))}
          </ContainerFoods>
        </Container>
      </Main>
    </>
  );
}
