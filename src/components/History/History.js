import React from 'react'
import H3 from '../Texts/H3'
import './history.css'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'

const History = () => {
  return (
    <Card title={'History'} description={'a brief history of Frogsong!'} style={{minHeight:'0px',gap:'40px'}}>
      <Icon classname={'fa fa-hourglass-half fa-2x'}></Icon>
    <H3  style={{ textAlign: 'center',padding:'24px' }}>{`Brought together by the warm hand of fate during their internship studying at The Game Assembly (2011), Stefan, Jonathan, Anders, and Mattias found they shared common interests, a drive for success and a love for caffeinated beverages. Realising they were a balanced unit that individually brought something unique to the table, they decided they founded Frogsong Studios in April 2014.

During the years we have released two of our own original IPs as well as doing consultant work`}</H3>
 </Card>
  )
}

export default History