import React from "react";

const HeroSection = ({ data }: { data: any }) => {
  const { heroTitle, heroetext, heroImage } = data || {};
  const imageUrl = heroImage?.url || "";

  return (
    <section
      className="w-full md:pt-24 bg-gray-900 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full">
        <div className="container mx-auto px-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight transition-all duration-300">
            {heroTitle}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            {heroetext}
          </p>
          <a
            href="#"
            className="text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-full text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
