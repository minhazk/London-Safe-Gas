import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { RxInstagramLogo } from 'react-icons/rx';

export function Footer() {
    return (
        <div className='mb-12 px-10 grid justify-center text-left grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-8 items-center md:w-[90vw] max-w-[13600px] mx-auto'>
            <div>
                <p className='text-primary font-bold text-md'>London Safe Gas</p>
                <p className='text-gray-400 font-medium text-xs my-2'>020 1234 4567</p>
                <p className='text-gray-400 font-medium text-xs'>
                    123 Business Road
                    <br />
                    Surrey, PST CDE
                </p>
                <p className='text-gray-400 font-medium text-xs'>London, UK</p>
            </div>

            <div className='uppercase flex flex-col gap-3 md:mr-5 lg:mr-10 text-center mt-2 md:mt-0'>
                <p className='text-primary font-bold text-xs'>Services</p>
                <p className='text-gray-400 font-medium text-xs'>Heating</p>
                <p className='text-gray-400 font-medium text-xs'>Plumbing</p>
                <p className='text-gray-400 font-medium text-xs'>Power Flushing</p>
            </div>

            <div className='flex flex-col items-center gap-3 col-span-full md:col-span-1'>
                <p className='text-primary font-bold text-xs uppercase'>Follow Us</p>
                <div className='flex gap-4 items-center'>
                    <a href='/' className='rounded-full bg-gray-100 p-3' target='_blank' rel='noreferrer'>
                        <RxInstagramLogo className='text-primary' size={21} />
                    </a>
                    <a href='/' className='rounded-full bg-gray-100 p-3' target='_blank' rel='noreferrer'>
                        <BiLogoTwitter className='text-primary' size={21} />
                    </a>
                    <a href='/' className='rounded-full bg-gray-100 p-3' target='_blank' rel='noreferrer'>
                        <BiLogoFacebook className='text-primary' size={21} />
                    </a>
                </div>
                <p className='text-gray-400 font-medium text-xs'>{new Date().getFullYear()} © All Rights Reserved</p>
            </div>
        </div>
    );
}
