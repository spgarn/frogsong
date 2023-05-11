import React from 'react'
import Button from '../Button/Button'
import './career.css'
import { Link } from 'gatsby'
import PageHeader from '../PageHeader/PageHeader'

const CareerSection = () => {
    return (
        <div className='container'>
            <div className='career-icon-container'>
                <i aria-hidden="true" className='fa fa-gamepad fa-2x career-icon'></i>
            </div>
            <PageHeader title={'Looking for job opportunities with Frogsong?'} subTitle={'We might have a number of available positions on our career page'} />
            <Link to="/career">
                <Button>Read more</Button>
            </Link>
        </div>
    )
}

export default CareerSection