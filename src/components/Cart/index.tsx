import { useContext } from "react"
import { CartContext } from "../../context"
import { CartItem } from "../CartItem"
import { IProduct } from "../Products"
import './cart.css'

export const Cart: React.FC = () => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("CartItem precisa estar dentro de um CartProvider")
    }

    const { cart } = context

    const totalPrice = cart.reduce((acc: number, item: IProduct) => item.preco + acc, 0)

    return (
        <section className="cart-container">
            <h2>Seu Carrinho!</h2>
            <h2>Total: {totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}</h2>
            <div className="cart-product">
                {
                    cart.map((cartItem: IProduct) => <CartItem key={cartItem.id} data={cartItem} />)
                }
            </div>
        </section>
    )
}