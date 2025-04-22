import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import { Button, ContainerOrder, Main, ContainerFood, LinkStyled } from "./styles";

export function Bar() {
  const { mesa, client, newOrder } = useContext(ItemContext);

  const drinkOrders = newOrder.filter((item) => item.type === "bebida");
  return (
    <Main>
      <h1>Pedidos para Bar</h1>
      <ContainerFood>
        {drinkOrders.length > 0
          ? drinkOrders.map((item, index) => (
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
          : "Sem pedidos de bar"}
      </ContainerFood>

            <LinkStyled to="/">Voltar</LinkStyled>
    </Main>
  );
}
("");
