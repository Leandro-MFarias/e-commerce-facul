import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context";

export interface CardProps {
    image: string,
    name: string,
    preco: number,
    descricao: string,
    id: number
}

export const Card: React.FC<CardProps> = ({ data }) => {
    const { image, name, descricao, preco, id } = data

    const { cart, setCart } = useContext(CartContext)

    function handleAddCart() {
        setCart([...cart, data])
    }
    return (
        <>

            <div className="produto" key={id}>
                <Link className="box" to={`/product/${id}`} >
                    <img src={image} alt={name} />

                    <div className="produto-info">
                        <div className="title-price">
                            <h3>{name}</h3>
                            <p>{preco.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</p>
                        </div>
                    </div>
                </Link>
                <div className="descricao">
                    <p>{descricao}</p>
                    <button onClick={handleAddCart}><FaCartShopping /> Carrinho</button>
                </div>
            </div>
        </>
    )
}
