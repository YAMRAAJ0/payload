import React from "react";

const HeroSection = ({ data }: { data: any }) => {
  const { heroTitle, heroetext, heroImage } = data || {};
  const imageUrl = heroImage?.url || "";

  return (
    <section
      className="w-full md:pt-24 bg-gray-900 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
      }}
    >
      <div className="bg-black bg-opacity-70 w-full h-full">
        <div className="container mx-auto px-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {heroTitle}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {heroetext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
