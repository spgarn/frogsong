import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './postDetailView.css'
import H2 from '../components/Texts/H2';
import Card from '../components/Card/Card';

const DetailViewGame = ({ data }) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = data.contentfulProjects.detailedText.references.find(ref => ref.contentful_id === node.data.target.sys.id)
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
      
        <>
            <Card style={{minHeight:'auto',marginBottom:'12px'}} title={data.contentfulProjects.title}>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulProjects.detailedText.raw), options)}</div>
            </Card>

            <H2 style={{textAlign:'center',paddingBottom:'24px'}}>Explore the latest news!</H2>
           
            
        </>
    )
}

export const query = graphql`
query gameDetail($slug:String){
    contentfulProjects(slug:{eq:$slug}) {
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
      detailedText {
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
  }
  `

export default DetailViewGame