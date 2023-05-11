import React from 'react'
import './posts.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import { fetchBlogPostsLandingPage } from '../../utils/contentfulConnector'
import { Link } from 'gatsby'
import { useQuery } from '@tanstack/react-query'
import PostCardNew from './PostCardNew'

const PostList = ({ ...rest }) => {

    const { data: posts, isLoading } = useQuery(['landingBlogPosts'], async () => {
        return await fetchBlogPostsLandingPage();
    });

    if (isLoading) return

    return (
        <div className='post-list' {...rest}>
            <H1 className='post-area-top-text'>Latest news!</H1>
            {posts.items.map(post => {
                const { fields } = post
                const { createdAt } = post.sys
                return <PostCardNew key={fields.id} post={fields} createdAt={createdAt} to={`/news/${fields.slug}`} />
            })}
            <Link to={'/news'}>
                <H2 className='post-area-bottom-text'>View all news</H2>
            </Link>
        </div>
    )
}

export default PostList