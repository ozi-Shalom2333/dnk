import Image from "next/image";
import banner from "@/public/banner-04.webp"



export default function AboutPage() {
  return (
   <section className="relative h-[50vh] md:h-[50vh] lg:h-screen pt-17 flex flex-col justify-center p-0 md:pl-15 z-0 overflow-hidden">
     <div className='flex items-center justify-between px-6 py-5 max-w-7xl mx-auto'>
     
    </div>
    <Image
      src={banner}
      alt="Summer fashion collection – woman with sunglasses in sunny weather"
      fill
      priority
      quality={85}
      sizes="100vw"
      placeholder="blur"
      className="absolute inset-0 object-cover"
    />        
   <div className="absolute inset-0 bg-blue-200/30 z-10" />
   <h1 className="text-4xl md:text-[50px] lg:text-[66px] font-bold text-white text-center z-20">About Us</h1>
   </section>
  );
}