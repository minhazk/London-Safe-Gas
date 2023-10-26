import { Navbar } from '@/layout/Navbar';
import Image, { StaticImageData } from 'next/image';
import { paymentMethods, pricing, pricingTerms } from '@/data';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <section>
                <h1 className='text-center font-bold text-lg lg:text-xl my-6 xl:mt-2'>Our Pricing and Services</h1>

                {pricing.map(prices => (
                    <PriceTable key={prices.title} {...prices} />
                ))}

                <h2 className='text-center font-bold text-lmd lg:text-lg mt-12 md:mt-6 uppercase'>Payment Methods</h2>
                <p className='text-center text-xs md:text-sm text-gray-400 mt-1'>Please note that we do not offer payment links as a payment method</p>

                <div className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-5 mt-10'>
                    {paymentMethods.map(method => (
                        <PaymentCard key={method.name} {...method} />
                    ))}
                </div>
            </section>

            <div className='bg-gray-50 my-12'>
                <section className='py-10'>
                    <h3 className='md:text-md font-semibold'>Terms and Conditions</h3>

                    <ul className='list-disc px-2 mt-5'>
                        {pricingTerms.map(term => (
                            <li key={term} className='text-xs md:text-sm text-gray-500 font-medium mb-1 last:mb-0'>
                                {term}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}

type PriceProps = {
    day: number;
    night: number;
};

type PriceTableProps = {
    title: string;
    subtitle: string;
    domestic: PriceProps;
    weekend: PriceProps;
};

function PriceTable({ title, subtitle, domestic, weekend }: PriceTableProps) {
    return (
        <>
            <h2 className='font-bold text-md'>{title}</h2>
            <p className='mt-1 text-gray-400 text-sm'>{subtitle}</p>

            <div className='text-center my-7 grid grid-cols-2 md:grid-cols-3 justify-center items-center'>
                <div className='col-span-full md:col-span-1' />
                <p className='font-bold text-md'>8 AM - 6 PM</p>
                <p className='font-bold text-md'>6 PM - 12 PM</p>
                <div className='col-span-full md:col-span-1 order-first md:order-none mb-3 md:my-6'>
                    <div className='bg-primary text-white text-md py-1 px-3 rounded w-fit mx-auto'>Domestic</div>
                    <p className='text-gray-500 font-medium text-sm mt-3 md:mt-2'>Monday - Friday</p>
                </div>
                <p className='text-primary text-2xl font-semibold mt-4 md:mt-0 mb-6 md:mb-0'>
                    £<span className='text-5xl md:text-6xl'>{domestic.day}</span>
                </p>
                <p className='text-primary text-2xl font-semibold mt-4 md:mt-0 mb-6 md:mb-0 border-l border-primary/20'>
                    £<span className='text-5xl md:text-6xl'>{domestic.night}</span>
                </p>
                <div className='col-span-full border-t border-primary/20 h-px rounded w-5/6 mx-auto' />
                <div className='col-span-full md:col-span-1 mb-3 mt-8 md:my-6'>
                    <div className='bg-primary text-white text-md py-1 px-3 rounded w-fit mx-auto'>Weekend</div>
                    <p className='text-gray-500 font-medium text-sm mt-3 md:mt-2'>Saturday - Sunday</p>
                </div>
                <p className='font-bold text-md md:hidden'>8 AM - 6 PM</p>
                <p className='font-bold text-md md:hidden'>6 PM - 12 PM</p>
                <p className='text-primary text-2xl font-semibold mt-4 md:mt-0'>
                    £<span className='text-5xl md:text-6xl'>{weekend.day}</span>
                </p>
                <p className='text-primary text-2xl font-semibold mt-4 md:mt-0 border-l border-primary/20'>
                    £<span className='text-5xl md:text-6xl'>{weekend.night}</span>
                </p>
            </div>
        </>
    );
}

type PaymentCardProps = {
    image: StaticImageData;
    name: string;
};

function PaymentCard({ image, name }: PaymentCardProps) {
    return (
        <div>
            <div className='rounded-full aspect-square border-4 border-primary p-1 w-48 md:w-3/5 max-w-[200px] mx-auto'>
                <Image src={image} className='w-full aspect-square object-cover rounded-full' alt='business icon' />
            </div>
            <p className='text-md sm:text-lg text-center font-bold mt-8 px-5'>{name}</p>
        </div>
    );
}
