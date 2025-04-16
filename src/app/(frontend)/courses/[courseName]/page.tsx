// src/app/(frontend)/courses/[courseName]/page.tsx

import CourseDetailWrapper from './CourseDetailWrapper'

interface PageProps {
  params: {
    courseName: string
  }
}

export default function CourseDetailPage({ params }: PageProps) {
  return <CourseDetailWrapper courseName={params.courseName} />
}
