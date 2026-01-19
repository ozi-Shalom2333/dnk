import React from "react";


interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}


interface CardProps {
  cardData?: CardItem[];
}

const Card: React.FC<CardProps> = ({ cardData }) => {
 
  const defaultData: CardItem[] = [
    {
      id: 1,
      title: "20% Off On Tank Tops",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Latest Eyewear For You",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      title: "Let's Lorem Suit Up!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      imageUrl:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg",
      buttonText: "Shop Now",
    },
    
  ];

  const dataToRender = cardData ?? defaultData;

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 lg:p-6 max-w-7xl mx-auto">
      {dataToRender.map((card) => (
        <div
          key={card.id}
          className="relative flex flex-col gap-4 justify-end h-[40vh] md:h-[45vh] lg:h-[60vh] bg-cover bg-center p-4 mx-auto"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
        <div className="absolute inset-0 bg-black opacity-40  "></div>
          <h1 className="text-white text-[20px] md:text-xl lg:text-[26px] font-bold z-10">{card.title}</h1>
          <p className="text-white text-sm md:text-[14px] lg:text-base z-10">{card.description}</p>
          <button className="bg-white md:w-1/2 text-black px-4 py-2 rounded hover:bg-black hover:text-white font-bold z-10">
            {card.buttonText}
          </button>
        </div>
      ))}
       
    </div>
  );
};

export default Card;
