import React from 'react'
import './career.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import Button from '../Button/Button'
import { Link } from 'gatsby'

const CareerSection = () => {
    return (
        <div className='container'>
            <div className='career-icon-container'>
                <i aria-hidden="true" className='fa fa-gamepad fa-2x career-icon'></i>
            </div>
            <H1>Looking for job opportunities with Frogsong?</H1>
            <H2>We might have a number of available positions on our career page</H2>
            <Link to="/career">
                <Button>Read more</Button>
            </Link>
        </div>
    )
}

export default CareerSection