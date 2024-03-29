import React from 'react'
import './lifeAt.css'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import RichTextStyleElement from '../RichTextStyleElement/RichTextStyleElement'
import Loader from '../Loader/Loader'
import { useQuery } from '@tanstack/react-query'
import { fetchLifeAt } from '../../utils/contentfulConnector'

const LifeAt = () => {

  const { data, isloading } = useQuery(['lifeAt'], async () => fetchLifeAt())


  if (isloading || !data) return <Loader />

  return (
    <Card title={data?.fields?.title} description={data?.fields?.shortText || data.fields.subTitle} className='history-area' style={{ minHeight: '0px' }}>
      <Icon classname={'fa fa-hand-peace-o fa-2x'}></Icon>
      <RichTextStyleElement style={{ padding: '24px' }}>{data.fields.content}</RichTextStyleElement>
    </Card>
  )
}

export default LifeAt