'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { IconBrandWhatsapp, IconCircleDashedCheck } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CourseType {
  courseName: string;
  title: string;
  text: string;
  img?: {
    url: string;
  };
  Learn: (string | React.ReactNode)[];
  CourseContent: {
    ContentTitle: string;
    Content: { Content: string }[];
  }[];
  likeText?: string;
}

interface Props {
  courseName: string;
}

export default function CourseDetailClient({ courseName }: Props) {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch(`/api/courses?courseName=${courseName}`);
      const data = await res.json();
      const found = data.docs?.find((doc: CourseType) => doc.courseName === courseName);
      if (found) setCourse(found);
      else notFound();
    };

    fetchCourse();
  }, [courseName]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/fallback-image.jpg';
  };

  if (!course) {
    return (
      <div className="flex space-x-2 justify-center bg-black items-center h-screen">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
      </div>
    );
  }

  return (
    <div className="grid pt-32 grid-cols-1 lg:grid-cols-3 bg-black gap-4 p-4 bg-logo-gradient">
      <div className="lg:col-span-2 p-4 w-fit h-fit">
        <h2 className="text-2xl font-bold mb-4 bg-black text-white">What You’ll Learn</h2>
        <ul className="list-none grid grid-cols-1 text-white md:grid-cols-2 bg-gray-900 opacity-70 rounded-lg p-8 gap-2">
          {course.Learn.map((item: any, index) => (
            <li key={index} className="flex items-center space-x-2">
              <IconCircleDashedCheck width={20} height={20} className="w-8" stroke={2} />
              <span>{typeof item === 'object' ? item.Learn : item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Course Content</h2>
          <div className="space-y-2 text-white p-8 bg-gray-900 opacity-80 rounded-lg">
            {course.CourseContent.map((section, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{section.ContentTitle}</span>
                  <span>{activeIndex === index ? '▲' : '▼'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-900 text-gray-100 space-y-2">
                      {section.Content.map((point, pointIndex) => (
  <li key={pointIndex}>{point?.Content ?? 'No content available'}</li>
))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 p-4 h-fit mt-16 rounded-lg flex flex-col items-center text-center">
        <div className="relative inline-flex overflow-hidden p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {course.img?.url && (
              <Image
                src={course.img.url}
                width={400}
                height={400}
                alt="Course Image"
                className="mb-4 p-4 rounded-2xl"
                onError={handleImageError}
              />
            )}
          </span>
        </div>

        <h2 className="text-xl font-bold mb-2 text-gray-100">{course.title}</h2>
        <p className="text-gray-400 mb-4">{course.text}</p>

        {course.likeText && (
          <Link href={course.likeText} target="_blank">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
              <IconBrandWhatsapp stroke={2} className="w-10 mr-2" />
              Connect to WhatsApp
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
