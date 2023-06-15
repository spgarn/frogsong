// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css'
import { toast } from 'react-hot-toast';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

export default function ContactForm({title, description}) {
    const [state, handleSubmit] = useForm("mayzvpqr");

    useEffect(() => {
        if (state.succeeded) toast.success('Message successfully sent!');
        if (!!state.errors.length) toast.success('Something went wrong. Try again.');
    }, [state.succeeded, state.errors.length])

    return (
        <Card title={title} description={description} style={{gap:'40px'}} >
           <Icon classname={'fa fa-pen fa-2x career-icon'} />
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
