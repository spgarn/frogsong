import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import ContactFormJob from '../../components/ContactForm/contactFormJob'
import React, { useState } from 'react'
import CareerList from '../../components/Career/CareerList'
import PageHeader from '../../components/PageHeader/PageHeader'
import { fetchTeamMembers } from '../../utils/contentfulConnector'
import JobList from '../../components/Career/JobList'

const Career = () => {

    const [employees, setEmployees] = React.useState()
    const [subject, setSubject] = useState('Career: General interest');


    const items = fetchTeamMembers()

    React.useEffect(() => {
        items.then(r => setEmployees(r))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    if (!employees) return <Loader />

    return (
        <Layout>
            <PageHeader title={'Career'} description={'This is where you find all our talented members of Frogsong studios!'} />
            <CareerList employees={employees}></CareerList>
            <PageHeader title={'Job Openings'} description={'Below you will find our current job openings!'} />
            <JobList setSubject={setSubject} employees={employees}></JobList>
            <ContactFormJob subject={subject}></ContactFormJob>
        </Layout>
    )
}

export default Career