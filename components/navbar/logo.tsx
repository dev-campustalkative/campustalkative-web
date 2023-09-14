'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      alt="CT logo"
      className=" w-[560px] mmd:w-[412px] mmd:block cursor-pointer"
      height={100}
      width={100}
      src={'/assets/images/--ct-logo.png'}
    />
  );
};

export default Logo;
