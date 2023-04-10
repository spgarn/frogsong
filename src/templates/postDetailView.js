import React from 'react'
import Layout from '../components/Layout/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from "gatsby"
import H1 from '../components/Texts/H1'
import './postDetailView.css'


const postDetailView = ({ data }) => {
    return (
        <Layout>
            <div className='post-grid-container'>
                <H1 className="blog-post-contenxt" style={{ gridArea: 'header' }}>{data.contentfulBlogPosts.title}</H1>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulBlogPosts.contentText.raw))}</div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query postDetail($slug:String){
    contentfulBlogPosts(slug:{eq:$slug}) {
      id,
      title,
      contentText {
        raw,
        __typename
      },
      slug
    }
  }`




export default postDetailView