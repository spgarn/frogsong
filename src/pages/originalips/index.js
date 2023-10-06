import React from 'react'
import { fetchOriginalIpContentPage, fetchPortfolio } from '../../utils/contentfulConnector';
import Card from '../../components/Card/Card';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import GameCard from '../../components/Games/GameCard';
import './originalIps.css'
import Icon from '../../components/Icon/Icon';

const Originalips = () => {
  const { data: games, isLoading } = useQuery(['ownGames'], async () => {
      return await fetchPortfolio(200,true);
  });

  const { data: originalIps, isLoading: originalIpsIsLoading } = useQuery(['originalIps'], async () => {
    return await fetchOriginalIpContentPage();
});

  if (isLoading || !games || originalIpsIsLoading || !originalIps) return <Loader />

  return (
          <Card title={originalIps.fields.title} description={originalIps.fields.shortText || originalIps.fields.subTitle} className='own-ip-game-list'>
                <Icon className={'fa fa-gamepad fa-2x icon-container'}/>
            {games.items.map(project => <GameCard  to={`/originalips/${project.fields.slug}`} key={project.sys.id} game={project.fields}></GameCard>)}</Card >
  )
}

export default Originalips