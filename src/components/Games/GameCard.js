import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'

const GameCard = () => {
    return (
        <div style={{ backgroundImage: 'url(https://image.api.playstation.com/cdn/EP0700/CUSA05952_00/SKFhXuFHR4VLamKO8TleItaxGc4iXDFX.png)' }} className='game-card'>
            <div className='text-wrapper'>
                <H3>Little Nightmare</H3>
                <H4>A game by Tarsier Studios</H4>
            </div>
        </div>
    )
}

export default GameCard