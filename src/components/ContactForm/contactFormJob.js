// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../Button/Button';
import './contactForm.css'
import H1 from '../Texts/H1';
import H4 from '../Texts/H4';
import { toast } from 'react-hot-toast';

export default function ContactFormJob({ subject }) {
    const [state, handleSubmit] = useForm("mayzvpqr");

    useEffect(() => {
        if (state.succeeded) toast.success('Message successfully sent!');
        if (!!state.errors.length) toast.success('Something went wrong. Try again.');
    }, [state.succeeded, state.errors.length])

    return (
        <>
            <form className='contact-form' onSubmit={handleSubmit}>
                <H1>Application</H1>
                <H4>Click on the job opening that interests you above and then enter your email and message!</H4>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='short-input'
                    placeholder='Enter your email here'
                    required
                    disabled={state.succeeded}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <input disabled className='short-input' name="subject" value={`Career: ${subject}`}></input>
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
        </>
    );
}
