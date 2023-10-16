import Business from '@/assets/business.jpg';
import HandShake from '@/assets/handshake.jpg';
import LightBulb from '@/assets/lightbulb.jpg';
import Cash from '@/assets/cash.jpg';
import Credit from '@/assets/card-payment.jpg';
import Bank from '@/assets/bank-transfer.jpg';
import { CalendarCheck, BadgePoundSterling, TimerReset, HeartHandshake } from 'lucide-react';
import { RxInstagramLogo } from 'react-icons/rx';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';

// company info

export const contactNumber = '020 1234 5678';
export const address = {
    road: '123 Business Road',
    region: 'Surrey PST CDE',
};

// social links
export const socialLinks = [
    {
        name: 'Instagram',
        Icon: RxInstagramLogo,
        link: '/',
    },
    {
        name: 'Twitter',
        Icon: BiLogoTwitter,
        link: '/',
    },
    {
        name: 'Facebook',
        Icon: BiLogoFacebook,
        link: '/',
    },
];

/// home page
export const sellingPointCards = [
    {
        title: '24/7 Availability',
        icon: CalendarCheck,
        description: 'Our call centre is always open to assist you with any property save',
    },
    {
        title: 'Affordable Pricing',
        icon: BadgePoundSterling,
        description: 'Our call centre is always open to assist you with any property',
    },
    {
        title: '24h Response Time',
        icon: TimerReset,
        description: 'Our call centre is always open to assist you with any property',
    },
    {
        title: 'Efficient Solutions',
        icon: HeartHandshake,
        description: 'Count on us for quick and efficient solutions to your property needs.',
    },
];

export const coreValuesCards = [
    {
        image: Business,
        description: 'Our commitment to delivering has earned us trust',
    },
    {
        image: HandShake,
        description: 'Our skilled team ensures prompt assistance',
    },
    {
        image: LightBulb,
        description: 'We offer reliable solutions for any issue',
    },
];

/// plumbing

export const plumbingServices = [
    'Fixing dripping taps',
    'Clearing blockages in traps and waste pipes',
    'Resolving toilet blockages',
    'Installing showers',
    'Installing pumps',
    'Installing baths',
    'Addressing leaking showers',
    'Addressing slow-draining sinks',
    'Eliminating kitchen sink odors',
    'Repairing toilet cistern leaks',
    'Fixing faulty electric showers',
    'Repairing leaks in pipework',
    'Clearing blockages in rainwater gutters and downpipes',
    'Bathroom and kitchen installations',
    'Rerouting pipework',
    'Thawing frozen pipes',
    'Addressing sewage odors',
    'Adjusting water pressure (low or high)',
    'Quieting noisy or banging pipework',
    'Appliance installation and removal',
    'Installing extractor fans and hoods',
    'Testing and commissioning services',
    'Controls and wiring adjustments',
    'Power flushing',
    'Central heating system installation and repairs',
];

/// heating

export const boilerServiceProcess = [
    'Thoroughly inspecting the boiler and its controls.',
    'Identifying and addressing any potential leaks or corrosion issues.',
    'Carefully examining the primary components of the boiler.',
    'Conducting essential gas pressure and flue tests for safety.',
    'Performing necessary cleaning of components to ensure optimal performance.',
];

export const heatingServices = [
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

export const gasCertificatePricing = [
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

export const gasCertificateTerms = [
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

/// power flushing

export const powerFlushPrices = [
    ['up to 6', 290],
    ['7 - 8', 350],
    ['9 - 10', 410],
    ['11 - 12', 470],
    ['13 - 14', 530],
    ['14 - 16', 590],
    ['17 - 18', 650],
    ['19 - 20', 700],
];

export const powerFlushingTerms = [
    'Each individual cylinder is considered equivalent to a single radiator.',
    'Every flow and return valve associated with the underfloor heating system will be counted as one radiator',
    'Any valves that require replacement will be included in the overall cost.',
    'The heating system and isolation valves must be operational.',
    'All radiators, radiator valves, and the boiler must be free from any obstructions.',
];

/// pricing page

export const pricing = [
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

export const paymentMethods = [
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

export const pricingTerms = [
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
