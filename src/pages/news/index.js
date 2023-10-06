import React from 'react'
import { fetchBlogPosts, fetchNewsContentPage } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import './postPage.css'
import { useQuery } from '@tanstack/react-query';
import NewsCard from '../../components/News/NewsCard'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon'


const News = () => {

    const { data: posts, isLoading } = useQuery(['blogPosts'], async () => {
        return await fetchBlogPosts();
    });

    const { data: newsContentPage, newsContentPageisLoading } = useQuery(['newsContentPage'], async () => {
        return await fetchNewsContentPage();
    });





    if (isLoading || !posts || !newsContentPage ||newsContentPageisLoading) return <Loader />
    return (
        <>
        <Card title={newsContentPage.fields.title} description={newsContentPage.fields.shortText || newsContentPage.fields.subTitle}  style={{minHeight:'0px'}}>
            <Icon classname={'fa fa-newspaper-o fa-2x'}></Icon>
            <div className='page-post-list'>{posts.items.map(post => <NewsCard key={post.fields.id} post={post.fields} createdAt={post.sys.createdAt} to={post.fields.slug}></NewsCard>)}</div>
        </Card>
        {/* <Card title={'Socials'} description={'Be sure to keep updated!'} style={{minHeight:'0px'}}>
            <Icon classname={"fa fa-video fa-2x career-icon"}></Icon>
            <SocialMedia />
        </Card> */}
        </>
    )
}

export default News