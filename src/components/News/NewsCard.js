import React from 'react'
import H3 from '../Texts/H3'
import './news.css'
import { Link } from 'gatsby'
import H2 from '../Texts/H2'


const NewsCard = ({ post, to, createdAt }) => {
    return (
        <Link to={to} key={post.id} className='post-card'>
            
            
            <img alt="Author" className='news-image' style={{ gridArea: 'image' }} src={`${post?.url?.fields?.file?.url || post?.url?.file?.url}?w=300&h=300&fit=fill&f=center`}></img>
            <H2 className={'post-card-title dark-text'} style={{ gridArea: 'title',padding:'0px 12px' }}>{post.title}</H2>
            <H3 className={'dark-text'} style={{ gridArea: 'description',padding:'0px 12px' }}>{post?.shortText?.length > 115 ?
            `${post.shortText.substring(0, 115)}...` : post.shortText}</H3>
            <div style={{gridArea:'readmore'}} className='right-arrow' >
            <span>Read more</span>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
        </Link>
    )
}

export default NewsCard