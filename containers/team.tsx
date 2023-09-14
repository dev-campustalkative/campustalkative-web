'use client';

import ImageSlug from '@/components/image-slug';

const Team = () => {
  return (
    <div className=" mmd:py-36 py-12">
      <div>
        <h1 className=" text-3xl font-bold font-sora text-ct-grey-1000 md:text-2xl  my-9 md:my-6">
          Our Team
        </h1>
      </div>
      <div className="grid mlg:grid-cols-4 mmd:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
        <div className="w-[236px] h-[236px] md:w-[151px] md:h-[151px]">
          <ImageSlug />
        </div>
      </div>
    </div>
  );
};

export default Team;
