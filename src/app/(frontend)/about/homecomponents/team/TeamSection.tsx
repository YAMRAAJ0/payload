import React from "react";

const TeamSection = ({ data }: { data: any }) => {
  const { title, description, member } = data || {};

  return (
    <section className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">{description}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {member?.map((person: any) => (
            <div
              key={person.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-sm hover:shadow-xl transition"
            >
              <img
                src={person.img?.url}
                alt={person.img?.alt || person.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-white">
                {person.name}
              </h3>
              <p className="text-blue-400">{person.post}</p>

              {person.Link?.length > 0 && (
                <div className="mt-4 flex justify-center gap-4">
                  {person.Link.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
