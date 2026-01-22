import ProductList from "./productList";

export default function Products() { 
    return(
     <section className="p-4 bg-[#F5F7F9] flex flex-col gap-6">
        <h1 className="font-bold text-[25px] lg:text-[42px] text-center">Featured Products</h1>
        <p className="w-1/6 border-1 border-[#0084D6] mx-auto"></p>
        <ProductList/>
     </section>
    );
  }