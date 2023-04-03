import React from 'react'
import Image from '../../../static/Logo.png'
import LogoText from '../Texts/LogoText'

const Logo = () => {
    return (
        <>
            <img className='logo' alt="noreferer" src={Image}></img>
            <LogoText>Frogsong studios</LogoText>
        </>
    )
}

export default Logo