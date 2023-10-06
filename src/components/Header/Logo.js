import React from 'react'
import Image from '../../../static/Logo.png'
import LogoText from '../Texts/LogoText'
import { Link } from 'gatsby'
import './header.css'

const Logo = () => {
    return (
        <Link className='logo' to="/">
            <img className='logo-image' alt="noreferer" src={Image}></img>
        </Link>
    )
}

export default Logo