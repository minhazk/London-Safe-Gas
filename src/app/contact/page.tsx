import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/layout/Navbar';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <section className='mt-5 mb-12'>
                <h1 className='uppercase font-bold text-sm md:text-base'>Contact Us</h1>
                <p className='paragraph mt-1'>We are located in the Hendon region</p>

                <h2 className='text-primary font-bold text-2xl md:text-3xl my-5'>London Safe Gas</h2>

                <p className='text-sm text-gray-500 font-medium'>
                    123 Business Road
                    <br />
                    Surrey, PST CDE
                    <br />
                    London, UK
                </p>

                <div className='my-5'>MAP HERE</div>

                <p className='paragraph'>Fill in the form below to send an email and we will get back to you as soon as possible</p>
            </section>

            <ContactForm title='Contact Now' />
        </>
    );
}
