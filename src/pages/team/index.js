import React from 'react'
import CareerList from '../../components/Career/CareerList'
import { useQuery } from '@tanstack/react-query';
import { fetchTeamContentPage, fetchTeamMembers } from '../../utils/contentfulConnector';
import Loader from '../../components/Loader/Loader';

const Team = () => {
    const { data: teamMembers, isLoading: teamIsLoading } = useQuery(['teamMembers'], async () => {
        return await fetchTeamMembers();
    });

    const { data: teamContentPage, isLoading: teamIsLoadingContentPage } = useQuery(['teamContentPage'], async () => {
      return await fetchTeamContentPage();
  });

    if (teamIsLoading || !teamMembers || !teamContentPage || teamIsLoadingContentPage) return <Loader />



  return (
    <CareerList employees={teamMembers} title={teamContentPage.fields.title} description={teamContentPage.fields.shortText}></CareerList>
  )
}

export default Team