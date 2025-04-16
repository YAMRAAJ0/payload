'use client'

import dynamic from 'next/dynamic'

// Dynamically import your client component with ssr: false
const CourseDetailClient = dynamic(() => import('./CourseDetailClient'), {
  ssr: false,
})

export default function CourseDetailWrapper({ courseName }: { courseName: string }) {
  return <CourseDetailClient courseName={courseName} />
}
