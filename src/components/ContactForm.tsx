import Image from 'next/image';
import Clouds from '@/assets/blue-sky-bg.jpg';
import { ComponentProps } from 'react';

type ContactFormProps = {
    title: string;
    subtitle?: string;
};

export function ContactForm({ title, subtitle }: ContactFormProps) {
    return (
        <div className='text-center'>
            <p className='text-primary text-lg font-bold'>{title}</p>
            {subtitle && <p className='text-gray-400/90 text-xs md:text-sm mt-2 px-10'>{subtitle}</p>}

            <div className='relative my-8'>
                <div className='absolute inset-0 -z-10'>
                    <Image src={Clouds} alt='clouds' className='h-full object-cover' />
                </div>
                <div className='bg-primary/90'>
                    <form className='py-10 w-[85vw] mx-auto max-w-4xl grid gap-5 md:grid-cols-2'>
                        <Input label='First Name' placeholder='First Name, Surname' name='name' />
                        <Input label='Contact Number' placeholder='020123456789' name='number' type='number' />
                        <div className='col-span-full'>
                            <Input label='Email Address' placeholder='example@server.com' name='email' type='email' />
                        </div>
                        <div className='col-span-full'>
                            <Input label='Service' placeholder='Plumbing' name='service' />
                        </div>
                        <div className='col-span-full'>
                            <Input label="Details about the issue you're having" textarea name='body' placeholder='Describe what you are experience, when it happens, etc...' />
                        </div>

                        <button className='text-white text-xs uppercase font-semibold py-3 px-8 mt-3 rounded-md bg-secondary w-fit mx-auto col-span-full'>Send Booking Request</button>
                    </form>
                </div>
            </div>
        </div>
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
