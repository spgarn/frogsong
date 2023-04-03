import React from 'react'

const H4 = ({ children, ...rest }) => {
    return (
        <h4 {...rest} className='h4'>{children}</h4>
    )
}

export default H4