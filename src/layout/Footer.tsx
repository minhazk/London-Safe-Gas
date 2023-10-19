import { address, contactEmail, contactNumber, gasRegNumber } from '@/data';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className='mb-16 mt-16 px-10 grid justify-center text-left grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-8 items-center md:w-[90vw] max-w-[1360px] mx-auto text-xs lg:text-sm'>
            <div>
                <p className='text-primary font-bold text-lg'>London Safe Gas</p>
                <p className='text-gray-400 font-medium my-2'>{contactNumber}</p>
                <p className='text-gray-400 font-medium'>
                    {address.road}
                    <br />
                    {address.region}
                </p>
                <p className='text-gray-400 font-medium'>London, UK</p>
            </div>

            <div className='uppercase flex flex-col gap-3 md:mr-5 lg:mr-10 text-center mt-2 md:mt-0 text-xs lg:text-sm'>
                <p className='text-primary font-bold'>Services</p>
                <Link href='heating' className='text-gray-400 font-medium'>
                    Heating
                </Link>
                <Link href='plumbing' className='text-gray-400 font-medium'>
                    Plumbing
                </Link>
                <Link href='power-flushing' className='text-gray-400 font-medium'>
                    Power Flushing
                </Link>
            </div>

            <div className='flex flex-col items-center gap-3 col-span-full md:col-span-1 text-gray-400 text-xs lg:text-sm'>
                <p className='text-primary font-bold uppercase'>Contact Us</p>

                <p className='font-medium'>{contactEmail}</p>
                <p className='font-medium'>Gas Registration Number: {gasRegNumber}</p>
                <p className='font-medium'>{new Date().getFullYear()} © All Rights Reserved</p>
            </div>
        </footer>
    );
}
