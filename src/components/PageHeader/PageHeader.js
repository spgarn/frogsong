import React from 'react'
import H1 from '../Texts/H1'
import H4 from '../Texts/H4'
import './pageHeader.css'

const PageHeader = ({ title, description }) => {
    return (
        <div className='page-header'>
            <H1>{title}</H1>
            <H4>{description}</H4>
        </div>
    )
}

export default PageHeader