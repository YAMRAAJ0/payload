import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import Footer from './collections/footer'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import NavbarItem from './collections/navbarItem'
import Cards from './collections/cards'
import Home from './collections/Home'
import Gridcards from './collections/gridcards'
import Customer from './collections/customer'
import Team from './collections/team'
import List from './collections/list'
import Blogs from './collections/blogs'
import { s3Storage } from '@payloadcms/storage-s3'
import { courses } from './collections/courses'
import OfficeExpenses from './collections/officeexpenses'
import OfficeRequirements from './collections/officerequirements'
const {
  S3_BUCKET,
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
  DATABASE_URI,
  S3_ENDPONT,
  PAYLOAD_SECRET,
} = process.env

if (!S3_BUCKET || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY || !S3_ENDPONT) {
  throw new Error('Missing required environment variables for S3 configuration')
}

if (!DATABASE_URI) {
  throw new Error('Missing DATABASE_URI environment variable')
}

if (!PAYLOAD_SECRET) {
  throw new Error('Missing PAYLOAD_SECRET environment variable')
}

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    courses,
    Users,
    Media,
    Footer,
    NavbarItem,
    Home,
    Cards,
    Gridcards,
    List,
    Customer,
    Team,
    Blogs,
    OfficeExpenses,
    OfficeRequirements,
  ],
  editor: lexicalEditor(),
  secret: PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: DATABASE_URI,
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: 'auto',
        endpoint: process.env.S3_ENDPONT || '',
      },
    }),
  ],
})
