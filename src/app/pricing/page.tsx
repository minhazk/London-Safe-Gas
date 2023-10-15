import { Navbar } from '@/layout/Navbar';
import Image, { StaticImageData } from 'next/image';
import Cash from '@/assets/cash.jpg';
import Credit from '@/assets/card-payment.jpg';
import Bank from '@/assets/bank-transfer.jpg';

const pricing = [
    {
        title: 'Standard plumbing rates',
        subtitle: 'inc blocked primary drains (per hour ex VAT)',
        domestic: {
            day: 75,
            night: 100,
        },
        weekend: {
            day: 100,
            night: 110,
        },
    },
    {
        title: 'Domestic Gas and heating ',
        subtitle: 'gas/heating rates/ blocked secondary drains (per hour ex VAT)',
        domestic: {
            day: 90,
            night: 110,
        },
        weekend: {
            day: 110,
            night: 120,
        },
    },
];

const paymentMethods = [
    {
        image: Cash,
        name: 'Cash',
    },
    {
        image: Credit,
        name: 'Credit/Debit',
    },
    {
        image: Bank,
        name: 'BankTransfer',
    },
];

const terms = [
    'Unvented cylinder, immersion heater, and temperature/pressure relief valve work will be billed at our Heating/Gas rate.',
    'For hourly rate work, there is a minimum charge of 1 hour, followed by billing in 20-minute units.',
    'Standard rates cover labor costs only and do not include the cost of parts, which will be invoiced separately.',
    'Payment is due in full upon receipt of the invoice and can be made via credit/debit card (our chip & pin machines provide a secure method), cash, or electronic bank transfer.',
    'Estimates can be provided upon request and are complimentary for our existing customers.',
    'Fixed prices are inclusive and can be provided verbally or in writing upon request before commencing the work.',
    'Any applicable parking and congestion fees will be included as part of the total invoice for our services.',
    'Material collection for non-stock items will be kept to a minimum and will not exceed 45 minutes of the current hourly rate.',
    'Our invoices are digital, though hard copies are available upon request. They include a comprehensive description of the work performed, including time allocation and a detailed breakdown of labor and materials.',
    'Insurance Reports incur a nominal fee of £50, which is redeemable against future work.',
    'Rubble collection is not included in the pricing unless pre-quoted.',
    'Removal of appliances for disposal will incur a fee of £40 if agreed upon with the engineer at the time of service.',
    'We do not impose surcharges for credit card payments.',
];

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
                        {terms.map(term => (
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
                <p className='font-bold text-md'>8 AM - 8 PM</p>
                <p className='font-bold text-md'>8 PM - 12 PM</p>
                <div className='col-span-full md:col-span-1 order-first md:order-none mb-3 md:my-6'>
                    <button className='bg-primary text-white text-md py-1 px-3 rounded'>Domestic</button>
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
                    <button className='bg-primary text-white text-md py-1 px-3 rounded'>Domestic</button>
                    <p className='text-gray-500 font-medium text-sm mt-3 md:mt-2'>Monday - Friday</p>
                </div>
                <p className='font-bold text-md md:hidden'>8 AM - 8 PM</p>
                <p className='font-bold text-md md:hidden'>8 PM - 12 PM</p>
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

export function PaymentCard({ image, name }: PaymentCardProps) {
    return (
        <div>
            <div className='rounded-full aspect-square overflow-hidden border-4 border-primary p-1 w-48 md:w-3/5 max-w-[200px] mx-auto relative before:absolute before:inset-0 before:bg-primary/20'>
                <Image src={image} className='w-full h-full object-cover rounded-full' alt='business icon' />
            </div>
            <p className='text-md sm:text-lg text-center font-bold mt-8 px-5'>{name}</p>
        </div>
    );
}
