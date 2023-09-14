'use client';

import Image from 'next/image';

const Divider = () => {
  return (
    <div className="w-full md:hidden py-36">
      <Image
        src="/assets/icons/--ct-line-1.svg"
        alt="campustalkative merch"
        className="w-full h-full"
        height={500}
        width={350}
      />
    </div>
  );
};

export default Divider;
