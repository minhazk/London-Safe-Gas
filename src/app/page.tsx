import { Navbar } from '@/layout/Navbar';
import Image, { StaticImageData } from 'next/image';
import HomeBg from '@/assets/home-bg.jpeg';
import AboutImg from '@/assets/about-us.jpeg';
import { LucideIcon } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { contactNumber, coreValuesCards, sellingPointCards } from '@/data';

export default function Home() {
    return (
        <>
            <div className='relative rounded-b-lg'>
                <div className='absolute inset-0 -z-10 pointer-events-none'>
                    <Image src={HomeBg} alt='Plumber working' className='h-full w-full object-cover' />
                </div>
                <div className='bg-black/80'>
                    <Navbar transparent />
                </div>
                <div className='bg-black/80 pt-2 md:pt-6 xl:pt-4 pb-20 px-10 h-full text-white text-center flex flex-col items-center gap-5 z-20'>
                    <h1 className='text-xl sm:text-3xl font-bold max-w-lg'>London Safe Gas and Plumbing at your service</h1>
                    <p className='text-gray-300 text-xs md:text-sm'>Get in touch today for our expert plumbing solutions</p>
                    <h2 className='text-xl font-semibold'>
                        Call now on <span className='text-secondary'>{contactNumber}</span>
                    </h2>
                    <p className='text-gray-300 text-xs'>or</p>
                    <button className='bg-primary py-2 px-7 uppercase font-semibold rounded-md'>Book Now</button>
                </div>
            </div>

            <section className='shadow-lg rounded-xl py-8 px-5 md:px-10 text-center -mt-8 bg-white z-00 relative'>
                <h2 className='text-primary text-2xl font-bold'>Why choose us</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 xl:gap-2 my-10'>
                    {sellingPointCards.map(card => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </section>

            <div className='bg-gray-50 my-12'>
                <section className='py-10 flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-32 items-start justify-between'>
                    <div className='md:w-1/2'>
                        <h2 className='text-sm text-gray-400 font-bold uppercase ml-2'>About Us</h2>
                        <h3 className='text-xl font-bold mt-1 mb-4'>We are London Safe Gas</h3>
                        <p className='paragraph font-semibold'>
                            With over 20 years of dedicated experience and expertise in the field, we take immense pride in offering dependable plumbing, heating, and gas services to our valued
                            customers all over London.
                        </p>
                        <p className='paragraph font-semibold'>
                            With our competitive pricing and a dedication to ensuring customer contentment, we are the preferred choice for both local residents and businesses seeking plumbing
                            services in the vicinity. Rely on our extensive expertise, as we are a certified Gas Safe registered company with enhanced DBS checks in place.
                        </p>
                    </div>
                    <div className='rounded-xl overflow-hidden md:w-1/2'>
                        <Image src={AboutImg} className='object-cover object-center h-64 md:h-80' alt='Plumber fixing kitchen pipe system' />
                    </div>
                </section>
            </div>

            <section className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8 mt-10 mb-16'>
                {coreValuesCards.map(card => (
                    <CircleCard key={card.description} {...card} />
                ))}
            </section>

            <ContactForm title='Free Estimate' subtitle='Call us today on 07939249039 or visit our contacts page to schedule an appointment' />
        </>
    );
}

type CardProps = {
    title: string;
    icon: LucideIcon;
    description: string;
};

function Card({ title, icon: Icon, description }: CardProps) {
    return (
        <div className='grid grid-rows-[auto_minmax(0,_1fr)_minmax(0,_1fr)] gap-2 items-center justify-center'>
            <div className='text-sm md:text-md lg:text-lg font-semibold whitespace-nowrap'>{title}</div>
            <Icon size={38} strokeWidth={1} className='mx-auto' />
            <div className='text-gray-500 text-xs self-start max-w-[175px] xl:max-w-[250px] xl:mt-2'>{description}</div>
        </div>
    );
}

type CircleCardProps = {
    image: StaticImageData;
    description: string;
};

function CircleCard({ image, description }: CircleCardProps) {
    return (
        <div>
            <div className='rounded-full aspect-square border-4 border-primary p-1 mx-auto'>
                <Image src={image} className='h-full object-cover rounded-full w-48 md:w-3/5 max-w-[200px]' alt='business icon' />
            </div>
            <p className='text-gray-500 text-sm sm:text-md text-center mt-8 px-5'>{description}</p>
        </div>
    );
}
