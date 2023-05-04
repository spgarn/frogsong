import React from 'react'
import GameCard from './GameCard'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import H2 from '../Texts/H2'
import H1 from '../Texts/H1'
import { Link } from 'gatsby'


const Games = ({ ...rest }) => {
    const [projects, setProjects] = React.useState()
    const limitProjects = 6
    const items = fetchProjectsLandingPage(limitProjects)

    React.useEffect(() => {
        items.then(response => setProjects(response))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!projects) return

    return (
        <div className='game-list' {...rest}>
            <H1 className='game-area-top-text'>Latest projects!</H1>
            {projects.items.map(project => {
                return <GameCard key={project.fields.id} game={project.fields} />
            })}

            <Link to={'/projects'}>
                <H2 className='game-area-bottom-text'>View all projects</H2>
            </Link>
        </div>
    )
}

export default Games