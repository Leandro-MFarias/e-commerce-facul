import './partners.css'
import partner1 from '../../assets/partner1.png'
import partner2 from '../../assets/partner2.png'
import partner3 from '../../assets/partner3.png'
import partner4 from '../../assets/partner4.png'
import partner5 from '../../assets/partner5.png'
import partner6 from '../../assets/partner6.png'
import partner7 from '../../assets/partner7.png'
import partner8 from '../../assets/partner8.png'
import partner9 from '../../assets/partner9.png'
import partner10 from '../../assets/partner10.png'
import partner11 from '../../assets/partner11.png'
import partner12 from '../../assets/partner12.png'
import partner from '../../assets/partners-1.png'


export const Partners: React.FC = () => {
    return (
        <section className='container-partners'>
            <div className='title-partners'>
                <div className='line'></div>
                <h2>Nossos Parceiros</h2>
                <div className='line'></div>
            </div>


            <div className="partner-images">
                <img src={partner} alt="homem com solda" />

                <div className='partners'>
                    <img src={partner1} alt="" />
                    <img src={partner2} alt="" />
                    <img src={partner3} alt="" />
                    <img src={partner4} alt="" />
                    <img src={partner5} alt="" />
                    <img src={partner6} alt="" />
                    <img src={partner7} alt="" />
                    <img src={partner8} alt="" />
                    <img src={partner9} alt="" />
                    <img src={partner10} alt="" />
                    <img src={partner11} alt="" />
                    <img src={partner12} alt="" />
                </div>
            </div>
        </section>
    )
}