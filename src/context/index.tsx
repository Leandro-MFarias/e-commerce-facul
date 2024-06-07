import { ReactNode, createContext, useState } from "react";
import { IProduct } from "../components/Products";

interface CartProviderProps {
    children: ReactNode
}

interface CartContextProps {
    cart: IProduct[];
    setCart: React.Dispatch<React.SetStateAction<IProduct[]> >
}

export const CartContext = createContext<CartContextProps | undefined >(undefined)

export const CartProvider: React.FC<CartProviderProps> = ( {children} ) => {
    const [ cart, setCart ] = useState<IProduct[]>([])

    return (
        <CartContext.Provider value={ { cart, setCart } }>
            {children}
        </CartContext.Provider>
    )
}