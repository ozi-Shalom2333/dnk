import Image from "next/image";
import globe from '@/public/globe-free-img.webp'
import quality from '@/public/quality-free-img.webp'
import tag from '@/public/tag-free-img.webp'
import lock from '@/public/lock-free-img.webp'

export default function Value() {
    
    const value = [
        {
            image: globe,
            title: "Worldwide Shipping",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: quality,
            title: "Best Quality",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: tag,
            title: "Best Offers",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
         {
            image: lock,
            title: "Secure Payments",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ]


    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-6 lg:p-8  gap-6 md:gap-8 mt-4 md:mt-6 lg:mt-8">
            {value.map((item, index) => (
                <div key={index} className="text-center flex flex-col gap-4 md:gap-6 items-center justify-center">
                    <Image src={item.image} alt="value" className="w-15"/>
                    <h2 className="font-bold text-[16.14px]">{item.title}</h2>
                    <p className="text-[14.4px]">{item.description}</p>
                </div>
            ))}
        </section>
    );
}