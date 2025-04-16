import React from 'react'
import Image from 'next/image'

const TeamSection = ({ data }: { data: any }) => {
  const { title, description, member } = data || {}

  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {member?.map((person: any) => (
            <div
              key={person.id}
              className="bg-gray-900 p-6 w-full max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-4">
                <Image
                  src={person.img?.url}
                  alt={person.img?.alt || person.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-green-400 shadow-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-white">{person.name}</h2>
              <p className="text-sm text-gray-400 mb-3">{person.post}</p>
              {person.Link?.length > 0 && (
                <div className="flex space-x-4 mt-2 justify-center">
                  {person.Link.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
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
  )
}

export default TeamSection
