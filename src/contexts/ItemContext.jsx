import { createContext, useState } from "react";
import foods from "../pages/Home/foods";
import drinks from "../pages/Home/drink";

export const ItemContext = createContext({});

export function ItemProvider({ children }) {
  const [mesa, setMesa] = useState("");
  const [client, setClient] = useState("");
  const [newOrder, setNewOrder] = useState([]);
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

      setNewOrder((prev) => [...prev, newItem]);g
      alert("Item Adicionado com sucesso");
    } else {
      alert("Adicione um produto");
    }
  }

  const filteredItems = categoryActive === "comidas" ? foods : drinks;

  return (
    <ItemContext.Provider
      value={{
        mesa,
        setMesa,
        client,
        setClient,
        newOrder,
        setNewOrder,
        categoryActive,
        setCategoryActive,
        counts,
        setCounts,
        handleIncrement,
        handleDecrement,
        handleAddToOrder,
        filteredItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
