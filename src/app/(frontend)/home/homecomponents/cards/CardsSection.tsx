import React from "react";

const CardsSection = ({ data }: { data: any }) => {
  const { title, text, logos } = data || {};

  return (
    <div className="w-full bg-gray-900 py-10">
      <div className="container mx-auto px-4 space-y-12">
        {/* <h2 className="text-3xl text-white font-bold text-center">{title}</h2> */}
        {logos?.map((card: any, index: number) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6 p-6 shadow-md rounded-xl bg-gray-800`}
          >
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
              {card.points?.length > 0 && (
                <ul className="list-disc list-inside text-gray-400">
                  {card.points.map(
                    (
                      point: { item: string },
                      i: React.Key | null | undefined
                    ) => (
                      <li key={i}>{point.item}</li>
                    )
                  )}
                </ul>
              )}
              <p className="text-sm text-blue-400 mt-4">{card.likeText}</p>
            </div>

            <div className="md:w-1/3">
              <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
