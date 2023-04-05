import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import { fetchHeroDetails, fetchThemeDetails } from '../../utils/contentfulConnector'
import { setTheme } from '../../utils/setTheme'

const Layout = ({ children }) => {

    const item = fetchThemeDetails()

    useEffect(() => {
        setTheme(item)
    }, [])




    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout