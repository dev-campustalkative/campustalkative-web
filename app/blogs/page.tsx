'use client';

import Container from '@/components/container';
import Divider from '@/components/divider';
import BlogHeader from '@/containers/blog-header';
import MainBlog from '@/containers/main-blog';
import MoreBlogs from '@/containers/more-blogs';

const Blog = () => {
  return (
    <Container>
      <BlogHeader />
      <MainBlog />
      <Divider />
      <MoreBlogs />
    </Container>
  );
};

export default Blog;
