import React from 'react'

const H1 = ({ children, className, ...rest }) => {
    return (
        <h1 {...rest} className={`h1 ${className && className}`}> {children}</h1 >
    )
}

export default H1