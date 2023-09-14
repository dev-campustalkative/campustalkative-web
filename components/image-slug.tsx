'use client';

import Image from 'next/image';

interface Props {
  width?: number;
}

const ImageSlug: React.FC<Props> = ({ width }) => {
  const getWindowWidth = () => {
    const windowWidth = window.innerWidth;
    // Define your breakpoints here
    if (windowWidth >= 1200) {
      return 300;
    } else if (windowWidth >= 768) {
      return 200;
    } else {
      return 150;
    }
  };

  //  const WindowWidth = getWidth();
  return (
    <div className="cursor-pointer group relative w-full h-full">
      <div
        className="bg-clip-content w-full h-full rounded-full  block animate-spin border-ct-primary-600 border border-b-ct-primary-100"
        style={{ animationDelay: `${Math.floor(Math.random() * 10) * 100}ms` }}
      ></div>
      <div className=" absolute top-0 w-full h-full">
        <Image
          src="/assets/images/--ct-slug-ex-1.png"
          className="group-hover:scale-125 transition p-1 w-full h-full"
          alt="image1"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};

export default ImageSlug;
