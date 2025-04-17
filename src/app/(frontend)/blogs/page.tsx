// page.tsx
import React from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import BlogList from './BlogList'; 
import { Media } from '@/payload-types';

type Blog = {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishedDate: string;
  createdAt: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
};

const BlogPage = async () => {
  try {
    const payload = await getPayload({ config });
    const { docs: blogs } = await payload.find({ collection: 'blogs' });

    const formattedBlogs: Blog[] = blogs.map(blog => {
      let thumbnail;
      if (typeof blog.thumbnail === 'object' && blog.thumbnail?.url) {
        thumbnail = {
          url: blog.thumbnail.url,
          alt: blog.thumbnail.alt || '',
        };
      }

      return {
        id: blog.id,
        title: blog.title ?? 'Untitled',
        slug: blog.slug ?? '',
        author: blog.author ?? 'Unknown',
        publishedDate: blog.publishedDate ?? '',
        createdAt: blog.createdAt,
        thumbnail,
      };
    });

    return <BlogList blogs={formattedBlogs} />;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return <div>Error loading blogs.</div>;
  }
};

export default BlogPage;
