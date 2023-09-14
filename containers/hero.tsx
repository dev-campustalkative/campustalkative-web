'use client';

import Button from '@/components/button';
import ImageSlug from '@/components/image-slug';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className=" pt-36 flex flex-col items-center justify-center gap-8">
      <h1 className=" font-sora text-center sm:text-2xl text-5xl font-bold max-w-[821px]">
        Join the largest community for youth growth and development in Africa
      </h1>
      <div className=" flex gap-2 sm:gap-3 items-center justify-center sm:flex-col">
        <Button>Join community</Button>
        <Button outline icon={AiOutlineArrowDown}>
          see our growth
        </Button>
      </div>

      <div
        style={{
          backgroundImage: 'url(/assets/icons/--ct-home-slug.svg)',
        }}
        className="w-[60%] m-auto bg-no-repeat bg-center bg-contain aspect-square relative mt-[60px] sm:w-[90%]"
      >
        <div className="absolute left-[-20%] top-[-10%] mxl:left-[-10%] sm:top-[-8%] sm:left-[-8%]  msm:w-[158px] msm:h-[158px] mmd:w-[236px] mmd:h-[236px] sm:w-[98px] sm:h-[98px]">
          <ImageSlug width={230} />
        </div>
        <div className="absolute left-[35%] top-[2%] msm:w-[98px] msm:h-[98px] mmd:w-[128px] mmd:h-[128px] sm:w-[64px] sm:h-[64px]">
          <ImageSlug width={128} />
        </div>
        <div className="absolute right-0 top-[0px] msm:w-[110px] msm:h-[110px] mmd:w-[150px] mmd:h-[150px] sm:top-[20px] sm:w-[75px] sm:h-[75px]">
          <ImageSlug width={150} />
        </div>
        <div className="absolute top-[120px] mxl:top-[220px] mxl:right-[120px] mmd:top-[160px] right-[50px] sm:top-[100px] sm:right-[40px] msm:w-[130px] msm:h-[130px] mmd:w-[190px] mmd:h-[190px] sm:w-[95px] sm:h-[95px]">
          <ImageSlug width={190} />
        </div>{' '}
        <div className="absolute left-0 top-[140px] mmd:top-[200px] mxl:top-[260px]   msm:w-[110px] sm:top-[120px] msm:h-[110px] mmd:w-[150px] mmd:h-[150px] sm:w-[75px] sm:h-[75px]">
          <ImageSlug width={150} />
        </div>
        {/* */}
      </div>
    </div>
  );
};

export default Hero;
