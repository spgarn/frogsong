import React from 'react'
import './footer.css'
import H3 from '../Texts/H3'

const Footer = () => {
    const links = [
        { url: 'https://twitter.com/FrogsongStudios', class: 'fab fa-twitter', id: 1 },
        { url: 'https://store.steampowered.com/search/?developer=Frogsong%20Studios', class: 'fab fa-steam', id: 2 },
        { url: 'https://www.facebook.com/FrogsongStudios/', class: 'fab fa-facebook', id: 3 },
        { url: 'https://www.linkedin.com/company/frogsong-studios/about/', class: 'fab fa-linkedin-in', id: 4 },
        { url: 'https://discord.gg/eGkg2hR', class: 'fab fa-discord', id: 5 },
        { url: 'https://www.youtube.com/channel/UCzIvDyGvG8HJEsWY8ZfxATw', class: 'fab fa-youtube', id: 6 },
        { url: 'https://www.twitch.tv/frogsongstudios', class: 'fab fa-twitch', id: 7 },
    ]
    return (
        <div className='footer'>


            <ul className='ul-social'>
                {links.map(link => {
                    return (
                        <li key={link.id} >
                            <a target='_blank' href={link.url}>
                                <i class={link.class}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div>
                <H3>Copyright © Frogsong Studios {new Date().getFullYear()}</H3>
                <H3> Torggatan 2, 211 40 Malmö</H3>
            </div>
        </div>
    )
}

export default Footer