import { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { CartContext } from "../../context";

export const CartItem: React.FC = ({ data }) => {
    const { cart, setCart } = useContext(CartContext)

    const { image, title, descricao, preco, id } = data

    function handleRemoveItem() {
        const removeItem = cart.filter((item) => item.id !== id)
        setCart(removeItem)
    }

    return (
        <div className='produto'>
            <img src={image} alt="" />

            <div className="produto-info">
                <div className="title-price">
                    <h3>{title}</h3>
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