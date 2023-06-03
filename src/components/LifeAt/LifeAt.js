import React from 'react'
import './lifeAt.css'
import Card from '../Card/Card'
import H3 from '../Texts/H3'
import Icon from '../Icon/Icon'

const LifeAt = () => {
  return (
    <Card title={'Life at Frogsong'} description={'Work and live as a frog!'} className='history-area' style={{gap:'40px',minHeight:'0px'}}>
      <Icon classname={'fa fa-hand-peace-o fa-2x'}></Icon>
    <H3 className='content-wrapper' style={{ textAlign: 'center',padding:'24px' }}>{`We strive to make the best games we possibly can while at the same time taking care of everyone in the team. We care about our team, and we work hard to make sure everyone is happy working with us, be it through our no-crunch policy, extra vacation days or the option to work from home. We believe that equality and a stress-free work environment is the best recipe for a healthy and productive studio!`}</H3>
 </Card>
  )
}

export default LifeAt