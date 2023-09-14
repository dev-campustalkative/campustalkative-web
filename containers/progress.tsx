'use client';

import Image from 'next/image';
import Metric from '@/components/metric';

const Progress = () => {
  return (
    <div className="py-20 flex sm:flex-col-reverse sm:py-6">
      <div className="">
        <div className="max-w-[742px] mb-8 sm:mb-4">
          <h1 className="text-base text-ct-primary-800">OUR PROGRESS</h1>
          <p className=" text-4xl font-bold text-ct-grey-1000 sm:text-xl">
            <span className="text-ct-primary-500">We are here</span> and our
            numbers within the community is growing
          </p>
        </div>
        <div className="flex items-end gap-8 sm:flex-col-reverse sm:gap-4 sm:items-start">
          <div className="sm:w-full">
            <div className="flex gap-6 flex-row my-6">
              <div className="flex items-center justify-center flex-1 bg-ct-secondary-1100 rounded-full ">
                <span className="max-w-[50%] mx-auto text-center text-2xl font-bold  text-ct-primary-100 sm:text-sm">
                  Resources
                </span>
              </div>
              <div className="rounded-full sm:w-[103px]">
                <Image
                  src="/assets/images/--ct-woods.png"
                  alt="woods"
                  height={132}
                  width={132}
                />
              </div>
            </div>
            <div className="flex gap-6 flex-row-reverse my-6">
              <div className="flex items-center justify-center flex-1 bg-ct-secondary-1100 rounded-full ">
                <span className="max-w-[50%] mx-auto text-center text-2xl font-bold  text-ct-primary-100 sm:text-sm sm:max-w-[118px]">
                  EVENTS/ OPPORTUNITIES
                </span>
              </div>
              <div className="rounded-full sm:w-[103px]">
                <Image
                  src="/assets/images/--ct-crowd.png"
                  alt="woods"
                  className="sm:w-[103px]"
                  height={132}
                  width={132}
                />
              </div>
            </div>
          </div>
          <Metric num={4678}>Members and Counting</Metric>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/--ct-earth.png"
          alt="earth"
          className=" float-right mt-4"
          height={416}
          width={344}
        />
      </div>
    </div>
  );
};

export default Progress;
