import React from 'react'
import GameCard from './GameCard'

const Games = ({ ...rest }) => {
    return (
        <div className='game-list' {...rest}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    )
}

export default Games