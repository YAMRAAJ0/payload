import React from "react";

const HeroSection = ({ data }: {data:any}) => {
  const { heroTitle, heroetext, heroImage } = data || {};
  const imageUrl = heroImage?.url || "";

  return (
    <section className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {heroTitle}
          </h1>
          <p className="text-lg text-gray-300">
            {heroetext}
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt={heroImage?.alt || "Hero Image"}
            className="rounded-lg shadow-lg w-full max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
