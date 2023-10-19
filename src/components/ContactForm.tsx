'use client';

import { ComponentProps, FormEvent, useState } from 'react';
import { SectionBlue } from '@/layout/CustomSection';

type ContactFormProps = {
    title: string;
    subtitle?: string;
};

export function ContactForm({ title, subtitle }: ContactFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const number = formData.get('number') as string;
        const email = formData.get('email') as string;
        const service = formData.get('service') as string;
        const body = formData.get('body') as string;
        if (!name || !email || !number || !service || !body) return alert('Please fill in all fields');
        const message = `
        <p><span style="font-weight:bold">Client Name: </span> ${name}:</p>
        <p><span style="font-weight:bold">Contact Number: </span>  ${number}:</p>
        <p><span style="font-weight:bold">Email: </span> ${email}:</p>
        <p><span style="font-weight:bold">Service: </span> ${service}</p>
        <p><span style="font-weight:bold">Message:</span> ${body}</p>
        `;
        console.log(email, message);
        setIsLoading(true);
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ body: message }),
        });
        if (res.ok) {
            form.reset();
            alert('Email sent!');
        } else {
            alert('There was an error sending your email');
        }
        setIsLoading(false);
    };

    return (
        <SectionBlue>
            <SectionBlue.title>
                <p className='text-primary text-lg font-bold text-center'>{title}</p>
                {subtitle && <p className='text-gray-400/90 text-xs md:text-sm mt-2 px-10 text-center'>{subtitle}</p>}
            </SectionBlue.title>
            <SectionBlue.content>
                <form onSubmit={handleSubmit} className='w-[85vw] mx-auto max-w-4xl grid gap-5 md:grid-cols-2'>
                    <Input label='First Name' placeholder='First Name, Surname' name='name' required />
                    <Input label='Contact Number' placeholder='020123456789' name='number' required type='number' />
                    <div className='col-span-full'>
                        <Input label='Email Address' placeholder='example@server.com' name='email' required type='email' />
                    </div>
                    <div className='col-span-full'>
                        <Input label='Service' placeholder='Plumbing' name='service' required />
                    </div>
                    <div className='col-span-full'>
                        <Input label="Details about the issue you're having" textarea name='body' required placeholder='Describe what you are experience, when it happens, etc...' />
                    </div>

                    <button className={`text-white text-xs uppercase font-semibold py-3 px-8 mt-3 rounded-md bg-secondary w-fit mx-auto col-span-full ${isLoading && 'opacity-50'} transition-opacity`}>
                        Send Booking Request
                    </button>
                </form>
            </SectionBlue.content>
        </SectionBlue>
    );
}

type InputProps = {
    label: string;
    textarea?: boolean;
} & ComponentProps<'input' | 'textarea'>;

function Input({ label, textarea, ...inputProps }: InputProps) {
    return (
        <div className='flex flex-col gap-2 items-start'>
            <label htmlFor={label} className='text-white uppercase font-semibold text-xs ml-2'>
                {label}
            </label>
            {!textarea ? (
                <input
                    id={label}
                    {...(inputProps as ComponentProps<'input'>)}
                    className='px-3 py-2 bg-white text-xs text-primary rounded w-full outline-none border border-transparent focus-visible:border focus-visible:border-secondary'
                />
            ) : (
                <textarea
                    id={label}
                    {...(inputProps as ComponentProps<'textarea'>)}
                    className='h-16 px-3 py-2 bg-white text-xs text-primary rounded w-full outline-none border border-transparent focus-visible:border focus-visible:border-secondary'
                />
            )}
        </div>
    );
}
