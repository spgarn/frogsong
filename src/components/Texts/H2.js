import React from 'react'

const H2 = ({ children, ...rest }) => {
    return (
        <h2 {...rest} className='h2'>{children}</h2>
    )
}

export default H2