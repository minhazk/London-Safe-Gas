import { Phone, Clock5, Menu } from 'lucide-react';
import BlueLogo from '@/assets/LSG logo blue.png';
import Image from 'next/image';
import Link from 'next/link';

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
    return (
        <nav className={`grid grid-cols-1 md:grid-cols-[1fr_auto] xl:grid-cols-[auto_1fr_auto] gap-y-0 gap-x-4 max-w-[1536px] mx-auto ${transparent ? 'text-white' : 'text-black'}`}>
            <div className='py-2 px-4 mt-2 mb-3 max-w-md mx-auto w-full flex items-center gap-4 md:order-2 md:pr-20 xl:px-10 whitespace-nowrap'>
                <div className='flex items-center gap-6 w-full'>
                    <Phone className={transparent ? 'text-secondary' : 'text-primary'} size={28} strokeWidth={1} />
                    <div>
                        <p className='font-bold text-sm'>+44 123456789</p>
                        <p className='text-gray-400 font-medium text-xs'>
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
                        <p className='text-gray-400 font-medium text-xs'>
                            Monday - Saturday
                            <br />8 am - 5 pm
                        </p>
                    </div>
                </div>
            </div>

            <div className={`relative ${!transparent ? 'bg-gray-50' : 'bg-unset'} py-4 px-4 flex justify-center items-center md:justify-start md:bg-transparent md:pl-20 xl:px-10 whitespace-nowrap`}>
                <button className='absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full md:hidden'>
                    <Menu size={30} className='text-gray-500' />
                </button>
                <Image src={transparent ? BlueLogo : BlueLogo} alt='London Safe Gas logo' className='h-16 w-auto min-w-max' />
            </div>

            <div className={`hidden items-center ${!transparent ? 'md:bg-gray-50 xl:bg-transparent' : 'bg-unset'} md:flex justify-center xl:justify-start order-3 xl:order-1 col-span-2 xl:col-span-1`}>
                <ul className={`hidden md:flex gap-6 xl:gap-3 ${transparent ? 'text-white' : 'text-gray-500'} font-semibold text-sm`}>
                    {pagesLinks.map(({ name, url }) => (
                        <li key={name}>
                            <Link href={`/${url}`} className={`${transparent ? 'py-3' : 'py-6'} px-4 block`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
