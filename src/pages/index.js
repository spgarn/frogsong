import * as React from "react"
import Layout from "../components/Layout/Layout"
import Loader from "../components/Loader/Loader"
import Hero from '../components/Hero/Hero'
import Games from "../components/Games/Games"
import Posts from "../components/Posts/Posts"
import './index.css'
import Career from "../components/Career/CareerSection"
import { fetchHeroDetails } from "../utils/contentfulConnector"

export default function Home() {
    const [heroData, setHeroData] = React.useState()

    const items = fetchHeroDetails()

    React.useEffect(() => {
        items.then(r => setHeroData(r))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    if (!heroData) return <Loader />


    return (
        <Layout>
            <div className="videoBg">
                <video className="videoTop" src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/1B4KFNJOIF1Z1663613392229.webm" data-src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/1B4KFNJOIF1Z1663613392229.webm" loop="loop" muted="muted" autoPlay="autoplay" playsInline="playsinline"><track kind="captions"></track></video>
            </div>
            <div className="content-grid">
                <Hero heroData={heroData.items[0]} style={{ gridArea: "hero" }}></Hero>
                <Games style={{ gridArea: "games" }}></Games>
                <Posts style={{ gridArea: "posts" }}></Posts>
            </div>
            <Career />
        </Layout>
    )
}
