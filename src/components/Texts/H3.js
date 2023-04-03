import React from 'react'

const H3 = ({ children, ...rest }) => {
    return (
        <h3 {...rest} className='h3'>{children}</h3>
    )
}

export default H3