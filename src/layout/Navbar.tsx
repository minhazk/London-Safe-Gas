'use client';

import { Phone, Clock5, Menu, X } from 'lucide-react';
import BlueLogo from '@/assets/LSG logo blue.png';
import WhiteLogo from '@/assets/LSG logo white.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const pagesLinks = [
    {
        name: 'Home',
        url: '',
    },
    {
        name: 'Heating',
        url: 'heating',
    },
    {
        name: 'Plumbing',
        url: 'plumbing',
    },
    {
        name: 'Prices',
        url: 'pricing',
    },
    {
        name: 'Contact',
        url: 'contact',
    },
    {
        name: 'Book Online',
        url: 'contact',
    },
];

type NavBarProps = {
    transparent?: boolean;
};

export function Navbar({ transparent }: NavBarProps) {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const BurgerIcon = isBurgerOpen ? X : Menu;

    useEffect(() => {
        const resize = () => setBurgerOpen(false);
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [isBurgerOpen]);

    return (
        <nav className={`grid grid-cols-1 md:grid-cols-[1fr_auto] xl:grid-cols-[auto_1fr_auto] gap-y-0 gap-x-4 max-w-[1536px] mx-auto ${transparent ? 'text-white' : 'text-black'}`}>
            <div className='py-2 px-4 mt-2 mb-3 max-w-md mx-auto w-full flex items-center gap-4 md:order-2 md:pr-20 xl:px-10 whitespace-nowrap'>
                <div className='flex items-center gap-6 w-full'>
                    <Phone className={transparent ? 'text-secondary' : 'text-primary'} size={28} strokeWidth={1} />
                    <div>
                        <p className='font-bold text-sm'>+44 123456789</p>
                        <p className={`${transparent ? 'text-gray-300/80' : 'text-gray-400'} font-medium text-xs`}>
                            123 Business Road
                            <br />
                            Surrey, PST CDE
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-6 w-full'>
                    <Clock5 className={transparent ? 'text-secondary' : 'text-primary'} size={28} strokeWidth={1} />
                    <div>
                        <p className='font-bold text-sm'>Hours</p>
                        <p className={`${transparent ? 'text-gray-300/80' : 'text-gray-400'} font-medium text-xs`}>
                            Monday - Saturday
                            <br />8 am - 5 pm
                        </p>
                    </div>
                </div>
            </div>

            <div className={`relative ${!transparent ? 'bg-gray-50' : 'bg-unset'} py-4 px-4 flex justify-center items-center md:justify-start md:bg-transparent md:pl-20 xl:px-10 whitespace-nowrap`}>
                <button onClick={() => setBurgerOpen(t => !t)} className='absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full md:hidden'>
                    <BurgerIcon size={30} className={transparent ? 'text-white' : 'text-gray-500'} />
                </button>
                <Link href='/'>
                    <Image src={transparent ? WhiteLogo : BlueLogo} alt='London Safe Gas logo' className='h-16 w-auto min-w-max' />
                </Link>
            </div>

            <div
                onClick={() => {
                    setBurgerOpen(false);
                }}
                className={`${isBurgerOpen ? 'fixed z-50 bg-black/70 inset-0 flex justify-center items-start' : 'hidden items-center'} ${
                    !transparent ? 'md:bg-gray-50 xl:bg-transparent' : 'bg-unset'
                } md:flex  justify-center xl:justify-start order-3 xl:order-1 col-span-2 xl:col-span-1`}
            >
                <ul
                    className={`${isBurgerOpen ? 'bg-white w-full border shadow-lg text-lg' : 'text-sm'} md:flex gap-6 xl:gap-3 ${
                        transparent ? (isBurgerOpen ? 'text-gray-500 font-semibold' : 'text-white') : 'text-gray-500 font-semibold'
                    }`}
                >
                    {isBurgerOpen && (
                        <li className='mb-3 px-8'>
                            <div className='flex items-center justify-between p-3'>
                                <Link href='/'>
                                    <Image src={BlueLogo} alt='London Safe Gas logo' className='h-16 w-auto min-w-max' />
                                </Link>
                                <button onClick={() => setBurgerOpen(false)} className='hover:bg-gray-50 p-3 rounded-full transition-colors'>
                                    <X />
                                </button>
                            </div>
                        </li>
                    )}
                    {pagesLinks.map(({ name, url }) => (
                        <li key={name} className={`xl:py-2 ${isBurgerOpen && 'last:mb-3'}`}>
                            <Link
                                onClick={e => e.stopPropagation()}
                                href={`/${url}`}
                                className={`${isBurgerOpen ? 'hover:bg-gray-100 px-12' : 'px-4'}
                                ${
                                    transparent && !isBurgerOpen
                                        ? 'py-3'
                                        : isBurgerOpen
                                        ? 'py-3'
                                        : 'py-6 xl:p-4 md:hover:bg-primary/90 md:hover:text-white xl:hover:bg-transparent xl:hover:text-gray-500 after:absolute after:bg-primary/50 after:h-px after:w-0 xl:hover:after:w-full after:bottom-0 after:left-0 after:right-0 after:mx-auto after:transition-all after:duration-300'
                                } block xl:rounded-md transition-colours relative`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                    {isBurgerOpen && (
                        <li className='px-12 py-8 mt-5 relative before:absolute before:top-0 before:w-3/4 before:h-px before:bg-gray-400/50 before:left-1/2 before:-translate-x-1/2'>
                            <p className='text-xs uppercase font-bold text-gray-700'>Contact us</p>
                            <p className='text-gray-400 font-normal text-xs mt-3'>
                                For your boiler service and repair needs, please do not hesitate to contact us at 0734567890. Your comfort and peace of mind are our top priorities.
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
