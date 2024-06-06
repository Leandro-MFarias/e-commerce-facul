import './banner.css'
import banner from '../../assets/thumb.jpg'

export const Banner: React.FC = () => {
    return (
        <section className='banner'>
            <div className='container'>
                <img src={banner} alt="" />
            </div>
        </section>
    )
}