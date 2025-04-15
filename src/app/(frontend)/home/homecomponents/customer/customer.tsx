import React from "react";

const CustomerClient = ({ data }: { data: any }) => {
  const { title, text, logos } = data || {};

  return (
    <section className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          {title || "Our Customers"}
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {text || ""}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 bg-white py-4 md:grid-cols-4 gap-8 place-items-center">
          {logos?.map((item: any, index: number) => {
            const logo = item.logo;
            return (
              <img
                key={index}
                src={logo?.url}
                alt={logo?.alt || "Company Logo"}
                className="max-h-[80px] object-contain"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerClient;
