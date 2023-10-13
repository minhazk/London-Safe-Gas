import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import HomeBg from '@/assets/home-bg.jpeg';

export default function Home() {
    return (
        <>
            <div className='relative rounded-b-lg'>
                <div className='absolute inset-0 -z-10'>
                    <Image src={HomeBg} alt='Plumber working' className='h-full object-cover' />
                </div>
                <div className='bg-black/80'>
                    <Navbar transparent />
                </div>
                <div className='bg-black/80 pt-10 pb-20 px-10 h-full text-white text-center flex flex-col items-center gap-5'>
                    <h1 className='text-lg sm:text-3xl font-bold max-w-lg'>London Safe Gas and Plumbing at your service</h1>
                    <p className='text-gray-300 text-xs md:text-sm'>Get in touch today for our expert plumbing solutions</p>
                    <h2 className='text-xl font-semibold'>
                        Call now on <span className='text-secondary'>020 1234 5678</span>
                    </h2>
                    <p className='text-gray-300 text-xs'>or</p>
                    <button className='bg-primary py-2 px-7 uppercase font-semibold rounded-md'>Book Now</button>
                </div>
            </div>
        </>
    );
}
