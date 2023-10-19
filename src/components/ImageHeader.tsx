import Image, { StaticImageData } from 'next/image';

type ImageHeaderProps = {
    image: StaticImageData;
    title: string;
};

export function ImageHeader({ image, title }: ImageHeaderProps) {
    return (
        <div className='section-width relative py-10 md:py-12 xl:py-16 mt-5 lg:mt-2 mb-6 rounded-lg overflow-hidden bg-black/60'>
            <div className='absolute inset-0 -z-10'>
                <Image src={image} alt='Plumber repairing pipes' className='h-full w-full object-cover' />
            </div>
            <h1 className='text-2xl md:text-4xl font-semibold text-white text-center'>{title}</h1>
        </div>
    );
}
