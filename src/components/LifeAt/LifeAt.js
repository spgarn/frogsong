import React from 'react'
import './lifeAt.css'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import RichTextStyleElement from '../RichTextStyleElement/RichTextStyleElement'
import Loader from '../Loader/Loader'
import { useQuery } from '@tanstack/react-query'
import { fetchLifeAt } from '../../utils/contentfulConnector'

const LifeAt = () => {

  const {data,isloading} = useQuery(['lifeAt'],async () => fetchLifeAt())


  if(isloading || !data) return <Loader/>

  return (
    <Card title={data?.fields?.title} description={data?.fields?.shortText}  className='history-area' style={{gap:'40px',minHeight:'0px'}}>
      <Icon classname={'fa fa-hand-peace-o fa-2x'}></Icon>
      <RichTextStyleElement style={{ textAlign: 'center',padding:'24px' }}>{data.fields.content}</RichTextStyleElement>
 </Card>
  )
}

export default LifeAt