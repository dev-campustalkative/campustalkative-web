'use client';

import Image from 'next/image';
import BlogCard from '@/components/blog-card';
import { Card } from '@/components/ui/card';

const MoreBlogs = () => {
  return (
    <div className="pb-36 md:pb-12 relative my-10">
      <div className="absolute w-full mx-auto h-full shadow-2xl z-10 bg-background/80 backdrop-blur-sm p-20 flex items-center justify-center">
        <Card className="p-20 text-2xl font-bold font-sora">Coming Soon</Card>
      </div>

      <div className="py-4">
        <h2 className="text-3xl font-sora font-bold text-ct-grey-1000 md:text-xl max-w-[690px]">
          Our thoughts and observations regarding jobs, hiring{' '}
          <span className="w-max relative">
            <span className="text-3xl font-sora font-bold pb-1 text-ct-grey-1000 w-max md:text-xl">
              trends,video resumes & more!
            </span>
            <Image
              src="/assets/icons/--ct-blogs-curve.svg"
              alt=""
              className="absolute bottom-0 right-1/2 transform translate-x-1/2"
              width={180}
              height={30}
            />
          </span>{' '}
        </h2>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-1 gap-12 py-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default MoreBlogs;
