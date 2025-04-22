import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import {
  Button,
  ContainerFood,
  ContainerOrder,
  LinkStyled,
  Main,
} from "./styles";

export function OrderList({ type, title }) {
  const { mesa, client, newOrder } = useContext(ItemContext);

  const filteredOrders = newOrder.filter((item) => item.type === type);

  return (
    <Main>
      <h1>{title}</h1>
      <ContainerFood>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((item, index) => (
            <ContainerOrder key={index}>
              <p>
                Mesa {mesa} - {client}
              </p>
              <p>
                {item.quantity}x {item.name}
              </p>
              <Button>Iniciar preparo</Button>
            </ContainerOrder>
          ))
        ) : (
          <p>Sem pedidos de {type}</p>
        )}
      </ContainerFood>
      <LinkStyled to="/">Voltar</LinkStyled>
    </Main>
  );
}