import React from 'react'

const H3 = ({ children, className, ...rest }) => {
    return (
        <h3 {...rest} className={`h1 ${className && className}`}>{children}</h3>
    )
}

export default H3