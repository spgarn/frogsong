import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageHeader from '../../components/PageHeader/PageHeader'

const About = () => {
    return (
        <Layout>
            <PageHeader title={'About'} description={'This is where you will find general information about us!'} />
            <div>About</div>
        </Layout>
    )
}

export default About