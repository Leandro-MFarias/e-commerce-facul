import { IProduct } from "../Products";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context";
import './produto.css';

export interface CardProps {
    data: IProduct;
}

export const ProductItem: React.FC<CardProps> = ({ data }) => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("CartItem precisa estar dentro de um CartProvider");
    }
    const { cart, setCart } = context;

    function handleAddCart() {
        setCart([...cart, data]);
    }

    return (
        <section className="container-item">
            <div className="item" key={data.id}>
                <img src={data.image} alt={data.name} />
                <div className="item-info">
                    <h3>{data.name}</h3>
                    <p className="item-price">
                        <strong>{data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
                    </p>
                    <p className="item-descricao">{data.descricao}</p>
                    <button onClick={handleAddCart}>
                        <FaCartShopping /> Carrinho
                    </button>
                </div>
            </div>
        </section>
    );
}
