import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './templates.css'
import Card from '../components/Card/Card';
import H4 from '../components/Texts/H4';

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
      <div className='game-detail-content'>

    
            <Card style={{gridArea:'main'}} className={'small-card-class'} title={data.contentfulProjects.title}>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulProjects.detailedText.raw), options)}</div>
            </Card>
            <div className='game-aside'>
            <img style={{ width: '100%', height: 'auto', borderRadius: '12px' }} src={data.contentfulProjects.url.file.url} alt={data.contentfulProjects.url.file.fileName}/>
            <H4>{data.contentfulProjects.infoText}</H4>
           {data.contentfulProjects.steamId && <iframe title={data.contentfulProjects.steamId} src={`https://store.steampowered.com/widget/${data.contentfulProjects.steamId}/`} frameborder="0" width="450" height="190"></iframe>}
           
                </div>        
            </div>
    )
}

export const query = graphql`
query gameDetail($slug:String){
    contentfulProjects(slug:{eq:$slug}) {
      id,
      contentful_id,
      title,
      infoText,
      steamId,
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