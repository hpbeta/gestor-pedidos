import { createContext, useState } from "react";

 export const ItemContext = createContext({})


export function ItemProvider({children}) {

    const [ mesa, setMesa ] = useState("")
    const [ client, setClient ] = useState("")
    const [newOrder, setNewOrder] = useState([])
    return(
        <ItemContext.Provider value={{mesa, setMesa, client, setClient, newOrder, setNewOrder}}>
            {children}
        </ItemContext.Provider>
    )
}



