import CourseDetailWrapper from './CourseDetailWrapper'

interface Props {
  params: {
    courseName: string
  }
}

export default async function Page({ params }: Props) {
  const { courseName } = await Promise.resolve(params)

  return <CourseDetailWrapper courseName={courseName} />
}
