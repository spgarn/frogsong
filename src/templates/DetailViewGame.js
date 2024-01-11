import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './templates.css'
import Card from '../components/Card/Card';
import H4 from '../components/Texts/H4';
import { IFrameContainer } from '../components/IframeContainer/IFrameContainer';

const DetailViewGame = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = data.contentfulProjects.detailedText.references.find(ref => ref.contentful_id === node.data.target.sys.id)
        return (
          <img style={{ width: "clamp(200px, 45%, 500px)", borderRadius: '12px',margin:"8px" }} src={asset.url} alt={asset.fileName} />
        )
      },
   
        [INLINES.HYPERLINK]: (node) => {
          if ((node.data.uri).includes("youtube.com/embed")) {
            return <IFrameContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IFrameContainer>
          } else if ((node.data.uri).includes("store.steampowered")) {
            const widgetUrl = node.data.uri.replace('app', 'widget')
            return <iframe title={widgetUrl} src={widgetUrl} frameBorder="0" width="100%" height="190"></iframe>
          }
          else {
            return <a style={{ textDecoration: "underline" }} aria-label='rich-text-link' target='_blank' rel="noreferrer" href={node.data.uri}>{node.data.uri}</a>
          }
        }
      }
    
  }

  const location = window.location.pathname.split('/')


  return (
    <div className='game-detail-content'>


      <Card gobackUrl={`/${location[1]}`} style={{ gridArea: 'main' }} className={'small-card-class'} title={data.contentfulProjects.title}>
        <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulProjects.detailedText.raw), options)}</div>
      </Card>
      <div className='game-aside'>
        <img style={{ width: '100%', height: 'auto', borderRadius: '12px' }} src={data.contentfulProjects.url.file.url} alt={data.contentfulProjects.url.file.fileName} />
        <H4>{data.contentfulProjects.infoText}</H4>
        {data.contentfulProjects.steamId && <iframe title={data.contentfulProjects.steamId} src={`https://store.steampowered.com/widget/${data.contentfulProjects.steamId}/`} frameBorder="0" width="450" height="190"></iframe>}

      </div>
    </div >
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