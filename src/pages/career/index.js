
import Loader from '../../components/Loader/Loader'
import ContactFormJob from '../../components/ContactForm/contactFormJob'
import React, { useState } from 'react'
import { fetchApplicationFormContentPage, fetchJobContentPage, fetchJobOpenings } from '../../utils/contentfulConnector'
import JobList from '../../components/Career/JobList'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon'

const Career = () => {

    const { data: jobs, isLoading } = useQuery(['jobs'], async () => {
        return await fetchJobOpenings();
    });

    const { data: applicationFormContentPage, isLoading:applicationFormContentPageIsLoading } = useQuery(['applicationFormContentPage'], async () => {
        return await fetchApplicationFormContentPage();
    });

    const { data: jobContentPage, isLoading:jobContentPageIsLoading } = useQuery(['jobContentPage'], async () => {
        return await fetchJobContentPage();
    });

   

    const [subject, setSubject] = useState('Career: General interest');

    console.log(applicationFormContentPage)

    if (isLoading || !jobs || !applicationFormContentPage || applicationFormContentPageIsLoading || !jobContentPage || jobContentPageIsLoading) return <Loader />


    return (
        <>
    
        <Card title={jobContentPage.fields.title} description={jobContentPage.fields.shortText} style={{minHeight:'0',gap:'40px'}}>
                <Icon classname={'fa fa-search fa-2x'}></Icon>
                <JobList setSubject={setSubject} jobs={jobs}></JobList>
        </Card>
        <Card title={applicationFormContentPage.fields.title} description={applicationFormContentPage.fields.shortText} style={{gap:'40px'}}>
                <Icon classname={'fa fa-envelope fa-2x'}></Icon>
                <ContactFormJob subject={subject}></ContactFormJob>
         </Card>
         </>
    )
}

export default Career