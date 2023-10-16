import { ImageHeader } from '@/components/ImageHeader';
import { Navbar } from '@/layout/Navbar';
import Heating from '@/assets/boiling-main.jpeg';
import Credit from '@/assets/card-payment.jpg';
import Bank from '@/assets/bank-transfer.jpg';
import fill from '@/assets/boiler-fill.jpg';
import { SectionBlue, SectionLight } from '@/layout/CustomSection';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { boilerServiceProcess, contactNumber, gasCertificatePricing, gasCertificateTerms, heatingServices } from '@/data';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <ImageHeader title='Boiler Service and Repairs' image={Heating} />

            <section className='mb-6'>
                <p className='paragraph'>
                    The London Safe Gas team is your trusted partner for professional boiler service and repairs. Our Gas Safe Engineers are extensively trained by industry-leading manufacturers, with
                    a specialization in servicing Worcester Bosch and Vaillant boilers.
                </p>
            </section>

            <SectionLight>
                <SectionLight.content>
                    <h2 className='text-primary font-semibold text-sm md:text-base lg:text-lg'>
                        We offer a comprehensive range of services related to boilers and gas systems, including but not limited to:
                    </h2>
                    <ul className='my-5 grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-y-1 lg:gap-y-2 px-3 gap-x-8'>
                        {boilerServiceProcess.map(service => (
                            <li key={service} className='text-xs md:text-sm font-medium text-gray-600 before:content-["\2022"] before:inline-block before:text-secondary before:text-base before:w-5'>
                                {service}
                            </li>
                        ))}
                    </ul>
                </SectionLight.content>
            </SectionLight>

            <section>
                <p className='paragraph'>
                    We take pride in providing cost-effective and dependable heating solutions to our valued customers. Rest assured, all our engineers are fully Gas Safe Registered, guaranteeing the
                    highest level of safety and expertise.
                </p>
                <p className='text-white text-xs my-6 bg-primary p-4 rounded-md text-center'>
                    For your boiler service and repair needs, please do not hesitate to contact us at <span className='text-secondary font-semibold text-sm ml-1'>{contactNumber}</span>. Your comfort
                    and peace of mind are our top priorities.
                </p>
            </section>

            <SectionLight>
                <SectionLight.content>
                    <h2 className='text-primary font-semibold text-sm md:text-base lg:text-lg'>During a comprehensive boiler service, our meticulous process includes:</h2>
                    <ul className='my-5 grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-y-1 lg:gap-y-2 px-3 gap-x-8'>
                        {heatingServices.map(service => (
                            <li key={service} className='text-xs md:text-sm font-medium text-gray-600 before:content-["\2022"] before:inline-block before:text-secondary before:text-base before:w-5'>
                                {service}
                            </li>
                        ))}
                    </ul>
                </SectionLight.content>
            </SectionLight>

            <SectionBlue>
                <SectionBlue.title>
                    <h2 className='font-bold md:text-lg'>Landlords Gas Safety Certificate (CP12) Pricing:</h2>
                    <p className='text-gray-400 font-medium text-xs md:text-sm mt-1'>Please note that landlord safety certificates should be renewed yearly</p>
                </SectionBlue.title>
                <SectionBlue.content>
                    <div className='grid grid-cols-1 lg:grid-cols-1 auto-rows-min gap-y-5 lg:gap-y-5 px-3 gap-x-4'>
                        {gasCertificatePricing.map(data => (
                            <RateData key={data.label} {...data} />
                        ))}
                    </div>
                </SectionBlue.content>
            </SectionBlue>

            <section className='text-center'>
                <p className='font-bold md:text-lg'>Payment</p>
                <p className='text-gray-400 font-medium text-xs md:text-sm mt-1'>Payment must be made prior to the issuance of the electronic certificate. We accept payment through:</p>

                <div className='flex items-center justify-center gap-8 my-8 font-semibold px-2 md:px-12 max-w-3xl mx-auto'>
                    <div className='w-full'>
                        <div className='rounded-full aspect-square border-4 border-primary p-1 max-w-[200px] mx-auto'>
                            <Image src={Credit} className='w-full h-full object-cover rounded-full' alt='business icon' />
                        </div>
                        <p className='text-gray-500 text-sm sm:text-md text-center mt-6 md:mt-8 px-5 whitespace-nowrap'>Credit/Debit</p>
                    </div>
                    <div className='w-full'>
                        <div className='rounded-full aspect-square border-4 border-primary p-1 max-w-[200px] mx-auto'>
                            <Image src={Bank} className='w-full h-full object-cover rounded-full' alt='business icon' />
                        </div>
                        <p className='text-gray-500 text-sm sm:text-md text-center mt-6 md:mt-8 px-5 whitespace-nowrap'>Bank Transfer</p>
                    </div>
                </div>

                <p className='text-gray-400 font-medium text-xs md:text-sm mt-12'>
                    Please don&apos;t hesitate to contact us for any further information or to schedule your Gas Safety Certificate inspection. Your safety and compliance are our top priorities.
                </p>
            </section>

            <div className='section-width my-6 rounded-lg overflow-hidden relative bg-black/60 h-40'>
                <Image src={fill} className='object-cover absolute h-40 -z-10 inset-0' alt='filler image' />
            </div>

            <SectionLight>
                <SectionLight.content>
                    <h3 className='md:text-md font-semibold'>Terms and Conditions</h3>

                    <ul className='list-inside mt-5 list-decimal'>
                        {gasCertificateTerms.map(term => (
                            <li key={term.title} className='text-gray-600 mb-1 last:mb-0 text-sm md:text-base font-medium'>
                                {term.title}
                                <ul className='list-disc list-inside pl-3 my-2 text-slate-500 font-normal text-xs md:text-sm'>
                                    {term.description.map(description => (
                                        <li key={description}>{description}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </SectionLight.content>

                <SectionLight.footer>
                    <p className='paragraph text-center my-10'>
                        For further assistance or to request a booking form, kindly provide your details, and we will promptly send you the necessary information. Your compliance and cooperation are
                        appreciated.
                    </p>
                </SectionLight.footer>
            </SectionLight>

            <ContactForm title='BOOK NOW' />
        </>
    );
}

type RateDataProps = {
    label: string;
    points: string[];
};

function RateData({ label, points }: RateDataProps) {
    return (
        <div className=''>
            <p className='font-bold text-sm md:text-base'>{label}</p>
            <ul className=''>
                {points.map(point => (
                    <li key={point} className='text-xs md:text-sm before:content-["\2022"] before:inline-block before:text-secondary before:text-base before:w-5'>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
