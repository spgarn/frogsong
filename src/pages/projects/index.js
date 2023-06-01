import React from 'react'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import './projectPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Loader from '../../components/Loader/Loader'
import { useQuery } from '@tanstack/react-query'


const Projects = () => {
    const { data: projects, isLoading } = useQuery(['projcets'], async () => {
        return await fetchProjectsLandingPage(6);
    });

    if (isLoading) return <Loader />
    return (
        <div style={{minHeight:'85vh',padding:'0px 12px'}}>
            <PageHeader title={'Projects'} description={'This is where you will find all the different projects we have been involved with!'} />
            <div className='page-game-list' style={{ marginTop: '50px' }}>{projects.items.map(project => <GameCard key={project.fields.id} game={project.fields}></GameCard>)}</div>
        </div>
    )
}

export default Projects