import { Navbar } from '@/layout/Navbar';
import Plumbing from '@/assets/plumbing-main.jpeg';
import { ImageHeader } from '@/components/ImageHeader';
import { SectionLight } from '@/layout/CustomSection';
import { contactNumber, plumbingServices } from '@/data';

export default function Pricing() {
    return (
        <>
            <Navbar />

            <ImageHeader title='Plumbing' image={Plumbing} />

            <section>
                <p className='font-semibold text-sm md:text-base mb-5 text-center'>In need of dependable plumbing or heating services? Look no further!</p>
                <p className='paragraph'>
                    Our team of highly experienced technicians is ready to provide prompt assistance for a wide range of issues, whether it&apos;s a troublesome leaking pipe or a heating system
                    breakdown. We pride ourselves on our precise diagnostics and our commitment to delivering secure and efficient solutions. At our company, transparency is key, and you can find a
                    clear breakdown of our charges on our website, ensuring complete transparency in our pricing. We also specialize in comprehensive insurance work for central heating system
                    failures, general plumbing emergencies, and related services. Count on us to ensure your property operates at peak performance.
                </p>
                <p className='text-white text-xs my-6 bg-primary p-4 rounded-md text-center'>
                    Rest assured, our services are delivered with safety as a top priority, and all our engineers are Gas Safe Registered. For all your emergency plumbing needs, don&apos;t hesitate to
                    contact us at <span className='text-secondary font-semibold text-sm ml-1'>{contactNumber}</span>
                </p>
            </section>

            <SectionLight>
                <SectionLight.content>
                    <p className='text-primary font-semibold text-sm md:text-base lg:text-lg'>London Safe Gas is your trusted choice for a wide range of services, including but not limited to:</p>
                    <ul className='my-5 grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-y-1 lg:gap-y-2 px-3 gap-x-4'>
                        {plumbingServices.map(service => (
                            <li key={service} className='text-xs md:text-sm font-medium text-gray-600 before:content-["\2022"] before:inline-block before:text-secondary before:text-base before:w-5'>
                                {service}
                            </li>
                        ))}
                    </ul>
                </SectionLight.content>

                <SectionLight.footer>
                    <p className='text-gray-400 text-xs md:text-sm text-center section-width mt-7'>
                        Count on London Safe Gas for all your plumbing and heating needs. We&apos;re here to ensure your comfort and safety.
                    </p>
                </SectionLight.footer>
            </SectionLight>
        </>
    );
}
