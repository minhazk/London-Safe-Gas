import { Phone, Clock5, Menu } from 'lucide-react';
import BlueLogo from '@/assets/LSG logo blue.png';
import Image from 'next/image';
import Link from 'next/link';

const pagesLinks = [
    {
        name: 'Home',
        url: 'home',
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
        url: 'prices',
    },
    {
        name: 'Contact',
        url: 'contact',
    },
    {
        name: 'Book Online',
        url: 'book-online',
    },
];

export function Navbar() {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:gap-4 md:px-10 max-w-7xl mx-auto'>
                <div className='py-2 px-4 mt-2 mb-3 max-w-md mx-auto w-full md:order-2'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-6 w-full'>
                            <Phone className='text-primary' size={28} />
                            <div>
                                <p className='font-bold text-sm'>+44 123456789</p>
                                <p className='text-gray-400 text-xs'>
                                    123 Business Road
                                    <br />
                                    Surrey, PST CDE
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 w-full'>
                            <Clock5 className='text-primary' size={28} />
                            <div>
                                <p className='font-bold text-sm'>Hours</p>
                                <p className='text-gray-400 text-xs'>
                                    Monday - Saturday
                                    <br />8 am - 5 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative bg-gray-50 flex-grow py-4 px-4 flex justify-center items-center md:justify-start md:bg-transparent'>
                    <button className='absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full md:hidden'>
                        <Menu size={30} className='text-gray-500' />
                    </button>
                    <Image src={BlueLogo} alt='London Safe Gas logo' className='h-16 w-auto' />
                </div>
            </div>

            <div className='hidden md:bg-gray-50 md:flex justify-center'>
                <ul className='hidden md:flex gap-6 text-gray-500 font-semibold text-sm'>
                    {pagesLinks.map(({ name, url }) => (
                        <li key={url}>
                            <Link href={`/${url}`} className='py-6 px-4 block'>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
