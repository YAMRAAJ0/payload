import React from "react";
import Image from "next/image";

const CardsSection = ({ data }: { data: any }) => {
  const { logos } = data || {};

  return (
    <section className="w-full">
      {logos?.map((card: any, index: number) => (
        <div
          key={card.id}
          className="sticky top-0 min-h-screen flex items-center justify-center bg-black text-white p-6"
        >
          <div
            className={`w-full max-w-7xl flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative h-60 sm:h-80 md:h-96 w-full max-w-md">
                <Image
                  src={card?.img?.url || "/placeholder.jpg"}
                  alt={card?.img?.alt || "Card Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                {card.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-justify">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardsSection;
