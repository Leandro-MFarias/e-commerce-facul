import { Banner } from "../../components/Banner"
import { Catalogo } from "../../components/Catalogo"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Partners } from "../../components/Partners"

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <Banner />
            <Catalogo />
            <Partners />
            <Footer />
        </>
    )
}