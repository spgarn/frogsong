import React from 'react'
import { fetchBlogPosts } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import PostCard from '../../components/Posts/PostCard'
import Layout from '../../components/Layout/Layout'
import './postPage.css'


const Posts = () => {
    const [posts, setPosts] = React.useState()

    const items = fetchBlogPosts()

    React.useEffect(() => {
        items.then(r => setPosts(r))
    }, [])




    if (!posts) return <Loader />
    return (
        <Layout>
            <div style={{ columnGap: '12px', marginTop: '50px' }} className='page-post-list'>{posts.items.map(post => <PostCard key={post.fields.id} post={post.fields}></PostCard>)}</div>
        </Layout>
    )
}

export default Posts