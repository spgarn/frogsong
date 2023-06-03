import React from 'react'
import CareerList from '../../components/Career/CareerList'
import { useQuery } from '@tanstack/react-query';
import { fetchTeamMembers } from '../../utils/contentfulConnector';
import Loader from '../../components/Loader/Loader';

const Team = () => {
    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });

    if (teamIsLoading || !teamMembers) return <Loader />
  return (
    <CareerList employees={teamMembers}></CareerList>
  )
}

export default Team