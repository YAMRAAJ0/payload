'use client';
import React from 'react';
import BlogCard from './BlogCard';

interface Blog {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishedDate: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="py-24 bg-black ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              author={blog.author}
              publishedDate={blog.publishedDate}
              thumbnail={blog.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
