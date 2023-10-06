import React from 'react'
import './pageHeader.css'
import H1 from '../Texts/H1'
import H3 from '../Texts/H3'
import H2 from '../Texts/H2'

const PageHeader = ({ title, description, subTitle }) => {
    return (
        <div className='page-header'>
            <H1>{title}</H1>
            {subTitle && <H2>{subTitle}</H2>}
            {description && <H3>{description}</H3>}
        </div>
    )
}

export default PageHeader