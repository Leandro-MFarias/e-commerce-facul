import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductItem } from "../../components/Product";
import { useParams } from "react-router-dom";
import { Products } from "../../components/Products";

export const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const product = Products.find(p => p.id === parseInt(id || '', 10));

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <>
            <Header />
            <ProductItem data={product} />
            <Footer />
        </>
    );
}
