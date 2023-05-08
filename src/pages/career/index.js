
import Loader from '../../components/Loader/Loader'
import ContactFormJob from '../../components/ContactForm/contactFormJob'
import React, { useState } from 'react'
import CareerList from '../../components/Career/CareerList'
import PageHeader from '../../components/PageHeader/PageHeader'
import { fetchJobOpenings, fetchTeamMembers } from '../../utils/contentfulConnector'
import JobList from '../../components/Career/JobList'
import { useQuery } from '@tanstack/react-query'

const Career = () => {

    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });
    const { data: jobs, isLoading } = useQuery(['jobs'], async () => {
        return await fetchJobOpenings();
    });


    const [subject, setSubject] = useState('Career: General interest');

    if (isLoading || teamIsLoading) return <Loader />


    return (
        <>
            <PageHeader title={'Career'} description={'This is where you find all our talented members of Frogsong studios!'} />
            <CareerList employees={teamMembers}></CareerList>
            <PageHeader title={'Job Openings'} description={'Below you will find our current job openings!'} />
            <JobList setSubject={setSubject} jobs={jobs}></JobList>
            <ContactFormJob subject={subject}></ContactFormJob>
        </>
    )
}

export default Career