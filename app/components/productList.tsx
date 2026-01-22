import shoe1 from '@/public/sports-shoe1.webp'
import blueShoe from '@/public/sports-shoe3.webp'
import menJeans from '@/public/product-m-jeans1.webp'
import denimJeans from '@/public/product-w-jeans2.webp'
import grayJeans from '@/public/product-w-jeans4.webp'
import denimShorts from '@/public/product-w-jeans1.webp'
import anchorBracelet from '@/public/product-accessory2.webp'
import bohoBangle from '@/public/product-accessory1.webp'
import brownPurse from '@/public/product-bag1.webp'
import redBag from '@/public/product-bag3.webp'
import Image, { StaticImageData }  from 'next/image';
import { FaStar } from 'react-icons/fa';


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: StaticImageData;
}

export default function ProductList() {
  const productsData: Product[] = [
    { id: 1, name: "DNK Yellow Shoes", category: "Men", price: 120, image: shoe1 },
    { id: 2, name: "DNK Blue Shoes", category: "Men", price: 200, image: blueShoe },
    { id: 3, name: "Dark Brown Jeans", category: "Men", price: 150, image: menJeans },
    { id: 4, name: "Blue Denim Jeans", category: "Women", price: 150, image: denimJeans },
    { id: 5, name: "Basic Gray Jeans", category: "Women", price: 150, image: grayJeans },
    { id: 6, name: "Blue Denim Shorts", category: "Women", price: 130, image: denimShorts },
    { id: 7, name: "Anchor Bracelet", category: "Accessories", price: 150, image: anchorBracelet },
    { id: 8, name: "Boho Bangle Bracelet", category: "Accessories", price: 150, image: bohoBangle },
    { id: 9, name: "Light Brown Purse", category: "Accessories", price: 150, image: brownPurse },
    { id: 10, name: "Bright Red Bag", category: "Accessories", price: 100, image: redBag },
  ];

    return(
       <section className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {productsData.map((product) => (
           <div key={product.id} className='flex flex-col p-4 gap-2 rounded-md bg-white hover:shadow-lg transition-shadow duration-300'>
              <div  className='min-h-9'>
                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                </div>
                <h2 className='font-bold'>{product.name}</h2>
                <p className='text-[#919293]'>{product.category}</p>
                <p className='font-semibold'>${product.price.toFixed(2)}</p>
                <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                    ))}
                </div>
              </div>
            </div>
            ))}
         
       </section>
    );
  }


