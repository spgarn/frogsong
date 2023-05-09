import * as React from "react"
import './index.css'
import Loader from "../components/Loader/Loader"
import Hero from '../components/Hero/Hero'
import Games from "../components/Games/Games"
import Posts from "../components/Posts/Posts"
import ContactForm from "../components/ContactForm/ContactForm"
import { fetchHeroDetails } from "../utils/contentfulConnector"
import Career from "../components/Career/CareerSection"
import { useQuery } from "@tanstack/react-query"

export default function Home() {
    const { data: heroData, isLoading } = useQuery(['heroData'], async () => {
        return await fetchHeroDetails();
    });


    if (isLoading) return <Loader />



    return (
        <>

            <div className="videoBg">
                <video className="videoTop" src={heroData.items[0].fields.video.fields.file.url} data-src={heroData.items[0].fields.video.fields.file.url} loop="loop" muted="muted" autoPlay="autoplay" playsInline="playsinline"><track kind="captions"></track></video>
            </div>
            <div className="content-grid">
                <Hero heroData={heroData.items[0]} style={{ gridArea: "hero" }}></Hero>
                <Games style={{ gridArea: "games" }}></Games>
                <Posts style={{ gridArea: "posts" }}></Posts>
            </div>
            <Career />
            <ContactForm></ContactForm>
        </>
    )
}
