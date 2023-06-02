import React from 'react'
import './card.css'
import PageHeader from '../PageHeader/PageHeader'

const Card = ({children,className,title,description,...rest}) => {
  return (
    <div style={{marginTop:'100px'}}>
      <PageHeader title={title} description={description}></PageHeader>
    <div {...rest} className={`card ${className}`}>{children}</div>
    </div>
  )
}

export default Card