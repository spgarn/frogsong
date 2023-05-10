import React from 'react'
import { fetchBlogPosts } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import PostCard from '../../components/Posts/PostCard'
import './postPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useQuery } from '@tanstack/react-query';
import PostCardNew from '../../components/Posts/PostCardNew'


const Posts = () => {

    const { data: posts, isLoading } = useQuery(['blogPosts'], async () => {
        return await fetchBlogPosts();
    });





    if (isLoading) return <Loader />
    return (
        <>
            <PageHeader title={'News'} description={'This is where you will find all the latest news from Frogsong!'} />
            <div style={{ columnGap: '12px', marginTop: '50px' }} className='page-post-list'>{posts.items.map(post => <PostCardNew key={post.fields.id} post={post.fields} createdAt={post.sys.createdAt} to={post.fields.slug}></PostCardNew>)}</div>
        </>
    )
}

export default Posts