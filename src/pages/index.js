import * as React from "react"
import Layout from "../components/Layout/Layout"
import Hero from '../components/Hero/Hero'
import Games from "../components/Games/Games"
import Posts from "../components/Posts/Posts"
import './index.css'
import Career from "../components/Career/Career"
import { fetchHeroDetails } from "../utils/contentfulConnector"

export default function Home() {

    const [heroData, setHeroData] = React.useState()

    const items = fetchHeroDetails()

    React.useEffect(() => {
        items.then(r => setHeroData(r))
    }, [])



    if (!heroData) return

    return (
        <Layout>
            <div className="content-grid">
                <Hero heroData={heroData.items[0]} style={{ gridArea: "hero" }}></Hero>
                <Games style={{ gridArea: "games" }}></Games>
                <Posts style={{ gridArea: "posts" }}></Posts>
            </div>
            <Career />
        </Layout>
    )
}
