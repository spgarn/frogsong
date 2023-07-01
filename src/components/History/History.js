import React from 'react'
import H3 from '../Texts/H3'
import './history.css'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import { useQuery } from '@tanstack/react-query'
import { fetchHistory } from '../../utils/contentfulConnector'
import Loader from '../Loader/Loader'
import RichTextStyleElement from '../RichTextStyleElement/RichTextStyleElement'


const History = () => {


  const {data,isloading} = useQuery(['history'],async () => fetchHistory())


  if(isloading || !data) return <Loader/>

  return (
    <Card title={data?.fields?.title} description={data?.fields?.shortText} style={{minHeight:'0px'}}>
      <Icon classname={'fa fa-hourglass-half fa-2x'}></Icon>
    <RichTextStyleElement style={{ textAlign: 'left', padding:'24px' }}>{data.fields.content}</RichTextStyleElement>
 </Card>
  )
}

export default History