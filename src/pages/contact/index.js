import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import { fetchContactUs } from '../../utils/contentfulConnector';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';

const Contact = () => {

  const { data: contact, isLoading } = useQuery(['contact'], async () => {
    return await fetchContactUs();
});


if (isLoading || !contact) return <Loader />


  return (
    <ContactForm title={contact.fields.title} description={contact.fields.shortText}/>
  )
}

export default Contact