import React from 'react'
import './texts.css'

const LogoText = ({ children, ...rest }) => {
    return (
        <span className='logo-text' {...rest}>{children}</span>
    )
}

export default LogoText