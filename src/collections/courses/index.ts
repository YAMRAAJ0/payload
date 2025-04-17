import type { CollectionConfig } from 'payload';

export const courses: CollectionConfig = {
  slug: 'courses',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'courseName',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'likeText',
      type: 'text',
      label: 'WhatsApp Link URL',
    },
    {
      name: 'Learn',
      type: 'array',
      label: 'What You’ll Learn',
      fields: [
        {
          name: 'Learn',
          type: 'text',
        },
      ],
    },
    {
      name: 'CourseContent',
      type: 'array',
      label: 'Course Content',
      fields: [
        {
          name: 'ContentTitle',
          type: 'text',
        },
        {
          name: 'Content',
          type: 'array',
          label: 'Content',
          fields: [
            {
              name: 'Content',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
