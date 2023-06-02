// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css'
import { toast } from 'react-hot-toast';
import PageHeader from '../PageHeader/PageHeader';
import Card from '../Card/Card';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mayzvpqr");

    useEffect(() => {
        if (state.succeeded) toast.success('Message successfully sent!');
        if (!!state.errors.length) toast.success('Something went wrong. Try again.');
    }, [state.succeeded, state.errors.length])

    return (
        <Card title={'CONTACT US'} description={'"An e-mail a day keeps an empty inbox away!" - Olle"'} style={{position: 'relative' }}>
            <div className='contact-icon-container'>
                <i aria-hidden="true" className='fa fa-pen fa-2x career-icon'></i>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='short-input'
                    placeholder='Email'
                    required
                    disabled={state.succeeded}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <input type="hidden" name="subject" value="Open question"></input>
                <textarea
                    id="message"
                    name="message"
                    className='long-input'
                    rows={10}
                    placeholder='Enter your message here!'
                    required
                    disabled={state.succeeded}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button type="submit" disabled={state.submitting}>
                    Send!
                </Button>
            </form>
        </Card>
    );
}
