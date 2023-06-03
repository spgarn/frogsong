import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import './socialMedia.css'
import TwitterContainer from './TwitterEmbed'

const SocialMedia = () => {
    return (
        <>
        <div className='social-media-icon-container'>
                <i aria-hidden="true" className='fa fa-video fa-2x career-icon'></i>
            </div>

        <div className='social-media-container'>
            
            <PageHeader title={'Be sure to keep updated!'} description={'Be sure to check out all our videos and follow us on twitter!!'} />
            <div className='social-wrapper'>
                <TwitterContainer className="social-item" />
                <iframe title="youtube-embed" className='social-item' src="https://www.youtube.com/embed?listType=playlist&list=UUzIvDyGvG8HJEsWY8ZfxATw"></iframe>
            </div>
        </div>
        </>
    )
}

export default SocialMedia