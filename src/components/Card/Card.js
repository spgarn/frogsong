import React from 'react'
import './card.css'
import PageHeader from '../PageHeader/PageHeader'
import { Link } from 'gatsby'

const Card = ({ children, className, title, description, gobackUrl, ...rest }) => {
  return (
    <div {...rest} className='card-wrapper'>
      {gobackUrl && <Link className='go-back' to={gobackUrl}></Link>}
      <PageHeader title={title} description={description}>
      </PageHeader>
      <div className={`card ${className}`}>{children}</div>
    </div>
  )
}

export default Card