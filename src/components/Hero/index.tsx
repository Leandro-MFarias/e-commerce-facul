import destaque from '../../assets/destaque.png'
import './hero.css'

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            <h2>Soldagem de Precisão para Todos os Processos - Lincoln Square Wave, Sua Solução Multifunção!</h2>

            <img src={destaque} alt="Headset Preto" />
        </section>
    )
}