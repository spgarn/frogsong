import React from 'react'
import Layout from '../../components/Layout/Layout'
import { fetchProjectsLandingPage } from '../../utils/contentfulConnector'
import GameCard from '../../components/Games/GameCard'
import './projectPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'


const Projects = () => {
    const [projects, setProjects] = React.useState()
    const items = fetchProjectsLandingPage()

    React.useEffect(() => {
        items.then(response => setProjects(response))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!projects) return
    return (
        <Layout>
            <PageHeader title={'Projects'} description={'This is where you will find all the different projects we have been involved with!'} />
            <div className='page-game-list' style={{ marginTop: '50px' }}>{projects.items.map(project => <GameCard key={project.fields.id} game={project.fields}></GameCard>)}</div>
        </Layout >
    )
}

export default Projects