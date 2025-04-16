import React from 'react'

const GridCardsSection = ({ data }: { data: any }) => {
  const { title, text, cards } = data

  return (
    <section className="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl"> {title}</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {text}
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
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
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border bg-black hover:shadow hover:shadow-teal-200 p-4"
              >
                <div className="flex flex-col rounded-md p-4">
                  <h3 className="font-bold text-white">{card.cardTitle}</h3>
                  <p className="text-sm text-gray-400 mt-2">{card.cardDescription}</p>

                  {card.listItems?.length > 0 && (
                    <ul>
                      {card.listItems.map(
                        (
                          item: {
                            liTitle:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  unknown,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | React.ReactPortal
                                  | React.ReactElement<
                                      unknown,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | Iterable<React.ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                            liText:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  unknown,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | React.ReactPortal
                                  | React.ReactElement<
                                      unknown,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | Iterable<React.ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          },
                          idx: React.Key | null | undefined,
                        ) => (
                          <p key={idx} className="text-xs text-gray-500 mt-2">
                            {' '}
                            <strong> {item.liTitle}:</strong> {item.liText}
                          </p>
                        ),
                      )}
                    </ul>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default GridCardsSection
