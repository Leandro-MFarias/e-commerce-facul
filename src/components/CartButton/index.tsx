import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context";

interface CartButtonProps {
    onClick?: () => void
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("CartItem precisa estar dentro de um CartProvider")
    }
    const { cart } = context

    return (
        <Link to='/Cart' onClick={onClick}>
            <span className='nav-link cart'><FaCartShopping /> Carrinho</span>
            { cart.length > 0 && <span className='cart-status'>{cart.length}</span>}
            
        </Link>
    )
}