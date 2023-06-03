import React from 'react'
import CareerList from '../../components/Career/CareerList'
import { fetchTeamMembers } from '../../utils/contentfulConnector';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import './about.css'

const About = () => {

    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });

    if (teamIsLoading) return <Loader />

    return (
        <div className='about-wrapper'>
            <CareerList employees={teamMembers}></CareerList>
         
         
        </div>
    )
}

export default About