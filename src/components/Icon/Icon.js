import React from 'react'
import './icon.css'

const Icon = ({classname,...rest}) => {
  return (
    <div className='icon-container' {...rest}>
        <i aria-hidden="true" className={`${classname}`}></i>
    </div>
  )
}

export default Icon