import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import HomeClient from './home'
import Cards from './homecomponents/cards/CardsServer'
import GridCards from './homecomponents/GridCards/GridCardsServer'
import ListCards from './homecomponents/List/ListCardsServer'
import Customer from './homecomponents/customer/page'
const HomeServer = async () => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'home' })

  const heroData = docs[0]

  return (
    <>
      <HomeClient data={heroData} />
      <Cards />
      <ListCards />
      <GridCards />    
      <Customer />
    </>
  )
}

export default HomeServer
