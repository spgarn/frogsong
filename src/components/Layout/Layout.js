import React from 'react'
import Header from '../Header/Header'
import './layout.css'

const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    )
}

export default Layout