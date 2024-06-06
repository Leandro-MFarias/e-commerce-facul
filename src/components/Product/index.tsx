import { useParams } from "react-router-dom"
import { Products } from "../Products"
import './produto.css'

export const ProductItem: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const product = Products.find(p => p.id === parseInt(id || '', 10))
    if (!product) {
        return <div>Produto não encontrado</div>
    }

    return (
        <article className="container-item">
            <div className="item">
                <img src={product.image} alt={product.name} />

                <div className="item-info">
                    <h3>{product.name}</h3>
                    <div className="item-price">
                        <p>{product.descricao}</p>
                        <p><strong>{product.preco}R$</strong></p>
                    </div>
                    <button>Carrinho</button>
                </div>
            </div>
        </article>
    )
}