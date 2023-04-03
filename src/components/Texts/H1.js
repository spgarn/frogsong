import React from 'react'

const H1 = ({ children, ...rest }) => {
    return (
        <h1 {...rest} className='h1'>{children}</h1>
    )
}

export default H1