export default function Hero() {
    return (
      <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed pt-17 flex flex-col justify-center p-0 md:pl-15 z-1" style={{backgroundImage:`url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')`}}>
        <div>
            <h1 className="w-full text-3xl md:text-[66px] md:w-1/2 text-white font-bold">
             Raining Offers For Hot Summer!
            </h1>
            <p className="text-white text-2xl font-bold my-6">
                25% Off On All Products
            </p>
            <div className="flex gap-3 ">
                <button className="px-5 py-3 bg-white text-black text-[14px] font-bold">
                    SHOP NOW
                </button>
                <button className="px-5 py-3 text-white text-[14px] border border-white font-bold">
                    FIND MORE
                </button>
            </div>
        </div>
        <div className="absolute inset-0 bg-black/25 -z-1">

       </div>
      </section>
    );
  }