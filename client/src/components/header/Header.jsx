import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import close from '../../assets/Close.svg'
import './header.css'
import PropTypes from 'prop-types'
import menuBurger from '../../assets/hamburger.svg'
import { useState } from 'react'



function Header() {
    const { pathname } = useLocation()
    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <section className='header'>
            <Link to='/' className="logo">
                <h1>Islamic</h1>
                <img src={logo} alt="site logo" />
                <h1>Knowledge</h1>
            </Link>
            <img
                src={menuBurger}
                alt="menu icon"
                className='menuBurger'
                onClick={() => setDisplayMenu(!displayMenu)}
            />
            <div className={displayMenu ? 'header-right display' : 'header-right'}>
                <img src={close} alt='' className='close' onClick={() => setDisplayMenu(!displayMenu)} />
                <ul>
                    <Link to='/' onClick={() => setDisplayMenu(!displayMenu)}>
                        <li className={pathname === '/' ? 'orange' : ''} >Home</li>
                    </Link>
                    <Link to='/quran' onClick={() => setDisplayMenu(!displayMenu)}>
                        <li className={pathname === '/quran' ? 'orange' : ''}>Quran</li>
                    </Link>
                    <Link to='/hadith' onClick={() => setDisplayMenu(!displayMenu)}>
                        <li className={pathname === '/hadith' ? 'orange' : ''}>Hadith</li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}
Header.propTypes = {
    setWord: PropTypes.func,
    word: PropTypes.string,
    handleSearch: PropTypes.func
}
export default Header