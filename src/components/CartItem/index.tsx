import { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { CartContext } from "../../context";
import { IProduct } from "../Products";

export interface CartItemProps {
    data: IProduct
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error("CartItem precisa estar dentro de um CartProvider")
    }

    const { cart, setCart } = context

    const { image, name, descricao, preco, id } = data

    function handleRemoveItem() {
        const removeItem = cart.filter((item) => item.id !== id)
        setCart(removeItem)
    }

    return (
        <div className='produto'>
            <img src={image} alt="" />

            <div className="produto-info">
                <div className="title-price">
                    <h3>{name}</h3>
                    <p>{preco.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</p>
                </div>

                <div className="descricao">
                    <p>{descricao}</p>
                    <button onClick={ handleRemoveItem }><BsCartDashFill /> Remover</button>
                </div>
            </div>
        </div>
    )
}