import React from 'react'
import PostCard from './PostCard'

const Posts = ({ ...rest }) => {
    return (
        <div className='post-list' {...rest}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}

export default Posts