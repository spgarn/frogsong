import React from 'react'
import PostCard from './PostCard'
import './posts.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import { fetchBlogPosts } from '../../utils/contentfulConnector'

const Posts = ({ ...rest }) => {

    const [posts, setPosts] = React.useState()
    const items = fetchBlogPosts()

    React.useEffect(() => {
        items.then(response => setPosts(response))
    }, [])

    if (!posts) return

    return (
        <div className='post-list' {...rest}>
            <H1 className='post-area-top-text'>Latest posts!</H1>
            {posts.items.map(post => {
                const { fields } = post
                return <PostCard key={fields.id} post={fields} />
            })}
            <H2 className='post-area-bottom-text'>View all posts</H2>
        </div>
    )
}

export default Posts