import * as React from "react"
import Layout from "../components/Layout/Layout"
import Hero from '../components/Hero/Hero'
import Games from "../components/Games/Games"
import Posts from "../components/Posts/Posts"
import './index.css'

export default function Home() {
    return (
        <Layout>
            <div className="content-grid">
                <Hero style={{ gridArea: "hero" }}></Hero>
                <Games style={{ gridArea: "games" }}></Games>
                <Posts style={{ gridArea: "posts" }}></Posts>
            </div>
        </Layout>
    )
}
