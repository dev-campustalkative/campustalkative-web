'use client';

import Image from 'next/image';
import Button from '@/components/button';

const Community = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex justify-between max-w-[1980px] mx-auto my-12 relative ">
        <div className="relative overflow-hidden">
          <Image
            src="/assets/images/--ct-community.png"
            alt="community"
            height={456}
            width={960}
            className="w-full  h-[456px] rounded-r-3xl -ml-[30%] lg:-ml-[50%] md:hidden mxl:-ml-[60%]"
          />
        </div>
        <div className="-mt-[2%] -mr-[55%] -ml-[10%] lg:-ml-0 flex items-end justify-end gap-6 md:-mr-[75%] sm:hidden mxl:-ml-[20%]">
          <Image
            src="/assets/icons/--ct-community-curve-1.svg"
            alt="curve"
            height={456}
            width={960}
            className="w-full h-[600px] sm:hidden"
          />
          <Image
            src="/assets/icons/--ct-community-curve-2.svg"
            alt="curve"
            height={456}
            width={960}
            className="w-full h-[600px] sm:block hidden"
          />
          <div className="-mb-[2%] mmd:mb-12 mxl:mb-[-2%]">
            <Button>Be a part of this community</Button>
          </div>
        </div>

        <div className="items-end gap-7 -mr-[50%] ml-[5%] sm:flex hidden">
          <Image
            src="/assets/icons/--ct-community-curve-2.svg"
            alt="curve"
            height={456}
            width={960}
            className=" w-auto h-[400px] sm:block hidden"
          />
          <div className="-mb-[5%]">
            <Button>Be a part of this community</Button>
          </div>
        </div>
        <div className="relative h-max overflow-hidden">
          <Image
            src="/assets/images/--ct-community.png"
            alt="community"
            height={456}
            width={660}
            className="w-auto h-[456px] sm:h-[356px]  rounded-l-3xl ml-[10%] lg:ml-0 md:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
