import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

type CoursePageProps = { 
  params: Promise<{ courseName: string }>; 
};

type LearnItem = {
  Learn: string;
};

type CourseContentItem = {
  ContentTitle: string;
  Content?: { Content: string }[];
};

type CourseType = {
  title: string;
  text: string;
  Learn?: LearnItem[] | null;
  CourseContent?: CourseContentItem[] | null;
};


export default async function CoursePage({ params }: CoursePageProps) { 
  const resolvedParams = await params; 
  const courseName = resolvedParams.courseName;

  const draft = (await draftMode()).isEnabled;

  const payload = await getPayload({ config: configPromise });

  const courseResult = await payload.find({
    collection: 'courses',
    where: {
      courseName: {
        equals: (await params).courseName,
      },
    },
    draft,
    overrideAccess: true,
  });

  const course = courseResult.docs?.[0];

  if (!course) return notFound();

  return (
    <article className="pt-16 pb-24">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-4">{course.text}</p>

      {(course.Learn ?? []).length > 0 && (
  <section className="mt-8">
   <h2 className="text-xl font-semibold">What You&apos;ll Learn</h2>
    <ul className="list-disc ml-6 mt-2">
      {(course.Learn ?? []).map((item, i) => (
        <li key={i}>{item.Learn}</li>
      ))}
    </ul>
  </section>
)}

{(course.CourseContent ?? []).length > 0 && (
  <section className="mt-8">
    <h2 className="text-xl font-semibold">Course Content</h2>
    {(course.CourseContent ?? []).map((section, i) => (
      <div key={i} className="mt-4">
        <h3 className="font-semibold">{section.ContentTitle}</h3>
        <ul className="list-disc ml-6">
          {(section.Content ?? []).map((item, j) => (
            <li key={j}>{item.Content}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)}




    </article>
  );
}







