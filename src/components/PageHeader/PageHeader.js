import React from 'react'
import './pageHeader.css'
import H1 from '../Texts/H1'
import H4 from '../Texts/H4'
import H2 from '../Texts/H2'

const PageHeader = ({ title, description, subTitle }) => {
    return (
        <div className='page-header'>
            <H1>{title}</H1>
            {subTitle && <H2>{subTitle}</H2>}
            {description && <H4>{description}</H4>}
        </div>
    )
}

export default PageHeader