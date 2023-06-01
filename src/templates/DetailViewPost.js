import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby"
import './postDetailView.css'
import PageHeader from '../components/PageHeader/PageHeader';
import PostCard from '../components/Posts/PostCard';
import H2 from '../components/Texts/H2';









const DetailViewPost = ({ data }) => {

  const [currentView,setCurrentView] = useState(0)

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
            <div className='post-grid-container'>
                <PageHeader style={{ gridArea: 'header' }} title={data.contentfulNews.title}></PageHeader>
                <div className="blog-post-contenxt" style={{ gridArea: 'text' }}>{documentToReactComponents(JSON.parse(data.contentfulNews.contentText.raw), options)}</div>
            </div>

            <H2 style={{textAlign:'center',paddingBottom:'24px'}}>Explore the latest news!</H2>
           
            <div className='other-news-cards'> <i onClick={() => currentView > 0 &&  setCurrentView(prev => prev - 1)} className="fa fa-arrow-left fa-lg detail-card-arrow" aria-hidden="true"></i><PostCard to={`/news/${sortedAllNews[currentView].slug}`} createdAt={sortedAllNews[currentView].createdAt} post={sortedAllNews[currentView]}></PostCard><PostCard to={`/news/${sortedAllNews[currentView+1].slug}`} createdAt={sortedAllNews[currentView+1].createdAt} post={sortedAllNews[currentView+1]}></PostCard><PostCard to={`/news/${sortedAllNews[currentView+2].slug}`} createdAt={sortedAllNews[currentView+2].createdAt} post={sortedAllNews[currentView+2]}></PostCard><i onClick={() => currentView < sortedAllNews.length - 3 && setCurrentView(prev => prev + 1)} style={{justifySelf:'end'}} className="fa fa-arrow-right fa-lg detail-card-arrow" aria-hidden="true"></i></div>
            
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