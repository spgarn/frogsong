import * as React from "react"
import './index.css'
import Loader from "../components/Loader/Loader"
import Hero from '../components/Hero/Hero'
import ContactForm from "../components/ContactForm/ContactForm"
import { fetchBlogPostsLandingPage, fetchHeroDetails } from "../utils/contentfulConnector"
import Career from "../components/Career/CareerSection"
import { useQuery } from "@tanstack/react-query"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import CardSlider from "../components/CardSlider/CardSlider"
import PageHeader from "../components/PageHeader/PageHeader"

export default function Home() {
    const { data: heroData, isLoading } = useQuery(['heroData'], async () => {
        return await fetchHeroDetails();
    });

    const { data: posts, postsIsLoading } = useQuery(['landingBlogPosts'], async () => {
        return await fetchBlogPostsLandingPage();
    });

/*     const windowSize = React.useRef([window.innerWidth, window.innerHeight]);
    const loadDataLimit = getLimitFromWindowWidth(windowSize.current[0]) */

    if (isLoading || postsIsLoading || !posts || !heroData) return <Loader />


    const fields = posts?.items?.map(post => post.fields)



    return (
        <>
            <div className="content-grid">
                <Hero heroData={heroData.items[0]} style={{ gridArea: "hero" }}></Hero>
              {/* <Games loadDataLimit={loadDataLimit?.project} style={{ gridArea: "games" }}></Games> */}
              <div style={{ gridArea: "posts" }}>
                <PageHeader title={'Latest news'}></PageHeader>
                <CardSlider posts={fields} ></CardSlider>
                </div>
            </div>
          {/*   <Career />
            <ContactForm></ContactForm> */}
        </>
    )
}
