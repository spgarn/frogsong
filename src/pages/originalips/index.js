import React from 'react'
import { fetchPortfolio } from '../../utils/contentfulConnector';
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

  if (isLoading || !games) return <Loader />
  return (
          <Card title={'Original IPs'} description={'This is where you will find all the different projects we have been involved with!'} className='own-ip-game-list'>
                <Icon className={'fa fa-gamepad fa-2x icon-container'}/>
            {games.items.map(project => <GameCard  to={`/originalips/${project.fields.slug}`} key={project.fields.id} game={project.fields}></GameCard>)}</Card >
  )
}

export default Originalips