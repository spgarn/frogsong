import React from 'react'

const H4 = ({ children, className, ...rest }) => {
    return (
        <h4 {...rest} className={`h4 ${className && className}`}>{children}</h4>
    )
}

export default H4