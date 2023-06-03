import { Link } from 'gatsby'
import React from 'react'

const Links = () => {
    const links = [{main:'PRESS'}, {main:'NEWS'}, {main:'GAMES',children:['Original IPs','Portfolio']},{main:'CAREER'}, {main:'ABOUT',children:['Team','Studio','Contact']}]
    return (
        <>
            {links.map((link, i) => <Link style={{position:'relative'}} to={`/${link.main.toLowerCase()}`} key={i}>
                {link.main}{link?.children?.length > 0 && <ul className='dropdown'>{link.children.map(child =><li><Link to={`/${child.toLowerCase().replaceAll(' ','')}`}>{child}</Link></li>)}</ul>}
                </Link>)}
        </> 
    )
}

export default Links