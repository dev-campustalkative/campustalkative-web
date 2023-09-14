'use client';

import Image from 'next/image';
import Container from '@/components/container';

const Sponsors = () => {
  return (
    <Container>
      <div className="flex gap-4 flex-wrap justify-center items-center my-6">
        <div>
          <Image
            src="/assets/icons/--ct-sponsors-1.svg"
            alt="sponsors"
            className="w-auto sm:w-[48px]"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/icons/--ct-sponsors-1.svg"
            alt="sponsors"
            className="w-auto sm:w-[48px]"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/icons/--ct-sponsors-1.svg"
            alt="sponsors"
            className="w-auto sm:w-[48px]"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/icons/--ct-sponsors-1.svg"
            alt="sponsors"
            className="w-auto sm:w-[48px]"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/icons/--ct-sponsors-1.svg"
            alt="sponsors"
            className="w-auto sm:w-[48px]"
            width={100}
            height={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default Sponsors;
