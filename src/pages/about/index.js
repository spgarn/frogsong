import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CareerList from '../../components/Career/CareerList'
import { fetchTeamMembers } from '../../utils/contentfulConnector';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import H1 from '../../components/Texts/H1';

const About = () => {

    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });

    if (teamIsLoading) return <Loader />

    return (
        <div style={{minHeight:'85vh'}}>
            <PageHeader title={'History'} description={'Frogsong studiso was started a cold and dark night. With all games played and no further ideas what to do. The four friends got the idea of creating the own games!'} />
            <H1 style={{ textAlign: 'center' }}>{'<Insert history here>'}</H1>
            <PageHeader title={'Team'} description={'This is where you find all our talented members of Frogsong studios!'} />
            <CareerList employees={teamMembers}></CareerList>
        </div>
    )
}

export default About