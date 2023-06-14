import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './postDetailView.css'
import H2 from '../components/Texts/H2';
import CardSlider from '../components/CardSlider/CardSlider';
import Card from '../components/Card/Card';









const DetailViewPost = ({ data }) => {

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
    const sortedAllNews = data.allContentfulNews.nodes.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt) )


    return (
      
        <>
            <Card style={{minHeight:'auto',marginBottom:'12px'}} title={data.contentfulNews.title}>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulNews.contentText.raw), options)}</div>
            </Card>

            <H2 style={{textAlign:'center',paddingBottom:'24px'}}>Explore the latest news!</H2>
           
           <CardSlider posts={sortedAllNews}></CardSlider>
            
        </>
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
    }
    },
    slug
  }
  allContentfulNews{
    nodes{
      title,
      id,
      slug,
      shortText,
      createdAt,
      author {
        id,
        name,
        role,
        profile{
          url
        }
        
      }
    }
  }
}
  `






export default DetailViewPost