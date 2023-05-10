
import Loader from '../../components/Loader/Loader'
import ContactFormJob from '../../components/ContactForm/contactFormJob'
import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { fetchJobOpenings } from '../../utils/contentfulConnector'
import JobList from '../../components/Career/JobList'
import { useQuery } from '@tanstack/react-query'
import H1 from '../../components/Texts/H1'

const Career = () => {

    const { data: jobs, isLoading } = useQuery(['jobs'], async () => {
        return await fetchJobOpenings();
    });


    const [subject, setSubject] = useState('Career: General interest');

    if (isLoading) return <Loader />


    return (
        <>
            <PageHeader title={'Life at Frogsong'} description={'Enjoy a colorful life at frogsong! Here we live and work playfully and creatively!'} />
            <H1 style={{ textAlign: 'center' }}>{'<Insert Life at frogsong here>'}</H1>
            <PageHeader title={'Job Openings'} description={'Below you will find our current job openings!'} />
            <JobList setSubject={setSubject} jobs={jobs}></JobList>
            <ContactFormJob subject={subject}></ContactFormJob>
        </>
    )
}

export default Career