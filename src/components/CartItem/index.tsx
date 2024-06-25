import { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { CartContext } from "../../context";
import { IProduct } from "../Products";
import './cartItem.css'

export interface CartItemProps {
    data: IProduct
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("CartItem precisa estar dentro de um CartProvider")
    }

    const { cart, setCart } = context

    const { image, name, descricao, preco, id } = data

    function handleRemoveItem() {
        const removeItem = cart.filter((item) => item.id !== id)
        setCart(removeItem)
    }

    return (
        <section className='item-cart'>
            <img src={image} alt={name} />

            <div className="info-cart">
                <h3>{name}</h3>
                <p className="info-price"><strong>{preco.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</strong></p>
                <p className="cart-descricao">{descricao}</p>
                <button onClick={handleRemoveItem}><BsCartDashFill /> Remover</button>
            </div>
        </section>
    )
}