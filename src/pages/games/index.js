import React from 'react'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import './gamesPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Loader from '../../components/Loader/Loader'
import { useQuery } from '@tanstack/react-query'


const Games = () => {
    const { data: games, isLoading } = useQuery(['projcets'], async () => {
        return await fetchProjectsLandingPage(6);
    });

    if (isLoading) return <Loader />
    return (
        <div style={{minHeight:'85vh',padding:'0px 12px'}}>
            <PageHeader title={'Games'} description={'This is where you will find all the different projects we have been involved with!'} />
            <div className='page-game-list' style={{ marginTop: '50px' }}>{games.items.map(project => <GameCard key={project.fields.id} game={project.fields}></GameCard>)}</div>
        </div>
    )
}

export default Games