import React from 'react'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import './gamesPage.css'
import Loader from '../../components/Loader/Loader'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card/Card'


const Games = () => {
    const { data: games, isLoading } = useQuery(['projcets'], async () => {
        return await fetchProjectsLandingPage(6);
    });

    if (isLoading) return <Loader />
    return (
        <div className='games-wrapper'>
            <Card title={'Games'} description={'This is where you will find all the different projects we have been involved with!'} className='page-game-list' >{games.items.map(project => <GameCard key={project.fields.id} game={project.fields}></GameCard>)}</Card >
        </div>
    )
}

export default Games