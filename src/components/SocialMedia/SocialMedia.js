import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import './socialMedia.css'
import TwitterContainer from './TwitterEmbed'

const SocialMedia = () => {
    return (

            <div className='social-wrapper'>
                <TwitterContainer className="social-item" />
                <iframe title="youtube-embed" className='social-item' src="https://www.youtube.com/embed?listType=playlist&list=UUzIvDyGvG8HJEsWY8ZfxATw"></iframe>
            </div>

    )
}

export default SocialMedia