import React from 'react'
import GameCard from './GameCard'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import H2 from '../Texts/H2'
import H1 from '../Texts/H1'
import { Link } from 'gatsby'
import { useQuery } from '@tanstack/react-query'


const Games = ({ loadDataLimit,...rest }) => {
    const { data: projects, isLoading } = useQuery(['LandingProjcets'], async () => {
        return await fetchProjectsLandingPage(loadDataLimit);
    });

    if (isLoading) return

    return (
        <div {...rest}>

     
        <div className='game-list' >
            <H1 className='game-area-top-text'>Latest projects!</H1>
            {projects.items.map(project => {
                return <GameCard key={project.fields.id} game={project.fields} />
            })}

        </div>
        <Link to={'/projects'}>
                <H2 className='game-area-bottom-text'>View all projects</H2>
            </Link>
        </div>
    )
}

export default Games