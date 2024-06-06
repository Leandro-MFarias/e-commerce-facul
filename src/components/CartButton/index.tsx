import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context";

export const CartButton: React.FC = () => {
    const { cart } = useContext(CartContext)

    return (
        <Link to='/Cart'>
            <span className='nav-link cart'><FaCartShopping /> Carrinho</span>
            { cart.length > 0 && <span className='cart-status'>{cart.length}</span>}
            
        </Link>
    )
}