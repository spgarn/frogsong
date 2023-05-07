import React from 'react'
import Layout from '../components/Layout/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './postDetailView.css'
import PageHeader from '../components/PageHeader/PageHeader';








const postDetailView = ({ data }) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = data.contentfulNews.contentText.references.find(ref => ref.contentful_id === node.data.target.sys.id)
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
                <PageHeader style={{ gridArea: 'header' }} title={data.contentfulNews.title}></PageHeader>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulNews.contentText.raw), options)}</div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query postDetail($slug:String){
    contentfulNews(slug:{eq:$slug}) {
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
        ... on ContentfulNews {
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