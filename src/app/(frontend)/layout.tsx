import React from 'react'
import './globals.css'
import Footer from './footer/Footer'
import NavbarClient from './navabar/Navbar'
import config from '@payload-config'
import { getPayload } from 'payload'

export const metadata = {
  description: '',
  title: 'DevopsFarm',
}

const payload = await getPayload({ config })

const footerResult = await payload.find({ collection: 'footer1' })
const navResult = await payload.find({ collection: 'navbar' })

const sortedNavItems = navResult?.docs?.sort((a, b) => a.order - b.order) || []

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <NavbarClient navItems={sortedNavItems} />
        <main>{children}</main>
        <Footer footerItems={footerResult.docs} />
      </body>
    </html>
  )
}
