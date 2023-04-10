import React from 'react'
import Image from '../../../static/Logo.png'
import LogoText from '../Texts/LogoText'
import { Link } from 'gatsby'

const Logo = () => {
    return (
        <Link className='logo' to="/">
            <img alt="noreferer" src={Image}></img>
            <LogoText>Frogsong studios</LogoText>
        </Link>
    )
}

export default Logo