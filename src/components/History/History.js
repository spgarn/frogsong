import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import H3 from '../Texts/H3'
import './history.css'
import Card from '../Card/Card'

const History = () => {
  return (
    <Card title={'History'} description={'a brief history of Frogsong!'}>
    <H3  style={{ textAlign: 'center' }}>{`Brought together by the warm hand of fate during their internship studying at The Game Assembly (2011), Stefan, Jonathan, Anders, and Mattias found they shared common interests, a drive for success and a love for caffeinated beverages. Realising they were a balanced unit that individually brought something unique to the table, they decided they founded Frogsong Studios in April 2014.

During the years we have released two of our own original IPs as well as doing consultant work`}</H3>
 </Card>
  )
}

export default History