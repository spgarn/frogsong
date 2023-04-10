import React from 'react'

const H2 = ({ children, className, ...rest }) => {
    return (
        <h2 {...rest} className={`h2 ${className && className}`}>{children}</h2>
    )
}

export default H2