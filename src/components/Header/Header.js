import React from 'react'
import './header.css'
import Logo from './Logo'
import Links from './Links'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <Logo></Logo>
            </div>
            <div className='links'>
                <Links></Links>
            </div>
        </nav>
    )
}

export default Header