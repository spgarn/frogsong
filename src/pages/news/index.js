import React from 'react'
import { fetchBlogPosts } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import './postPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useQuery } from '@tanstack/react-query';
import NewsCard from '../../components/News/NewsCard'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import Card from '../../components/Card/Card'


const News = () => {

    const { data: posts, isLoading } = useQuery(['blogPosts'], async () => {
        return await fetchBlogPosts();
    });





    if (isLoading) return <Loader />
    return (
        <div className='news-wrapper'>
        <Card title={'News'} description={'This is where you will find all the latest news from Frogsong!'}>
            <div className='page-post-list'>{posts.items.map(post => <NewsCard key={post.fields.id} post={post.fields} createdAt={post.sys.createdAt} to={post.fields.slug}></NewsCard>)}</div>
        </Card>
        <Card title={'Socials'} description={'Be sure to keep updated!'} style={{marginTop:'50px',paddingTop:'50px'}}>
            <SocialMedia />
        </Card>
        </div>
    )
}

export default News