import React from 'react'
import PostCard from './PostCard'
import './posts.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import { fetchBlogPostsLandingPage } from '../../utils/contentfulConnector'
import { Link } from 'gatsby'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Loader/Loader'

const Posts = ({ ...rest }) => {

    const { data: posts, isLoading } = useQuery(['landingBlogPosts'], async () => {
        return await fetchBlogPostsLandingPage();
    });

    if (isLoading) return <Loader />

    return (
        <div className='post-list' {...rest}>
            <H1 className='post-area-top-text'>Latest posts!</H1>
            {posts.items.map(post => {
                const { fields } = post
                return <PostCard key={fields.id} post={fields} to={`/posts/${fields.slug}`} />
            })}
            <Link to={'/posts'}>
                <H2 className='post-area-bottom-text'>View all posts</H2>
            </Link>
        </div>
    )
}

export default Posts