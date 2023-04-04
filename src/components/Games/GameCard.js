import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'

const GameCard = () => {
    const games = [
        { url: 'https://usercontent.one/wp/frogsong-studios.com/wp-content/themes/frogsong/img/dcorp_smaller.jpg', title: 'D-corp', text: 'Our Second IP!', id: 1 },
        { url: 'https://image.api.playstation.com/cdn/EP0700/CUSA05952_00/SKFhXuFHR4VLamKO8TleItaxGc4iXDFX.png', title: 'Little Nightmare', text: 'A game by Tarsier Studios', id: 2 },
        { url: 'https://usercontent.one/wp/frogsong-studios.com/wp-content/themes/frogsong/img/portfolio/tabs.jpg', title: 'Totally Accurate Battle Simulator', text: 'A game by Landfall Games', id: 3 },
        { url: 'https://usercontent.one/wp/frogsong-studios.com/wp-content/themes/frogsong/img/portfolio/stretchers.jpg', title: 'Stretchers', text: 'A game by Tarsier Studios', id: 4 }
    ]
    return (
        games.map(game => {
            console.log(game)
            return (
                <div key={game.id} style={{ backgroundImage: `url(${game.url})` }} className='game-card'>
                    <div className='text-wrapper'>
                        <H3>{game.title}</H3>
                        <H4>{game.text}</H4>
                    </div>
                </div>
            )
        })

    )
}

export default GameCard