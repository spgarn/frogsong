import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './posts.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PostCard = ({ post }) => {

    return (
        <div key={post.id} className='post-card'>
            <H3>{post.title}</H3>
            <span>{documentToReactComponents(post.contentText)}</span>
            <i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
        </div>
    )
}

export default PostCard