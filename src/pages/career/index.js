
import Loader from '../../components/Loader/Loader'
import ContactFormJob from '../../components/ContactForm/contactFormJob'
import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { fetchJobOpenings } from '../../utils/contentfulConnector'
import JobList from '../../components/Career/JobList'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon'

const Career = () => {

    const { data: jobs, isLoading } = useQuery(['jobs'], async () => {
        return await fetchJobOpenings();
    });


    const [subject, setSubject] = useState('Career: General interest');

    if (isLoading || !jobs) return <Loader />


    return (
        <>
    
        <Card title={'Job Openings'} description={'Below you will find our current job openings!'} style={{minHeight:'0',gap:'40px'}}>
                <Icon classname={'fa fa-search fa-2x'}></Icon>
                <JobList setSubject={setSubject} jobs={jobs}></JobList>
        </Card>
        <Card title={'Apply here!'} description={'Click on the job opening that interests you above, fill in your email and message. Be sure to upload your CV!'} style={{gap:'40px'}}>
                <Icon classname={'fa fa-envelope fa-2x'}></Icon>
                <ContactFormJob subject={subject}></ContactFormJob>
         </Card>
         </>
    )
}

export default Career