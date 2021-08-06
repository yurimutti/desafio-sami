import React from 'react'
import Search from './Search'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <img src={logo} alt="MyHero Logo"></img>
            </div>
            <div className="header-bottom">
                <h1 className="header-title">Pesquise seus super-heróis favoritos!</h1>
            </div>
        </header>
    )
}

export default Header
