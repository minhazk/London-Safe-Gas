import { address, contactEmail, contactNumber, gasRegNumber } from '@/data';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className='mb-16 mt-16 px-8 sm:px-5 lg:px-10 grid justify-center text-left grid-cols-[auto_max-content] sm:grid-cols-[1.2fr_auto_auto] lg:grid-cols-[1fr_auto_auto_auto] grid-rows-[min-content_min-content_auto] gap-x-10 gap-y-12 sm:gap-y-8 lg:gap-8 items-center sm:w-[90vw] max-w-[1360px] mx-auto text-xs xl:text-sm'>
            <div className='sm:-mt-1 col-span-full sm:col-span-1 text-center sm:text-left text-sm sm:text-xs lg:text-sm'>
                <p className='text-primary font-bold text-xl sm:text-lg whitespace-nowrap'>London Safe Gas</p>
                <p className='text-gray-400 font-medium my-2'>{contactNumber}</p>
                <p className='text-gray-400 font-medium'>
                    {address.road}
                    <br />
                    {address.region}
                </p>
                <p className='text-gray-400 font-medium'>London, UK</p>
            </div>

            <div className='uppercase flex flex-col gap-3 md:mr-8 lg:mr-10 text-center md:mt-0 text-xs xl:text-sm lg:h-full'>
                <p className='text-primary font-bold'>Services</p>
                <Link href='heating' className='text-gray-400 font-medium hover:opacity-70'>
                    Heating
                </Link>
                <Link href='plumbing' className='text-gray-400 font-medium hover:opacity-70'>
                    Plumbing
                </Link>
                <Link href='power-flushing' className='text-gray-400 font-medium hover:opacity-70'>
                    Power Flushing
                </Link>
            </div>

            <div className='flex flex-col items-center gap-3 lg:mr-5 text-gray-400 text-xs xl:text-sm h-full col-span-full sm:col-span-1 order-last sm:order-[unset]'>
                <p className='text-primary font-bold uppercase'>Contact Us</p>

                <p className='font-medium whitespace-nowrap'>{contactEmail}</p>
                <p className='font-medium whitespace-nowrap'>Gas Registration Number: {gasRegNumber}</p>
                <p className='font-medium whitespace-nowrap'>{new Date().getFullYear()} © All Rights Reserved</p>
            </div>

            <div className='flex flex-col items-center gap-3 sm:gap-4 lg:gap-3 xl:gap-4 text-gray-400 text-xs xl:text-sm lg:h-full sm:col-span-full lg:col-span-1'>
                <p className='text-primary font-bold uppercase'>Get in touch</p>
                <div className='flex gap-4 items-center'>
                    <a
                        href='https://www.facebook.com/profile.php?id=61552428013531'
                        className='rounded-full bg-blue-50 text-primary p-3 hover:bg-primary hover:text-white transition-colors'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <BsFacebook size={21} />
                    </a>
                    <a href={`tel:${contactNumber}`} className='rounded-full bg-cyan-50 text-cyan-700 p-3 hover:bg-cyan-700 hover:text-white transition-colors'>
                        <Phone size={21} />
                    </a>
                    <a href={`mailto:${contactEmail}`} className='rounded-full bg-red-50 text-red-700 p-3 hover:bg-red-700 hover:text-white transition-colors'>
                        <Mail size={21} />
                    </a>
                </div>
                <p className='text-gray-400 mb-1'>Connect with us</p>
            </div>
        </footer>
    );
}
