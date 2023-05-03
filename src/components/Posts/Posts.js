import React from 'react'
import PostCard from './PostCard'
import './posts.css'
import H1 from '../Texts/H1'
import H2 from '../Texts/H2'
import { fetchBlogPostsLandingPage } from '../../utils/contentfulConnector'
import { Link } from 'gatsby'

const Posts = ({ ...rest }) => {

    const [posts, setPosts] = React.useState()
    const items = fetchBlogPostsLandingPage()

    React.useEffect(() => {
        items.then(response => setPosts(response))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!posts) return

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