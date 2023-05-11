import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import './youtube.css'

const Youtube = () => {
    return (
        <div className='youtube-container'>
            <div className='youtube-icon-container'>
                <i aria-hidden="true" className='fa fa-video fa-2x career-icon'></i>
            </div>
            <PageHeader title={'Watch our latest video!'} description={'Be sure to check out all our videos!'} />
            <div className='iframe-wrapper'>
                <iframe src="https://www.youtube.com/embed?listType=playlist&list=UUzIvDyGvG8HJEsWY8ZfxATw"></iframe>
            </div>
        </div>
    )
}

export default Youtube