import React, { useEffect, useState } from 'react'
import './header.css'
import Logo from './Logo'
import Links from './Links'
import { Socials } from './Socials'


const Header = () => {


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    if (window.scrollY === 151) {
        document.querySelector("header").classList.add('header-background')
    }



    return (
        <nav className={scroll ? 'header header-background' : 'header'}>
            <div className='logo'>
                <Logo></Logo>
            </div>
            <div style={{ width: "33.3%" }}>
                <ul className='socials-header'>
                    <Socials></Socials>
                </ul>
            </div>
            <div className='links'>
                <Links></Links>
            </div>
        </nav>
    )
}

export default Header