import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import HomeClient from './home'
import Cards from './homecomponents/cards/CardsServer'
import GridCards from './homecomponents/GridCards/GridCardsServer'
import ListCards from './homecomponents/List/ListCardsServer'
import Customer from './homecomponents/customer/page'
import Team from './homecomponents/team/TeamServer'
const HomeServer = async () => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'home' })

  const heroData = docs[1]

  return (
    <>
      {/* <HomeClient data={heroData} /> */}
      <Cards />
      
      {/* <GridCards />
      <ListCards />
      <Customer /> */}
      <Team/>
    </>
  )
}

export default HomeServer
