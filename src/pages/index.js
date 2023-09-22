import * as React from "react"
import './index.css'
import Loader from "../components/Loader/Loader"
import Hero from '../components/Hero/Hero'
import { fetchBlogPostsLandingPage, fetchHeroDetails } from "../utils/contentfulConnector"
import { useQuery } from "@tanstack/react-query"
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

    if (!isLoading || postsIsLoading || !posts || !heroData) return <Loader />


    const fields = posts?.items?.map(post => post.fields)



    return (
        <>
            <div className="content-grid">
                <Hero heroData={heroData.items[0]} style={{ gridArea: "hero" }}>
                </Hero>
                <div style={{ gridArea: "posts" }}>
                    <PageHeader title={'LATEST NEWS'}></PageHeader>
                    <CardSlider posts={fields} ></CardSlider>
                </div>
            </div>
        </>
    )
}
