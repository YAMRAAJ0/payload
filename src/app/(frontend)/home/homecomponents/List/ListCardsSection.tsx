import React from 'react'

const GridCardsSection = ({ data }: { data: any }) => {
  const { title, text, cards } = data

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 pb-8 justify-center items-center px-4 sm:px-8 ">
          <h1 className="text-4xl text-green-500 mb-4">{title}</h1>
          <p className="text-xl md:text-xl text-center text-gray-400 mb-6">{text}</p>

          <div className="grid gap-8 grid-cols-1">
            {cards?.map(
              (
                card: {
                  cardTitle:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                  cardDescription:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                  listItems: any[]
                },
                index: React.Key | null | undefined,
              ) => (

                 <div key={index}  className="flex flex-col md:flex-row bg-gray-900 items-center py-4 px-4 md:px-10 lg:px-20 text-sm border-t-2 rounded-b shadow-sm border-green-500 hover:bg-gray-800 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 md:w-20 text-green-500 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3 text-center md:text-left mt-3 md:mt-0">
                  <div className="text-2xl md:text-3xl text-gray-50">{card.cardTitle}</div>
                  <div className="text-lg md:text-xl text-gray-300 mt-1">
                    {card.cardDescription}
                  </div>

                  {card.listItems?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {card.listItems.map((item, idx) => (
                        <li key={idx}>
                          <span className="font-semibold text-blue-400">{item.liTitle}</span>
                          <span className="text-gray-300 ml-2">{item.liText}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridCardsSection
