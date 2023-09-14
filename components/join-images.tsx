'use client';

import Image from 'next/image';

const JoinImages = () => {
  return (
    <div className="relative h-[196px] w-[196px]">
      <Image
        src="/assets/images/--ct-join-1.png"
        alt="join campustalkative rep"
        className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-150 duration-300"
        height={56}
        width={56}
      />
      <Image
        src="/assets/images/--ct-join-1.png"
        alt="join campustalkative rep"
        className="rounded-full absolute top-1/3 right-0 transform -translate-y-1/2 hover:scale-150 duration-300"
        height={56}
        width={56}
      />
      <Image
        src="/assets/images/--ct-join-1.png"
        alt="join campustalkative rep"
        className="rounded-full absolute top-1/3 left-0 transform -translate-y-1/2 hover:scale-150 duration-300"
        height={56}
        width={56}
      />
      <Image
        src="/assets/images/--ct-join-1.png"
        alt="join campustalkative rep"
        className="rounded-full  absolute bottom-0 left-[15%] transform -translate-y-1/2 hover:scale-150 duration-300"
        height={56}
        width={56}
      />
      <Image
        src="/assets/images/--ct-join-1.png"
        alt="join campustalkative rep"
        className="rounded-full absolute bottom-0 right-[15%] transform -translate-y-1/2 hover:scale-150 duration-300"
        height={56}
        width={56}
      />
    </div>
  );
};

export default JoinImages;
