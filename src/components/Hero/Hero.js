import React from 'react'
import Button from '../Button/Button'
import './hero.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'

const Hero = ({ heroData, ...rest }) => {


    return (
        <div  {...rest}>
            <div style={{ backgroundImage: `url(${heroData.fields.image.fields.file.url})` }} className='hero'>
                <div className='hero-text-wrapper'>


                    {/* {heroData.fields.heading && <H1 className={'no-text-shadow'} style={{ padding: '0px 12px' }}>{heroData.fields.heading}</H1>}
                    {heroData.fields.subhead && <H2 className={'no-text-shadow'} style={{ padding: '0px 12px', textTransform: 'uppercase' }}>{heroData.fields.subhead}</H2>}
                    <a target='_blank' href={heroData.fields.buttonLink} rel="noreferrer" style={{ padding: '0px 12px' }}>
                        <Button style={{ width: '200px', borderRadius: '2px' }}>Try it out now!</Button>
                    </a> */}
                  <H1 className={'no-text-shadow'} style={{ padding: '0px 12px' }}>We are now looking for new challenges and collaborations.</H1>
                  <H2 className={'no-text-shadow'} style={{ padding: '0px 12px' }}>Contact us below for more information!</H2>
                     <a href={"/contact"} rel="noreferrer" style={{ padding: '0px 12px' }}>
                        <Button style={{ width: '200px', borderRadius: '2px' }}>Contact us here!</Button>
                    </a> 
                </div>

            </div>
        </div >
    )
}

export default Hero