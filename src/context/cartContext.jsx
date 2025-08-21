/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
    const [cart, setCart] = useState(0);
  
    const onAdd = () => {
        setCart((prev) => prev + 1)
    }


    return (
        <CardContext.Provider value={{cart,onAdd}}>
            {children}
        </CardContext.Provider>
    )
}

export const useContextCard = () => {
    return useContext(CardContext)
}