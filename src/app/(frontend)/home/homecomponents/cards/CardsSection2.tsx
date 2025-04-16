import React from "react";

const CardsSection = ({ data }: { data: any }) => {
  const { logos } = data || {};

  return (
    <main className="pt-16 bg-black">
      <section className="w-full mx-auto py-10 text-white space-y-16">
        {logos?.map((card: any, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={card.id}
              className={`xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mt-4 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-[50%] w-full">
                <img
                  className="w-full h-auto rounded-md"
                  src={card?.img?.url || "/placeholder.jpg"}
                  alt={card?.img?.alt || "Card Image"}
                />
              </div>

              <div className="lg:w-[50%] w-full text-gray-400 p-4 rounded-md">
                <h2 className="text-3xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="text-md mt-4">{card.description}</p>

                {card.points?.length > 0 && (
                  <ul className="list-disc list-inside mt-4 text-gray-300">
                    {card.points.map(
                      (point: { item: string }, i: React.Key) => (
                        <li key={i}>{point.item}</li>
                      )
                    )}
                  </ul>
                )}

                {card.likeText && (
                  <div className="mt-6">
                    <a
                      href="https://wa.link/manbm0"
                      target="_blank"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {card.likeText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CardsSection;
