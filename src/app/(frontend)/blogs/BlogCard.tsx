import React from 'react';

interface BlogCardProps {
  title: string;
  slug: string;
  author: string;
  publishedDate: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  author,
  publishedDate,
  thumbnail,
}) => {
  return (
    <a href={`/blog/${slug}`} className="block rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300">
      {thumbnail && (
        <img
          src={thumbnail.url}
          alt={thumbnail.alt || title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">By {author} • {new Date(publishedDate).toDateString()}</p>
      </div>
    </a>
  );
};

export default BlogCard;
