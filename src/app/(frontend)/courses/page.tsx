import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

const CoursesPage = async () => {
  const payload = await getPayload({ config })
  const { docs: courses } = await payload.find({
    collection: 'course',
  })

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course: any) => (
          <Link
            key={course.id}
            href={`/courses/${course.courseName}`}
            className="block bg-white p-4 rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-500 mt-2">{course.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
