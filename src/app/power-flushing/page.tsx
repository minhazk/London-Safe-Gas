import { ImageHeader } from '@/components/ImageHeader';
import { Navbar } from '@/layout/Navbar';
import PowerFlushing from '@/assets/power-flushing-main.jpeg';
import { SectionBlue, SectionLight } from '@/layout/CustomSection';
import { ContactForm } from '@/components/ContactForm';
import { powerFlushPrices, powerFlushingTerms } from '@/data';

export default function page() {
    return (
        <>
            <Navbar />

            <ImageHeader title='Power Flushing' image={PowerFlushing} />

            <section className='flex flex-col gap-4'>
                <p className='paragraph'>
                    Receive a complimentary quote for the MagnaCleanse system to flush your central heating system. When you hear disruptive banging and kettling sounds, experience lukewarm water,
                    observe leaks, notice a drop in boiler pressure, or find yourself frequently adjusting the thermostat, these might indicate the presence of stubborn sludge build up in your
                    radiators.
                </p>

                <p className=' text-primary font-bold text-sm md:text-base'>Why you should power flush you systems</p>

                <p className='paragraph'>
                    Sludge accumulates due to corrosion within radiators, pipes, and soldered joints. This not only impacts the heating system&#39;s performance but also hampers energy efficiency,
                    hindering heat transfer, and causing blockages in radiators and pipes. As a result, water flow is restricted, leading to increased energy bills.
                </p>
                <p className='paragraph'>
                    To effectively address this issue, flushing the entire system with chemicals and employing specialized filters ensures the removal of even stubborn debris that may have built up
                    over time. While filters can capture floating debris within the system, a heavily sludged heating system might still harbor corrosion in the radiator and pipework, which filters
                    alone cannot remove. To dislodge firmly settled magnetite and rust, it&#39;s es sential to introduce a cleaner into the system, allowing it to circulate and dislodge sludge w ithin
                    the pipework and radiators.
                </p>
            </section>

            <SectionBlue>
                <SectionBlue.content>
                    <h2 className='text-secondary md:text-lg font-semibold'>Power flush/prices ex VAT</h2>

                    <div className='font-semibold text-sm flex items-center gap-4 my-5'>
                        <p className='text-white'>Chemical flush {powerFlushPrices[0][0]} radiators:</p>
                        <p className='bg-white text-primary p-1 rounded-md'>£{powerFlushPrices[0][1]}</p>
                    </div>

                    <p className='text-white'>Chemical flush radiators from:</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-16 place-items-end mt-7 w-max mx-auto'>
                        {powerFlushPrices.slice(1).map(([label, price]) => (
                            <div key={label} className='font-semibold text-sm flex items-center gap-4'>
                                <p className='text-white whitespace-nowrap'>{label}</p>
                                <p className='bg-white text-primary p-1 rounded-md'>£{price}</p>
                            </div>
                        ))}
                    </div>
                </SectionBlue.content>
            </SectionBlue>

            <SectionLight>
                <SectionLight.content>
                    <h3 className='md:text-md font-semibold'>Terms and Conditions</h3>

                    <ul className='list-disc px-2 mt-5'>
                        {powerFlushingTerms.map(term => (
                            <li key={term} className='text-xs md:text-sm text-gray-500 font-medium mb-1 last:mb-0'>
                                {term}
                            </li>
                        ))}
                    </ul>
                </SectionLight.content>
            </SectionLight>

            <section className='flex flex-col gap-4 mb-10 mt-8'>
                <p className='paragraph'>
                    The potential long-term savings resulting from a comprehensive system flush can outweigh the initial costs. Such a flush significantly reduces the risk of boiler breakdowns.
                    Additionally, maintaining clean water in the system enhances its efficiency, enabling radiators to generate up to 47% more heat without increased energy consumption. This results
                    in cost savings on your energy bills.
                </p>

                <p className='paragraph'>
                    Merely replacing the boiler won&#39;t address the issue of deeply entrenched sludge. If left unaddressed, this sludge will persist in the pipework and radiators, potentially
                    causing damage to your new boiler from day one. In fact, it&#39;s noteworthy that 60% of new boiler breakdowns within the first year are attributed to sludge.
                </p>
            </section>

            <ContactForm title='BOOK NOW' />
        </>
    );
}
