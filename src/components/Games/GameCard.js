import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'

const GameCard = ({ game }) => {

    return (
        <div style={{ backgroundImage: `url(${game.url.fields.file.url})` }} className='game-card'>
            <div className='text-wrapper'>
                <H3>{game.title}</H3>
                <H4>{game.infoText}</H4>
            </div>
        </div>
    )
}

export default GameCard