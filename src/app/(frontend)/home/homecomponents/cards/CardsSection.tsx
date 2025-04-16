import React from "react";

const CardsSection = ({ data }: { data: any }) => {
  const { logos } = data || {};

  return (
    <main className="pt-16 bg-clip-bg bg-black bg-logo-gradient">
      <section className="container mx-auto px-4 py-12 md:py-24 space-y-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {logos?.map((card: any, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={card.id}
             
              className={` ${isEven ? "w-full md:w-1/2 mb-8 md:mb-0" : " ml-4  w-full md:w-1/2"}`}
            >
              <div
                className={` ${isEven ? " w-full  md:order-2 right-0 space-y-6" : " w-full  md:order-1 left-0 space-y-6"}`}
              >
                <div 
                className={` ${isEven ? "text-2xl text-gray-800 mb-4" : " bg-white rounded-lg shadow-lg p-6"}`}
                >
                  <h3 
                  className={` ${isEven ? "text-4xl md:text-5xl font-bold text-gray-100 mb-4" : " text-2xl text-gray-800 mb-4"}`}
                  >{card.title}</h3>
                  <h2 
                     className={` ${isEven ? "text-xl text-gray-400 mb-6" : " text-2xl font-semibold text-gray-800 mb-4"}`}
                  >
                    {card.description}
                  </h2>
                  {card.points?.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {card.points.map((point: { item: string }, i: React.Key) => (
                        <li key={i}>{point.item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="space-y-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.link/manbm0"
                      className={` ${isEven ? " bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300" : " block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"}`}
                     
                    >
                      {card.likeText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </section>
    </main>
  );
};

export default CardsSection;
