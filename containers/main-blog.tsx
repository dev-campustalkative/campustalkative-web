'use client';

import Image from 'next/image';
import Date from '@/components/date';
import Button from '@/components/button';

const MainBlog = () => {
  return (
    <div className="pt-36 md:py-12 flex gap-6 md:flex-col">
      <div className="w-full">
        <div className="flex flex-col items-start gap-6 md:gap-3">
          <Date text="12th May, 2023" />
          <div className="mmd:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg">
            <Image
              src="/assets/images/--ct-products-1.png"
              alt="campustalkative merch"
              className="w-full h-full"
              height={500}
              width={350}
            />
          </div>
          <div>
            <h2 className="font-sora font-bold text-3xl text-ct-grey-1000 my-6 md:my-3 md:text-2xl">
              Spark AR x Campustalkative
            </h2>
            <p className="text-lg text-ct-grey-600 max-w-[690px] md:text-sm">
              At Campustalkative, we understand the importance of building and
              maintaining a strong community. That&lsquo;s why we are dedicated
              to providing the best resources and opportunities for our members
              to connect, network, and grow together. Whether it&lsquo;s through
              events, online resources, or other initiatives, we are committed
              to fostering a vibrant and supportive community for all.
            </p>
          </div>
          <div>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="md:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg">
          <Image
            src="/assets/images/--ct-products-1.png"
            alt="campustalkative merch"
            className="w-full h-full"
            height={500}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBlog;
