import React from 'react'
import './footer.css'
import H3 from '../Texts/H3'
import Loader from '../Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import { fetchFooter } from '../../utils/contentfulConnector';
import { getSocialsIcon } from '../../utils/getSocialsIcon'


const Footer = () => {

    const { data: footerData, isLoading } = useQuery(['footerData'], async () => {
        return await fetchFooter();
    });

    if (!footerData) return <Loader />
    return (
        <div className='footer'>


            <ul className='ul-social'>
                {footerData.fields.socials.map(link => {
                    const social = getSocialsIcon(link)
                    return (
                        <li style={{ listStyleType: 'none' }} key={social.url} >
                            <a target='_blank' href={social.url} rel="noreferrer">
                                <i className={social.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div>
                <H3>{footerData.fields.address} {new Date().getFullYear()}</H3>
                <H3>{footerData.fields.copyright}</H3>
            </div>
        </div>
    )
}

export default Footer