import { ReactNode, createContext, useState } from "react";

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({})

export const CartProvider: React.FC<CartProviderProps> = ( {children} ) => {
    const [ cart, setCart ] = useState([])

    return (
        <CartContext.Provider value={ { cart, setCart } }>
            {children}
        </CartContext.Provider>
    )
}