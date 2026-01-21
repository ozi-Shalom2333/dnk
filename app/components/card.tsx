import React from "react";

interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  altText?: string; 
}

interface CardProps {
  cards?: CardItem[];
  className?: string;
  overlayOpacity?: number;
  showOverlayOnHover?: boolean;
}


const Card: React.FC<CardProps> = ({
  cards,
  className = "",
  overlayOpacity = 40,
  showOverlayOnHover = true,
}) => {
  const defaultCards: CardItem[] = [
    {
      id: 1,
      title: "20% Off On Tank Tops",
      description: "Discover our latest summer collection with amazing discounts",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg",
      buttonText: "SHOP NOW",
      altText: "Women wearing stylish tank tops",
    },
    {
      id: 2,
      title: "Latest Eyewear For You",
      description: "Explore trendy sunglasses and optical frames for every style",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg",
      buttonText: "SHOP NOW",
      altText: "Man wearing modern sunglasses",
    },
    {
      id: 3,
      title: "Let's Suit Up!",
      description: "Premium suits and formal wear for your special occasions",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg",
      buttonText: "SHOP NOW",
      altText: "Elegant formal footwear collection",
    },
  ];

  const cardsToRender = cards && cards.length > 0 ? cards : defaultCards;

  if (cardsToRender.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No promotional items available at the moment
      </div>
    );
  }

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto p-4 gap-6 md:gap-2.5">
       {
        cardsToRender.map((e)=>(
          <div key={e.id} className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[55vh] p-4 flex flex-col justify-end bg-center bg-cover gap-4" style={{backgroundImage:`url(${e.imageUrl})`}}>
             <h1 className="text-white text-[22px] md:text-[18px] lg:text-[22px] font-bold z-10">{e.title}</h1>
             <p className="text-white text-base md:text-[14px] lg:text-base z-10">{e.description}</p>
             <button className="bg-white  z-10 p-4 md:w-1/2 md:p-2 md:text-sm font-semibold hover:bg-black hover:text-white transition ease-in-out duration-300 border-0 outline-0">
              {e.buttonText}
             </button>
             <div className="absolute inset-0 bg-black/25">

             </div>
          </div>
        ))
       }
    </div>
  );
};

export default Card;