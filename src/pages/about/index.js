import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CareerList from '../../components/Career/CareerList'
import { fetchTeamMembers } from '../../utils/contentfulConnector';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import ContactForm from '../../components/ContactForm/ContactForm';
import History from '../../components/History/History';
import './about.css'

const About = () => {

    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });

    if (teamIsLoading) return <Loader />

    return (
        <div className='about-wrapper'>
            <CareerList employees={teamMembers}></CareerList>
            <History></History>
<ContactForm></ContactForm>
        </div>
    )
}

export default About