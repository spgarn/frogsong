import React from 'react'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import Layout from '../../components/Layout/Layout'
import './projectPage.css'


const Projects = () => {
    const [projects, setProjects] = React.useState()
    const items = fetchProjectsLandingPage()

    React.useEffect(() => {
        items.then(response => setProjects(response))
    }, [])

    if (!projects) return
    return (
        <Layout>
            <div className='page-game-list' style={{ marginTop: '50px' }}>{projects.items.map(project => <GameCard game={project.fields}></GameCard>)}</div>
        </Layout >
    )
}

export default Projects