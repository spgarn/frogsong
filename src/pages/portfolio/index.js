import React from 'react'
import { fetchPortfolio } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import './gamesPage.css'
import Loader from '../../components/Loader/Loader'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon'


const Portfolio = () => {
    const { data: games, isLoading } = useQuery(['portfolio'], async () => {
        return await fetchPortfolio();
    });

    if (isLoading) return <Loader />
    return (
<>
            <Card title={'Games'} description={'This is where you will find all the different projects we have been involved with!'} className='page-game-list' style={{gap:'40px'}} >
            <Icon className={'fa fa-handshake-o fa-2x icon-container'}></Icon>
            {games.items.map(project => <GameCard key={project.fields.id} game={project.fields}></GameCard>)}
            
            </Card >
                    </>
    )
}

export default Portfolio