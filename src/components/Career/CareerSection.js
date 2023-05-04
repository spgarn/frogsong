import React from 'react'
import './career.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import Button from '../Button/Button'

const CareerSection = () => {
    return (
        <div className='container'>
            <div className='career-icon-container'>
                <i aria-hidden="true" className='fa fa-gamepad fa-2x career-icon'></i>
            </div>
            <H1>Looking for job opportunities with Frogsong?</H1>
            <H2>We might have a number of available positions on our career page</H2>
            <Button>Read more</Button>
        </div>
    )
}

export default CareerSection