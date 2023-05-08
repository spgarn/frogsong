import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Layout = ({ children }) => {



    return (
        <QueryClientProvider client={queryClient}>
            <Toaster></Toaster>
            <Header />
            <div>{children}</div>
            <Footer />

        </QueryClientProvider>
    )
}

export default Layout