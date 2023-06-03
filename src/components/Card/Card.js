import React from 'react'
import './card.css'
import PageHeader from '../PageHeader/PageHeader'

const Card = ({children,className,title,description,...rest}) => {
  return (
    <div {...rest} className='card-wrapper'>
      <PageHeader title={title} description={description}></PageHeader>
    <div  className={`card ${className}`}>{children}</div>
    </div>
  )
}

export default Card