import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './posts.css'
import { Link } from 'gatsby'

const PostCard = ({ post, to }) => {

    return (
        <Link to={to} key={post.id} className='post-card'>
            <H3>{post.title}</H3>
            <H4>{post.shortText}</H4>
            <i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
        </Link>
    )
}

export default PostCard