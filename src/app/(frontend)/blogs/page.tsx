import React from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import BlogList from './BlogList'; 
const BlogPage = async () => {
  const payload = await getPayload({ config });
  const { docs: blogs } = await payload.find({ collection: 'blogs' });

  return <BlogList blogs={blogs} />;
};

export default BlogPage;
