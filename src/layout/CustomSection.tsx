import Image from 'next/image';
import { ReactNode } from 'react';
import Clouds from '@/assets/blue-sky-bg.jpg';

type SectionProps = {
    children: ReactNode;
};

export function SectionLight({ children }: SectionProps) {
    return <section className='full-w mb-5'>{children}</section>;
}

SectionLight.content = ({ children }: SectionProps) => {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='section-width'>{children}</div>
        </div>
    );
};

SectionLight.footer = ({ children }: SectionProps) => {
    return <div className='section-width'>{children}</div>;
};

export function SectionBlue({ children }: SectionProps) {
    return <section className='full-w'>{children}</section>;
}

SectionBlue.title = ({ children }: SectionProps) => {
    return <div className='section-width'>{children}</div>;
};

SectionBlue.content = ({ children }: SectionProps) => {
    return (
        <div className='bg-primary/90 my-5 relative'>
            <div className='absolute inset-0 -z-10'>
                <Image src={Clouds} alt='clouds' className='h-full object-cover' />
            </div>
            <div className='section-width text-white py-10'>{children}</div>
        </div>
    );
};
