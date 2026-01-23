import Image from 'next/image';
import banner from '@/public/banner-03.webp'


export default function HeroSecond() { 
    return(
     <section className="mt-20 p-4 md:p-6 lg:p-8">
       <div className="relative h-[80vh] md:h-[60vh] lg:h-[80vh]  pt-20 flex flex-col justify-center p-0 md:pl-15 z-0 overflow-hidden">
            <Image
              src={banner}
              alt="Summer fashion collection – woman with sunglasses in sunny weather"
              fill
              priority
              quality={85}
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35 z-10" />

            {/* Desktop Content */}
            <div className="hidden z-20 w-full md:w-3/6 md:flex md:flex-col justify-center gap-6">
                <h2 className='text-white text-[18px] lg:text-[24px] font-bold'>Limited Time Offer</h2>
                <h1 className='text-white text-[25px] lg:text-[45px] font-bold'>Special Edition</h1>
                <p className='text-white text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <h3 className='text-white text-[18px] lg:text-[20px]'>Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
                <button className='text-[12px] lg:text-[18px] font-bold bg-white w-fit px-4 py-2'>
                    SHOP NOW 
                </button>
            </div>   
       </div>
    </section>
    );
 }