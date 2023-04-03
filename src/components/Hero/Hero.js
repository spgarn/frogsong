import React from 'react'
import './hero.css'
import SpellSworn from '../../../static/SpellSworn.png'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import Button from '../Button/Button'

const Hero = ({ ...rest }) => {
    return (
        <div  {...rest}>
            <div style={{ backgroundImage: `url(${SpellSworn})` }} className='hero'>
                <H1>SpellSworn</H1>
                <H2 style={{ maxWidth: '50%' }}>Enter a world of magic and battle, where your wits and reflexes
                    will be pushed to their limits! Choose your spells, enter the
                    everchanging arena and prepare to obliterate all who stand in
                    your way!</H2>
                <Button>Try it out!</Button>
            </div>
        </div>
    )
}

export default Hero