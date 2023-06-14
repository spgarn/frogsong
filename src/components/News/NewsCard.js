import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './news.css'
import { Link } from 'gatsby'


const NewsCard = ({ post, to, createdAt }) => {

    return (
        <Link to={to} key={post.id} className='post-card'>
            <div className='card-top-overlay'></div>
            <H3 className={'post-card-title'} style={{ gridArea: 'title', zIndex:100 }}>{post.title}</H3>
            <H4 className={'dark-text'} style={{ gridArea: 'description' }}>{post?.shortText?.length > 115 ?
            `${post.shortText.substring(0, 115)}...` : post.shortText}</H4>
            <div className='post-card-author' style={{ gridArea: 'author' }}>
                <img alt="Author" style={{ borderRadius: '50%', width: '50px', gridArea: 'image', alignSelf: 'center' }} src={`${post?.author?.fields?.profile?.fields?.file?.url || post?.author?.profile?.url}?w=200&h=200&fit=fill&f=center`}></img>
                <H4 style={{ color: 'var(--complimentary)' }}>{post?.author?.fields?.name || post?.author?.name}</H4>
               {/*  <H4 style={{ color: 'var(--complimentary)' }}>{dateFormatter(createdAt)}</H4> */}
            </div>
            <i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
        </Link>
    )
}

export default NewsCard