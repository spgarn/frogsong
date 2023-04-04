import { Link } from 'gatsby'
import React from 'react'

const Links = () => {
    const links = ['Projects', 'Posts', 'About']
    return (
        <>
            {links.map((link, i) => <Link to={`/${link.toLowerCase()}`} key={i}>{link}</Link>)}
        </>
    )
}

export default Links