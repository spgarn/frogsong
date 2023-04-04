import React from 'react'
import PostCard from './PostCard'

const Posts = ({ ...rest }) => {
    return (
        <div className='post-list' {...rest}>
            <PostCard />
        </div>
    )
}

export default Posts