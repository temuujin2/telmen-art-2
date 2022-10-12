import { createContext, useContext, useState } from "react";
import ShopData from './data/ShopData.json'

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
    const [isShopData, setIsShopData] = useState(ShopData)

    return (
        <ShopContext.Provider value={{ isShopData, setIsShopData }} >
            {children}
        </ShopContext.Provider >
    )
}

export const ShopDataContext = () => useContext(ShopContext)