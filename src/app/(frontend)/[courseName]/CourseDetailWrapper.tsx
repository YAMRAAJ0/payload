// src/app/(frontend)/courses/[courseName]/CourseDetailWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

// Dynamically import the actual course detail component
const CourseDetailClient = dynamic(() => import('./CourseDetailClient'), {
  ssr: false,
})

interface Props {
  courseName: string
}

export default function CourseDetailWrapper({ courseName }: Props) {
  return <CourseDetailClient courseName={courseName} />
}
