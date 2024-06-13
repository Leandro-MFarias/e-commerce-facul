import { Products } from '../Products'
import { Card } from '../Card'
import './catalogo.css'


export const Catalogo: React.FC = () => {
    return (
        <section className='catalogo' id='catalogo'>
            <h2>Catálogo</h2>

            <div className='produtos'>
                {Products.map(product => (
                    <Card key={product.id} data={product}/>
                ))}
            </div>
        </section>
    )
}
