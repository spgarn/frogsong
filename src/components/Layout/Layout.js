import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import { Toaster } from 'react-hot-toast'
import { fetchThemeDetails } from '../../utils/contentfulConnector'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Loader/Loader'
import { setTheme } from '../../utils/setTheme'


const Layout = ({ children }) => {
    const { isLoading, data: theme } = useQuery(['Theme'], async () => {
        return await fetchThemeDetails();
    });

    if (isLoading || !theme) return <Loader />

    setTheme(theme)

    return (
        <>
            <Toaster></Toaster>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout