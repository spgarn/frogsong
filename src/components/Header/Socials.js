import React from 'react'
import './header.css'

const links = [
    { url: 'https://twitter.com/FrogsongStudios', class: 'fab fa-twitter fa-lg', id: 1 },
    { url: 'https://store.steampowered.com/search/?developer=Frogsong%20Studios', class: 'fab fa-steam fa-lg' , id: 2 },
    /*     { url: 'https://www.facebook.com/FrogsongStudios/', class: 'fab fa-facebook', id: 3 }, */
    /*     { url: 'https://www.linkedin.com/company/frogsong-studios/about/', class: 'fab fa-linkedin-in', id: 4 }, */
    { url: 'https://discord.gg/eGkg2hR', class: 'fab fa-discord fa-lg', id: 5 },
    { url: 'https://www.youtube.com/channel/UCzIvDyGvG8HJEsWY8ZfxATw', class: 'fab fa-youtube fa-lg', id: 6 },
    /*     { url: 'https://www.twitch.tv/frogsongstudios', class: 'fab fa-twitch', id: 7 }, */
]


export const Socials = () => {
    return (
        <>
            {
                links.map(link => {
                    return (
                        <li style={{ listStyleType: 'none' }} key={link.id} >
                            <a target='_blank' href={link.url} rel="noreferrer">
                                <i className={link.class}></i>
                            </a>
                        </li>
                    )
                })
            }
        </>
    );
};
