import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import { Button, ContainerFood, ContainerOrder, LinkStyled, Main } from "./styles";


export function Kitchen() {
  const { mesa, client, newOrder } = useContext(ItemContext);

  const foodOrders = newOrder.filter((item) => item.type === "comida");
  return (
    <Main>
      <h1>Pedidos para cozinha</h1>
      <ContainerFood>
        {foodOrders.length > 0
          ? foodOrders.map((item, index) => (
              <ContainerOrder>
                <p key={index}>
                  Mesa {mesa} - {client}
                </p>
                <p>
                  {item.quantity}x {item.name}
                </p>
                <Button>Iniciar preparo</Button>
              </ContainerOrder>
            ))
          : "Sem pedidos de cozinha"}
      </ContainerFood>

      <LinkStyled to="/">Voltar</LinkStyled>
    </Main>
  );
}
("");
