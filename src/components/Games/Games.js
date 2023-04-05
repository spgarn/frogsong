import React from 'react'
import GameCard from './GameCard'
import { fetchProjects } from '../../utils/contentfulConnector'

const Games = ({ ...rest }) => {
    const [projects, setProjects] = React.useState()
    const items = fetchProjects()

    React.useEffect(() => {
        items.then(response => setProjects(response))
    }, [])

    if (!projects) return

    return (
        <div className='game-list' {...rest}>
            {projects.items.map(project => {
                return <React.Fragment key={project.fields.id}>
                    <GameCard game={project.fields} />
                </React.Fragment>
            })}
        </div>
    )
}

export default Games