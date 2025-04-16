import React from 'react'
import Image from 'next/image'
const CustomerClient = ({ data }: { data: any }) => {
  const { title, text, logos } = data || {}

  return (
    <>
      <div className="relative  text-white   py-20">
        <div className="container mx-auto px-6  border-y pt-5 border-gray-400/30 text-center">
          <h1 className="text-4xl font-bold mb-6"> {title || 'Our Customers'}</h1>
          <p className="text-lg font-light mb-12"> {text || ''} </p>

          <div className="flex justify-center items-center space-x-6  py-6">
            {logos?.map((item: any, index: number) => {
              const logo = item.logo
              return (
                <div key={logo.id} className="relative w-64 h-20 md:h-36">
                  <Image
                    key={index}
                    src={logo?.url}
                    alt={logo?.alt || 'Company Logo'}
                    layout="fill"
                    objectFit="contain"
                    className="hover:scale-110 transition-transform px-4 bg-white duration-300"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerClient
