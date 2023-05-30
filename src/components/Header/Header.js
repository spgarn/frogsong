import React, { useEffect, useState } from 'react'
import './header.css'
import Logo from './Logo'
import Links from './Links'


const Header = () => {

  const links = [
    { url: 'https://twitter.com/FrogsongStudios', class: 'fab fa-twitter', id: 1 },
    { url: 'https://store.steampowered.com/search/?developer=Frogsong%20Studios', class: 'fab fa-steam', id: 2 },
    { url: 'https://www.facebook.com/FrogsongStudios/', class: 'fab fa-facebook', id: 3 },
    { url: 'https://www.linkedin.com/company/frogsong-studios/about/', class: 'fab fa-linkedin-in', id: 4 },
    { url: 'https://discord.gg/eGkg2hR', class: 'fab fa-discord', id: 5 },
    { url: 'https://www.youtube.com/channel/UCzIvDyGvG8HJEsWY8ZfxATw', class: 'fab fa-youtube', id: 6 },
    { url: 'https://www.twitch.tv/frogsongstudios', class: 'fab fa-twitch', id: 7 },
]

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

    if(window.scrollY === 151){
      document.querySelector("header").classList.add('header-background')
    }



    return (
        <nav className={scroll ? 'header header-background' : 'header'}>
            <div className='logo'>
                <Logo></Logo>
            </div>
            <div >
            <ul className='socials-header'> 
                {links.map(link => {
                    return (
                        <li style={{ listStyleType: 'none' }} key={link.id} >
                            <a target='_blank' href={link.url} rel="noreferrer">
                                <i className={link.class}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
            <div className='links'>
                <Links></Links>
            </div>
        </nav>
    )
}

export default Header