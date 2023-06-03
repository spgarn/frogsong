import { Link } from 'gatsby'
import React from 'react'

const Links = () => {
    const links = [{main:'PRESS'}, {main:'NEWS'}, {main:'GAMES',children:['Original IPs','Portfolio']},{main:'CAREER'}, {main:'ABOUT',children:['Team','Studio','Contact']}]
    return (
        <>
    
            {links.map((link, i) =>{
                return (
                      link?.children?.length > 0 ? 
                      <div id='non-link' style={{position:'relative',cursor:'pointer'}} key={i}>
                        {link.main}<ul className='dropdown'>{link.children.map(child =><li key={child}><Link to={`/${child.toLowerCase().replaceAll(' ','')}`}>{child}</Link></li>)}</ul>
                      </div>  
                      :
                       <Link style={{position:'relative'}} to={`/${link.main.toLowerCase()}`} key={i}>
                            {link.main}
                        </Link> 
              
        

             
                )})
                
                }
        </> 
    )
}

export default Links