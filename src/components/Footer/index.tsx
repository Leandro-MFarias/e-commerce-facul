import './footer.css'

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <h2>CBS Soldas</h2>
            
            <div className="footer-container">
                <div className="footer-info">
                    <h4>Links</h4>

                    <p>Política de Privacidade</p>
                    <p>Política de Reembolso</p>
                    <p>Política de Cancelamento</p>
                    <p>Termos de Serviço</p>
                </div>
                <div className="footer-info">
                    <h4>Serviços</h4>

                    <p>Sobre Nós</p>
                    <p>Lista de desejos</p>
                    <p>Cupons</p>
                </div>
                <div className="footer-info">
                    <h4>Contato</h4>

                    <p>(11) 976597788</p>
                    <p>cbs.soldas@cbssoldas.com.br</p>
                    <p>R.Eng. Pegado, 1719 - Vila Carrao,<br/> São Paulo - SP, 03430-003</p>
                </div>
            </div>
        </footer>
    )
}