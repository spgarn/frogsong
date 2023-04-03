import React from 'react'
import Header from '../Header/Header'
import './layout.css'

const Layout = ({ children }) => {
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width');
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    )
}

export default Layout