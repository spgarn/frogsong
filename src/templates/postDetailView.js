import React from 'react'
import Layout from '../components/Layout/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import H1 from '../components/Texts/H1'
import './postDetailView.css'








const postDetailView = ({ data }) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = data.contentfulBlogPosts.contentText.references.find(ref => ref.contentful_id === node.data.target.sys.id)
                return (<img style={{ width: '25%', height: 'auto', borderRadius: '12px' }} src={asset.url} alt={asset.fileName}
                />)
            }
            // HERE IS CODE TO RENDER LINKS TO OTHER POSTS!
            // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            //     const entry = data.contentfulBlogPosts.contentText.references.find(ref => ref.contentful_id === node.data.target.sys.id)
            //     return (<div
            //     >{entry.title}</div>)
            // }
        }
    }
    return (
        <Layout>
            <div className='post-grid-container'>
                <H1 className="blog-post-contenxt" style={{ gridArea: 'header' }}>{data.contentfulBlogPosts.title}</H1>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulBlogPosts.contentText.raw), options)}</div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query postDetail($slug:String){
    contentfulBlogPosts(slug:{eq:$slug}) {
      id,
      contentful_id,
      title,
      url {
        file {
          url
          fileName
          contentType
        }
      },
      contentText {
        raw
      references {
        ... on ContentfulAsset {
          # You'll need to query contentful_id in each reference
          contentful_id
          __typename
          url 
        }
        ... on ContentfulBlogPosts {
          contentful_id
          __typename
          title
          slug
        }
      }
      },
      slug
    }
  }
  `




export default postDetailView