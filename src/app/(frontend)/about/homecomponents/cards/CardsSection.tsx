import React from "react";
const CardsSection = ({ data }: { data: any }) => {
  const { logos } = data || {};

  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {logos?.map((card: any, index: number) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl transition duration-300`}
          >
            <div className="md:w-2/3 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {card.description}
              </p>

              {card.points?.length > 0 && (
                <ul className="list-disc pl-5 text-gray-400 space-y-1">
                  {card.points.map(
                    (
                      point: { item: string },
                      i: React.Key | null | undefined
                    ) => (
                      <li key={i} className="text-sm md:text-base">
                        {point.item}
                      </li>
                    )
                  )}
                </ul>
              )}

              {card.likeText && (
                <p className="text-sm text-blue-400 font-medium mt-4">
                  {card.likeText}
                </p>
              )}
            </div>

            <div className="md:w-1/3">
              <div className="w-full h-60 md:h-64 lg:h-72 rounded-xl overflow-hidden">
                <img
                  src={card?.img?.url || "/placeholder.jpg"}
                  alt={card?.img?.alt || "Card Image"}
                  className="w-full h-full object-cover object-center rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
