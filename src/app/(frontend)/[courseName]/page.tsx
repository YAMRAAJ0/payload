import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import CourseDetailClient from './CourseDetailClient';

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
        equals: courseName,
      },
    },
    draft,
    overrideAccess: true,
  });

  const course = courseResult.docs?.[0];

  if (!course) return notFound();


  return (
    <article>
      <CourseDetailClient courseName={courseName} />
    </article>
  );
}
