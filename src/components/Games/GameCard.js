import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'
import { Link } from 'gatsby'


const GameCard = ({ game, to }) => {


    return (
        <Link to={to} key={game.id} >
            <div role='presentation' style={{ backgroundImage: `url(${game.url.fields.file.url}?w=400&h=400&fit=fill&f=center)` }} className='game-card'>
                <div className='text-wrapper'>
                    <H3>{game.title}</H3>
                    <H4>{game.infoText}</H4>
                </div>
            </div >
        </Link>
    )
}

export default GameCard