import React from 'react'
import './button.css'

const Button = ({ children, ...rest }) => {
    return (
        <button className='primary-button' {...rest}>{children}</button>
    )
}

export default Button