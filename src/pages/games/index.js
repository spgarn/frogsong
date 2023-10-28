import React from 'react'
import Card from '../../components/Card/Card';
import './games.css'
import Icon from '../../components/Icon/Icon';
import { Link } from 'gatsby';
import Button from '../../components/Button/Button';

const Originalips = () => {

  const games = [{ to: "originalips", title: "Our games" }, { to: "portfolio", title: "Portfolio" }]

  return (
    <Card title={"Games"} description={"Check out our own games or games we have worked on"} className='games-list'>
      <Icon className={'fa fa-gamepad fa-2x icon-container'} />
      {games.map(project => <Link style={{ textAlign: "center" }} to={`/${project.to}`} key={project.to}><Button>{project.title}</Button></Link>)}
    </Card >
  )
}

export default Originalips