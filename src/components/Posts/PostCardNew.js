import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './posts.css'
import { Link } from 'gatsby'
import { dateFormatter } from '../../utils/formatter'

const PostCardNew = ({ post, to, createdAt }) => {


    return (
        <Link to={to} key={post.id} className='post-card-new'>
            <H3 className={'dark-text'} style={{ gridArea: 'title' }}>{post.title}</H3>
            <H4 className={'dark-text'} style={{ gridArea: 'description' }}>{post.shortText}</H4>
            <div className='post-card-author' style={{ gridArea: 'author' }}>
                <img alt="Author" style={{ borderRadius: '50%', width: '50px', gridArea: 'image', alignSelf: 'center' }} src={`${post?.author?.fields?.profile?.fields?.file?.url}?w=200&h=200&fit=fill&f=center`}></img>
                <H4 style={{ color: 'var(--complimentary)' }}>{post?.author?.fields?.name}</H4>
                <H4 style={{ color: 'var(--complimentary)' }}>{dateFormatter(createdAt)}</H4>
            </div>
            <i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
        </Link>
    )
}

export default PostCardNew