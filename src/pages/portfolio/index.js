import React from 'react'
import { fetchPortfolio, fetchPortfolioContentPage } from '../../utils/contentfulConnector'
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

    const { data: portfolio, isLoading: portfolioIsLoading } = useQuery(['portfolioContentPage'], async () => {
        return await fetchPortfolioContentPage();
    });

    if (isLoading || !games || !portfolio || portfolioIsLoading) return <Loader />


    return (
        <>
            <Card title={portfolio.fields.title} description={portfolio.fields.shortText || portfolio.fields.subTitle} className='page-game-list' >
                <Icon className={'fa fa-handshake-o fa-2x icon-container'}></Icon>
                {games.items.map(project => <GameCard to={`/portfolio/${project.fields.slug}`} key={project.sys.id} game={project.fields}></GameCard>)}

            </Card >
        </>
    )
}

export default Portfolio