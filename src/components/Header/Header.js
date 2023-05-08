import React, { useEffect } from 'react'
import './header.css'
import Logo from './Logo'
import Links from './Links'
import Loader from '../Loader/Loader'
import { useQuery } from '@tanstack/react-query'
import { fetchThemeDetails } from '../../utils/contentfulConnector'
import { setTheme } from '../../utils/setTheme'


const Header = () => {
    const { isLoading, data: theme } = useQuery(['Theme'], async () => {
        return await fetchThemeDetails();
    });

    useEffect(() => {
        if (isLoading) return
        setTheme(theme)
    }, [theme])

    if (isLoading) return <Loader />


    return (
        <nav className='header'>
            <div className='logo'>
                <Logo></Logo>
            </div>
            <div className='links'>
                <Links></Links>
            </div>
        </nav>
    )
}

export default Header