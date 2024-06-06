import { useContext } from "react"
import { CartContext } from "../../context"
import { CartItem } from "../CartItem"

import './cart.css'

export const Cart: React.FC = () => {
    const { cart } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, item) => item.preco + acc, 0)

    return (
        <section className="cart-container">
            <h2>Seu Carrinho!</h2>
            <h2>Total: {totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}</h2>
            <div className="cart-product">
                {
                    cart.map(cartItem => <CartItem key={cartItem.id} data={cartItem} />)
                }
            </div>
        </section>
    )
}