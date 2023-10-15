import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/layout/Navbar';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <section className='mt-5 mb-12 grid gap-7 lg:grid-cols-2'>
                <div className='lg:py-10'>
                    <h1 className='uppercase font-bold'>Contact Us</h1>
                    <p className='text-gray-500 text-sm mt-1'>We are located in the Hendon region</p>

                    <h2 className='text-primary font-bold text-2xl md:text-3xl my-4'>London Safe Gas</h2>

                    <p className='text-sm text-gray-500'>
                        123 Business Road
                        <br />
                        Surrey, PST CDE
                        <br />
                        London, UK
                    </p>

                    <p className='paragraph md:text-xs xl:text-sm mt-5 md:mt-10'>Fill in the form below to send an email and we will get back to you as soon as possible</p>
                </div>

                <div className='bg-blue-300 rounded-lg overflow-hidden'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546467503302!2d-0.1220941230902424!3d51.50318971101058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1697408165703!5m2!1sen!2suk'
                        width='600'
                        height='350'
                        style={{ border: 0 }}
                        loading='lazy'
                    ></iframe>
                </div>
            </section>

            <ContactForm title='Contact Now' />
        </>
    );
}
