import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    courseName: string
  }
}

const CourseDetailPage = async ({ params }: Props) => {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'course',
    where: {
      courseName: {
        equals: params.courseName,
      },
    },
  })

  const course = docs[0]

  if (!course) return notFound()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{course.title}</h1>
      <p className="text-gray-700 mt-2">{course.text}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          {course.Learn.map((item: any, index: number) => (
            <li key={index}>{item.Learn}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Course Content</h2>
        {course.CourseContent.map((section: any, idx: number) => (
          <div key={idx} className="mb-4">
            <h3 className="text-xl font-medium">{section.ContentTitle}</h3>
            <ul className="list-disc list-inside ml-4">
              {section.Content.map((point: any, i: number) => (
                <li key={i}>{point.Content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {course.likeText && (
        <div className="mt-6">
          <a
            href={course.likeText}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </div>
  )
}

export default CourseDetailPage
