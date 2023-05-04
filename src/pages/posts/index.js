import React from 'react'
import Layout from '../../components/Layout/Layout'
import { fetchBlogPosts } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import PostCard from '../../components/Posts/PostCard'
import './postPage.css'
import PageHeader from '../../components/PageHeader/PageHeader'


const Posts = () => {
    const [posts, setPosts] = React.useState()

    const items = fetchBlogPosts()

    React.useEffect(() => {
        items.then(r => setPosts(r))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    if (!posts) return <Loader />
    return (
        <Layout>
            <PageHeader title={'News'} description={'This is where you will find all the latest news from Frogsong!'} />
            <div style={{ columnGap: '12px', marginTop: '50px' }} className='page-post-list'>{posts.items.map(post => <PostCard key={post.fields.id} post={post.fields} to={post.fields.slug}></PostCard>)}</div>
        </Layout>
    )
}

export default Posts