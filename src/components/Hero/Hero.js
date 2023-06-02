import React from 'react'
import Button from '../Button/Button'
import './hero.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'

const Hero = ({ heroData, ...rest }) => {


    return (
        <div  {...rest}>
            <div style={{ backgroundImage: `url(${heroData.fields.image.fields.file.url})` }} className='hero'>
                
               {/*  <H1 style={{ padding: '0px 12px' }}>{heroData.fields.heading}</H1>
                <H2 style={{ padding: '0px 12px' }}>{heroData.fields.subhead}</H2> */}
                <a target='_blank' href={heroData.fields.buttonLink} rel="noreferrer" style={{ padding: '0px 12px' }}>
                    <Button style={{width:'200px',borderRadius:'2px'}}>Try it out now!</Button>
                </a>
             

            </div>
        </div >
    )
}

export default Hero