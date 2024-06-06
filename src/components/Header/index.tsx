import { useState } from 'react'
import { Link } from 'react-router-dom';

import './header.css'
import { SearchBar } from '../SearchBar';
import { CartButton } from '../CartButton';

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="header">
            <nav className="navbar">
                <Link to='/'>
                    <h2>CBS Soldas</h2>
                </Link>

                <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' >
                            <p className='nav-link' onClick={closeMenu}>Catálogo</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <SearchBar />
                    </li>
                    <li className='nav-item'>
                        <CartButton onClick={closeMenu} />
                    </li>
                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    )
}