import { ImageHeader } from '@/components/ImageHeader';
import { Navbar } from '@/layout/Navbar';
import Heating from '@/assets/boiling-main.jpeg';
import Credit from '@/assets/card-payment.jpg';
import Bank from '@/assets/bank-transfer.jpg';
import fill from '@/assets/boiler-fill.jpg';
import { SectionBlue, SectionLight } from '@/layout/CustomSection';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';

const boilerServiceProcess = [
    'Thoroughly inspecting the boiler and its controls.',
    'Identifying and addressing any potential leaks or corrosion issues.',
    'Carefully examining the primary components of the boiler.',
    'Conducting essential gas pressure and flue tests for safety.',
    'Performing necessary cleaning of components to ensure optimal performance.',
];

const heatingServices = [
    'Boiler servicing',
    'Diagnosing and resolving boiler fault codes',
    'Boiler maintenance and upkeep',
    'Addressing issues with no pilot light',
    'Troubleshooting and fixing pilot lights that keep going out',
    'Correcting low boiler pressure problems',
    'Investigating and resolving strange banging or whistling noises from your boiler',
    "Adjusting water temperature if it's too hot",
    'Diagnosing and fixing issues related to no heating or hot water',
    'Investigating pressure drops in your system',
    'Removing air from pipes',
    'Addressing banging noises from pipework',
    'Conducting thorough gas safety checks',
    'Providing Landlord Certificates (CP12)',
    'Installing gas cookers and hobs',
    'Investigating suspected gas leaks',
    'Assisting with high gas bills and optimizing energy efficiency.',
];

const gasCertificatePricing = [
    {
        label: 'Landlords Gas Safety Certificate (CP12) Pricing:',
        points: ['Inspection of 1 appliance: £65', 'Inspection of additional appliances: £15 each', 'Boiler service (if completed with Gas Certificate): Additional £70'],
    },
    {
        label: 'Additional Charges:',
        points: [
            'Waiting charge: £15 per 15 minutes',
            'Parking costs (if incurred due to no parking supplied by the customer)',
            'Collection of keys from a letting agent: £20 if within 3 miles',
            'Incorrect issue of keys: A further £20 charge',
        ],
    },
    {
        label: 'Gas appliances covered include:',
        points: ['Boiler', 'Hot water heater', 'Oven', 'Gas hob', 'Free', 'standing cooker'],
    },
    {
        label: 'Additional charges apply for:',
        points: ['More than one boiler or water heater: £30 surcharge', 'Back boiler with fire front: £30 surcharge', 'More than one of any of the above appliances: Add £15 each'],
    },
    {
        label: 'Operating Hours and Rates:',
        points: [
            'Rates apply for Monday to Friday from 7am to 6pm.',
            'For Saturday and Sunday from 7am to 6pm, add £10 per certificate.',
            'For Monday to Friday from 6pm to 12am, add £30 per certificate.',
            'For Saturday and Sunday from 6pm to 12am, add £50 per certificate.',
        ],
    },
];

const gasCertificateTerms = [
    {
        title: 'Payment:',
        description: ['Payment must be made in advance of the inspection.'],
    },
    {
        title: 'Cancellation Policy:',
        description: ['Cancellation within 24 hours of the inspection will incur a cancellation fee of £30.', 'Cancellation within 4 hours of the inspection will not be eligible for a refund.'],
    },
    {
        title: 'Issuance of Certificate:',
        description: ['The Landlords Gas Safety Certificate (CP12) will only be issued if any additional outstanding costs are settled.'],
    },
    {
        title: 'Waiting Time:',
        description: ['Waiting time charges may apply.'],
    },
    {
        title: 'Parts and Additional Items:',
        description: [
            'Costs for parts required during the boiler service are not included in the initial fee.',
            'Additional items requested that were not originally part of the booking, but have been confirmed by text with the engineer, may incur extra charges.',
        ],
    },
    {
        title: 'Parking Costs:',
        description: ['Parking costs incurred due to the unavailability of allocated or free parking at the time of inspection may be passed on to the customer.'],
    },
    {
        title: 'Extra Repairs:',
        description: [
            'Any extra repairs required during the inspection to pass the Gas Safety Certificate will only be performed with customer consent. Authorization must be indicated via a confirmation text or email. These repairs will be charged at the Heating rate as specified on our website. Customers are responsible for checking the website for cost details and terms and conditions.',
        ],
    },
    {
        title: 'Tenant Responsibility:',
        description: ['It is the responsibility of the landlord to ensure that the tenant is present at the property at the agreed time.'],
    },
    {
        title: 'No Shows:',
        description: [
            'If there is a no',
            'show, the engineer will wait at the property for 30 minutes from the booking time. If no contact is made during this period, the booking will be considered canceled, and no refund will be issued.',
        ],
    },
    {
        title: 'Tenant Cooperation:',
        description: [
            'Tenants must ensure, at the time of inspection, that they are aware of the location of all appliances and that the gas supply to the property is not cut off. Sufficient credit should be available in the meter for the duration of the test.',
        ],
    },
    {
        title: 'Accessibility:',
        description: ['All appliances must be readily accessible. Cupboard doors or boxing will not be removed by the engineer.'],
    },
    {
        title: 'Flue Accessibility:',
        description: ['The entire length of the boiler flue must be accessible, or a compliant inspection hatch must be present.'],
    },
    {
        title: 'Boiler Service:',
        description: [
            "Boiler service appointments should not be scheduled at the time of the inspection if the boiler displays fault codes or is not functioning properly. No refunds will be issued in such cases; it is the customer's responsibility to ensure proper functionality before the Gas Safety Inspection.",
        ],
    },
];

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
                    For your boiler service and repair needs, please do not hesitate to contact us at <span className='text-secondary font-semibold text-sm ml-1'>0734567890</span>. Your comfort and
                    peace of mind are our top priorities.
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

                <div className='flex items-center justify-center gap-8 my-8 font-semibold px-12 max-w-3xl mx-auto'>
                    <div className='w-full'>
                        <div className='rounded-full aspect-square overflow-hidden border-4 border-primary p-1 w-full max-w-[200px] mx-auto relative before:absolute before:inset-0 before:bg-primary/20'>
                            <Image src={Credit} className='w-full h-full object-cover rounded-full' alt='business icon' />
                        </div>
                        <p className='text-gray-500 text-sm sm:text-md text-center mt-6 md:mt-8 px-5 whitespace-nowrap'>Credit/Debit</p>
                    </div>
                    <div className='w-full'>
                        <div className='rounded-full aspect-square overflow-hidden border-4 border-primary p-1 w-full max-w-[200px] mx-auto relative before:absolute before:inset-0 before:bg-primary/20'>
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
