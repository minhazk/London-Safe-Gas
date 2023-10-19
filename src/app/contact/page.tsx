import { ContactForm } from '@/components/ContactForm';
import { contactNumber } from '@/data';
import { Navbar } from '@/layout/Navbar';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <section className='mt-5 mb-12 grid gap-7 md:grid-cols-2'>
                <div className='lg:py-10'>
                    <h1 className='text-sm md:text-base uppercase font-bold'>Contact Us</h1>
                    <p className='text-gray-500 text-xs md:text-sm mt-1'>We are located in the Hendon region</p>

                    <h2 className='text-primary font-bold text-2xl lg:text-3xl mt-4'>London Safe Gas</h2>

                    <p className='text-md my-2 text-secondary font-semibold'>{contactNumber}</p>

                    <p className='text-sm text-gray-500'>
                        123 Business Road
                        <br />
                        Surrey, PST CDE
                        <br />
                        London, UK
                    </p>

                    <p className='paragraph md:text-xs xl:text-sm mt-5 md:mt-10'>Fill in the form below to send an email and we will get back to you as soon as possible</p>
                </div>

                <div className='rounded-lg overflow-hidden'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9916.420290549459!2d-0.2409548214964782!3d51.58463763223734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610c5529a0749%3A0xcdff3537b6aa4a45!2sHendon%2C%20London!5e0!3m2!1sen!2suk!4v1697710824360!5m2!1sen!2suk'
                        width='600'
                        height='350'
                        loading='lazy'
                    ></iframe>
                </div>
            </section>

            <ContactForm title='Contact Now' />
        </>
    );
}
