import React, { useState } from 'react'
import './cardSlider.css'
import NewsCard from '../News/NewsCard'

const CardSlider = ({posts}) => {

    const [currentView,setCurrentView] = useState(0)

  return (
    <div className='other-news-cards'> 
    <i onClick={() => currentView > 0 &&  setCurrentView(prev => prev - 1)} className="fa fa-arrow-left fa-lg card-slider-arrow" aria-hidden="true"></i>
    <NewsCard to={`/news/${posts[currentView]?.slug}`} createdAt={posts[currentView].createdAt} post={posts[currentView]}></NewsCard><NewsCard to={`/news/${posts[currentView+1].slug}`} createdAt={posts[currentView+1].createdAt} post={posts[currentView+1]}></NewsCard><NewsCard to={`/news/${posts[currentView+2].slug}`} createdAt={posts[currentView+2].createdAt} post={posts[currentView+2]}></NewsCard>
    <i onClick={() => currentView < posts.length - 3 && setCurrentView(prev => prev + 1)} style={{justifySelf:'end'}} className="fa fa-arrow-right fa-lg card-slider-arrow" aria-hidden="true"></i></div>
  )
}

export default CardSlider